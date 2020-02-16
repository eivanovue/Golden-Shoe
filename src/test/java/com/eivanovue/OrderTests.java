package com.eivanovue;

import com.eivanovue.dto.OrderForm;
import com.eivanovue.dto.OrderProductDto;
import com.eivanovue.model.*;
import com.eivanovue.service.*;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
@Transactional
@AutoConfigureMockMvc
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class OrderTests {

  @Autowired
  private OrderService orderService;
  @Autowired
  private ProductService productService;
  @Autowired
  private ProductSizeService productSizeService;
  @Autowired
  private DiscountService discountService;
  @Autowired
  private DeliveryService deliveryService;
  @Autowired
  private MockMvc mvc;

  private OrderForm orderForm;

  @Before
  public void setUp(){
    Address address = new Address("67 Downs Road", "Canterbury", "United Kingdom", "CT2 7TN");
    Delivery delivery = new Delivery("Express Delivery", 2, 3.99);
    deliveryService.save(delivery);
    Discount discount = new Discount("DISCOUNTTEST10OFF", LocalDateTime.now().plusMonths(1), 10);
    discountService.save(discount);
    User user = new User("Emil Ivanov", "emil@eivanovue.com", "07932893920");

    List<OrderProductDto> orderProductDtos = new ArrayList<>();
    OrderProductDto orderProductDto = new OrderProductDto();
    ProductSize productSize = new ProductSize(11, 2);
    productSizeService.save(productSize);
    orderProductDto.setProduct(productService.getProduct(1));
    orderProductDto.setProductSize(productSize);
    orderProductDto.setQuantity(1);
    orderProductDtos.add(orderProductDto);

    orderForm = new OrderForm();
    orderForm.setAddress(address);
    orderForm.setDelivery(delivery);
    orderForm.setDiscount(discount);
    orderForm.setUser(user);
    orderForm.setProductOrders(orderProductDtos);
  }

  @Test
  public void createOrderTest() {
    Order order = orderService.createOrderFromForm(orderForm);
    assertThat(order.getReference()).isEqualTo("ORDER20201");
    assertThat(order.getUser()).isEqualTo(orderForm.getUser());
    assertThat(order.getDelivery()).isEqualTo(orderForm.getDelivery());
    assertThat(order.getAddress()).isEqualTo(orderForm.getAddress());
    assertThat(order.getDiscount()).isEqualTo(orderForm.getDiscount());
  }


  public static String asJsonString(final Object obj) {
    try {
      ObjectMapper objectMapper = new ObjectMapper();
      objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
      return objectMapper.writeValueAsString(obj);
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }


}
