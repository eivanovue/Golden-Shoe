package com.eivanovue.tasks;

import com.eivanovue.model.Discount;
import com.eivanovue.model.User;
import com.eivanovue.service.DiscountService;
import com.eivanovue.service.EmailService;
import com.eivanovue.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.concurrent.atomic.AtomicInteger;

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

        orderService.getAllOrders().forEach(order -> {
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
        });

        log.info("Discount vouchers generated.");
    }

    public void sendDiscountVouchers(User user, Discount discount){
        String message = "Dear " + user.getName() + ", \n \n" +
                "Thank you for your patronage. We would like to express our gratitude " +
                "with something special. For your next order use promo code -  " + discount.getVoucher() +
                " to get $" + discount.getValue() + " off. \n \n" +
                "Kind regards, \n " +
                "Golden Shoe team";
        emailService.sendSimpleMessage(user.getEmail(), "Golden Shoe Discount Voucher", message);
    }
}
