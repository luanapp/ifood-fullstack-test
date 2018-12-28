package com.ifood.demo.order.controller;

import com.ifood.demo.order.dto.OrderDetails;
import com.ifood.demo.order.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RepositoryRestController
public class OrderDetailsController {

  @Autowired private OrderDetailsService orderDetailsService;

  @GetMapping(path = "/orders/details")
  public ResponseEntity<List<OrderDetails>> getOrderDetails(
      @RequestParam("startDate") String startDate, @RequestParam("endDate") String endDate,
      @RequestParam(name = "clientName", required = false) String clientName,
      @RequestParam(name = "phone", required = false) String phone,
      @RequestParam(name = "email", required = false) String email) {

    List<OrderDetails> orderDetails =
        orderDetailsService.getOrderDetails(startDate, endDate, clientName, phone, email);
    return ResponseEntity.ok(orderDetails);
  }
}
