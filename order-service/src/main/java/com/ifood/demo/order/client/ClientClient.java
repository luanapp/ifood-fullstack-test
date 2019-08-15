package com.ifood.demo.order.client;

import com.ifood.demo.order.dto.Client;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.Resources;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Collections;

@Component
@FeignClient(serviceId = "client-service", url = "${feign.client-service.url:http://localhost:8081}")
public interface ClientClient {

    @GetMapping(path = "/v1/clients")
    Resources<Client> findAllFiltered(@RequestParam("name") String name,
                                      @RequestParam("email") String email,
                                      @RequestParam("phone") String phone);

    class ClientClientFallback implements ClientClient {
        @Override
        public Resources<Client> findAllFiltered(String name, String email, String phone) {
            return new Resources<>(Collections.emptyList());
        }
    }
}
