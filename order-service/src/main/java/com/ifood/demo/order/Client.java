package com.ifood.demo.order;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@RequiredArgsConstructor
//TODO is it better to create a lib for the models?
public class Client {

  private @Id @GeneratedValue UUID id;
  private final String name;
  private final String email;
  private final String phone;

  protected Client() {
    this(null, null, null);
  }
}
