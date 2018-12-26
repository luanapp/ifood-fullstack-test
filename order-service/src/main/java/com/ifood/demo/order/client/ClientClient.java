package com.ifood.demo.order.client;

import com.ifood.demo.order.dto.Client;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Component
@FeignClient(serviceId = "client-controller", url = "http://localhost:8081/v1/clients/")
public interface ClientClient {

  @GetMapping(path = "/{id}")
  public Client getById(@PathVariable("id") String id);
}
