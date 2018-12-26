package com.ifood.demo.order.controller;

import com.ifood.demo.order.dto.Client;
import com.ifood.demo.order.dto.OrderDetails;
import com.ifood.demo.order.repository.OrderRepository;
import com.ifood.demo.order.client.ClientClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class OrderDetailsController {

  @Autowired private ClientClient clientClient;
  @Autowired private OrderRepository orderRepository;

  @GetMapping(path = "${spring.data.rest.base-path}/orders/details/{clientId}")
  public OrderDetails getOrderDetails(@PathVariable("clientId") String clientId) {

    //TODO Fix method to return the correct response object
    Client client = clientClient.getById(clientId);
    return OrderDetails.builder()
        .client(client)
        .build();
  }
}
