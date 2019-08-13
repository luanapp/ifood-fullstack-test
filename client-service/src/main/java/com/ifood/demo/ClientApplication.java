package com.ifood.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.ifood.demo.client.ClientEventHandler;


@SpringBootApplication
@EnableJpaRepositories("com.ifood.demo")
public class ClientApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(ClientApplication.class, args);
	}
	
    @Bean
    ClientEventHandler ClientEventHandler() {
        return new ClientEventHandler();
    }
}
