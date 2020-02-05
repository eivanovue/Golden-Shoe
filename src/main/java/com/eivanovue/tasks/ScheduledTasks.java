package com.eivanovue.tasks;

import com.eivanovue.model.Discount;
import com.eivanovue.model.Order;
import com.eivanovue.model.User;
import com.eivanovue.service.DiscountService;
import com.eivanovue.service.EmailService;
import com.eivanovue.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Component
public class ScheduledTasks {
    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);
    private final OrderService orderService;
    private final DiscountService discountService;
    private final EmailService emailService;
    private AtomicInteger seq = new AtomicInteger();


    public ScheduledTasks(OrderService orderService, DiscountService discountService, EmailService emailService) {
        this.orderService = orderService;
        this.discountService = discountService;
        this.emailService = emailService;
    }

//    @Scheduled(cron = "0 30 9 ? * MON")
    @Scheduled(fixedRate = 3600000) // everi hour
    public void generateDiscountVouchers() {
        ArrayList<Order> orders = new ArrayList<>((Collection<? extends Order>) orderService.getAllOrders());
        List<Order> filteredOrders = orders
                .stream()
                .filter(distinctByKey(order -> order.getUser().getEmail()))
                .collect(Collectors.toList());

        if(filteredOrders.size() > 0){
            filteredOrders.forEach(order -> {
                StringBuilder voucher = new StringBuilder();
                String[] initials = order.getUser().getName().split(" ");

                for (String initial : initials) {
                    voucher.append(initial.charAt(0));
                }

                voucher.append(LocalDateTime.now().getYear());
                voucher.append(seq.incrementAndGet());

                Discount discount = new Discount(voucher.toString(),LocalDateTime.now().plusMonths(6), 10);
                discountService.save(discount);
                sendDiscountVouchers(order.getUser(), discount);
                log.info("Discount vouchers generated.");
            });
        }


    }

    private void sendDiscountVouchers(User user, Discount discount){
        String message = "Dear " + user.getName() + ", \n \n" +
                "Thank you for your patronage. We would like to express our gratitude " +
                "with something special. For your next order use promo code -  " + discount.getVoucher() +
                " to get $" + discount.getValue() + " off. \n \n" +
                "Kind regards, \n " +
                "Golden Shoe team";
        emailService.sendSimpleMessage(user.getEmail(), "Golden Shoe Discount Voucher", message);
    }

    private static <T> Predicate<T> distinctByKey(
      Function<? super T, ?> keyExtractor) {

        Map<Object, Boolean> seen = new ConcurrentHashMap<>();
        return t -> seen.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
    }
}
