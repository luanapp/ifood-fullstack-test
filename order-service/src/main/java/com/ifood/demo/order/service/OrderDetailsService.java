package com.ifood.demo.order.service;

import com.ifood.demo.order.client.ClientClient;
import com.ifood.demo.order.dto.Client;
import com.ifood.demo.order.dto.Order;
import com.ifood.demo.order.dto.OrderDetails;
import com.ifood.demo.order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Service
public class OrderDetailsService {

  @Autowired private ClientClient clientClient;
  @Autowired private OrderRepository orderRepository;

  /**
   * Retrieve the order details that matches the search criteria given by the parameters
   * @param startDate order creation date must be after this date
   * @param endDate order creation date must be before this date
   * @param clientName client name to filter
   * @param phone client phone to filter
   * @param email client email to filter
   * @return order details list matching the criteria
   */
  public List<OrderDetails> getOrderDetails(String startDate, String endDate, String clientName,
      String phone, String email) {
    List<OrderDetails> detailsList = new ArrayList<>();

    Date start = Date.from(Instant.parse(startDate));
    Date end = Date.from(Instant.parse(endDate));

    //TODO filter by the client search criteria
    Collection<Order> orders =
        orderRepository.findByCreatedAtBetween(start, end);
    for (Order order : orders) {
      Client client = clientClient.getById(order.getClientId().toString());
      detailsList.add(OrderDetails.builder()
          .createdAt(order.getCreatedAt())
          .name(client.getName())
          .email(client.getEmail())
          .phone(client.getPhone())
          .items(order.getItems())
          .build());
    }

    return detailsList;
  }
}
