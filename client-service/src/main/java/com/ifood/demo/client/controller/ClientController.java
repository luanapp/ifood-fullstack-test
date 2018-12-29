package com.ifood.demo.client.controller;

import com.ifood.demo.client.dto.Client;
import com.ifood.demo.client.repository.ClientRepository;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RepositoryRestController
@RequestMapping("/clients")
public class ClientController {

  @Autowired ClientRepository clientRepository;


  public ResponseEntity<List<Client>> findAllFiltered(
      @QuerydslPredicate(root = Client.class, bindings = ClientRepository.class)
          Predicate predicate,
      @PageableDefault(sort = {"name"}, page = 0, size = Integer.MAX_VALUE) Pageable pageable) {
    return ResponseEntity.ok(clientRepository.findAll(predicate, pageable).getContent());
  }
}
