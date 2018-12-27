package com.ifood.demo.order.controller;

import com.ifood.demo.order.client.ClientClient;
import com.ifood.demo.order.dto.Client;
import com.ifood.demo.order.dto.Order;
import com.ifood.demo.order.dto.OrderDetails;
import com.ifood.demo.order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@RestController
public class OrderDetailsController {

  @Autowired private ClientClient clientClient;
  @Autowired private OrderRepository orderRepository;

  @GetMapping(path = "${spring.data.rest.base-path}/orders/search")
  public ResponseEntity<Collection<OrderDetails>> getOrderDetails(@RequestParam("clientId") String clientId) {

    List<OrderDetails> detailsList = new ArrayList<>();

    Collection<Order> orders = orderRepository.findByClientId(UUID.fromString(clientId));
    for(Order order : orders) {
      Client client = clientClient.getById(clientId);
      detailsList.add(OrderDetails.builder()
          .createdAt(order.getCreatedAt())
          .name(client.getName())
          .email(client.getEmail())
          .phone(client.getPhone())
          .items(order.getItems())
          .build());
    }
    return new ResponseEntity<>(detailsList, HttpStatus.OK);
  }
}
