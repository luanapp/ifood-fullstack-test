package com.ifood.demo.order.dto;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document
@Builder
@RequiredArgsConstructor
public class OrderDetails {
  private final Date createdAt;
  private final String name;
  private final String email;
  private final String phone;
  private final List<Order.Item> items;

  protected OrderDetails() {
    this(null, null, null, null, null);
  }
}
