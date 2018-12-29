package com.ifood.demo.client.controller;

import com.ifood.demo.client.document.Client;
import com.ifood.demo.client.repository.ClientRepository;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

@RepositoryRestController
@RequestMapping("/v1/clients")
public class ClientController {

  @Autowired ClientRepository clientRepository;

  @RequestMapping("/")
  public ResponseEntity<Iterable<Client>> findAllFiltered(
      @QuerydslPredicate(root = Client.class, bindings = ClientRepository.class)
          Predicate predicate) {
    return ResponseEntity.ok(clientRepository.findAll(predicate));
  }
}
