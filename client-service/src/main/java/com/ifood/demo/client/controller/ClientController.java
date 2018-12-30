package com.ifood.demo.client.controller;

import com.ifood.demo.client.document.Client;
import com.ifood.demo.client.repository.ClientRepository;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RepositoryRestController
@RequestMapping("/v1/clients")
public class ClientController {

  @Autowired private ClientRepository clientRepository;


  // Just for unit testing purposes. This will be mapped to /v1/clients by spring rest data
  @GetMapping("/query")
  public ResponseEntity<Iterable<Client>> findAllFiltered(
      @QuerydslPredicate(root = Client.class, bindings = ClientRepository.class)
          Predicate predicate) {
    return ResponseEntity.ok(clientRepository.findAll(predicate));
  }
}
