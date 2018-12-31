package com.ifood.demo.order.service;

import com.ifood.demo.order.client.ClientClient;
import com.ifood.demo.order.document.Order;
import com.ifood.demo.order.dto.Client;
import com.ifood.demo.order.dto.OrderDetails;
import com.ifood.demo.order.exception.ServiceException;
import com.ifood.demo.order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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
      String phone, String email) throws ServiceException {
    List<OrderDetails> detailsList = new ArrayList<>();

    Date start = Date.from(Instant.parse(startDate));
    Date end = Date.from(Instant.parse(endDate));

    Collection<Client> clients =
        clientClient.findAllFiltered(clientName, email, phone).getContent();

    Collection<Order> orders =
        orderRepository.findByCreatedAtBetween(start, end);
    for (Order order : orders) {
      Optional<Client> client = clients.stream()
          .filter(cli -> cli.getId().equals(order.getClientId()))
          .findFirst();

      if (client.isPresent()) {
        detailsList.add(OrderDetails.builder()
            .createdAt(order.getCreatedAt())
            .name(client.get().getName())
            .email(client.get().getEmail())
            .phone(client.get().getPhone())
            .items(order.getItems())
            .build());
      }
    }

    return detailsList;
  }
}
