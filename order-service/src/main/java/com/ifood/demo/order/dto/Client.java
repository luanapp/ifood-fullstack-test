package com.ifood.demo.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class Client {

  private UUID id;
  private final String name;
  private final String email;
  private final String phone;

  protected Client() {
    this(null, null, null);
  }
}
