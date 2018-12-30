package com.ifood.demo.order.document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.persistence.Id;

@Document
@Data
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class Order {

  private @Id UUID id = UUID.randomUUID();
  private final UUID clientId;
  private final UUID restaurantId;
  private final Date createdAt;
  private final Date confirmedAt;
  private final List<Item> items;

  protected Order() {
    this(null, null, null, null, null);
  }


  @Data
  @Builder
  @RequiredArgsConstructor
  public static class Item {

    private final String description;
    private final Integer quantity;
    private final Double price;

    protected Item() {
      this(null, null, null);
    }
  }
}
