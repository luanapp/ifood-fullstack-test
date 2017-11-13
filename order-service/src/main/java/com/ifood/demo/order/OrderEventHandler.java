package com.ifood.demo.order;

import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RepositoryEventHandler(Order.class)
public class OrderEventHandler {

	@HandleAfterCreate
	public void handleOrderCreate(Order c) {
		log.info("handleOrderCreate: {}", c.getId());
	}

	@HandleAfterSave
	public void handleOrderSave(Order c) {
		log.info("handleOrderSave: {}", c.getId());
	}

	@HandleAfterDelete
	public void handleOrderDelete(Order c) {
		log.info("handleOrderDelete: {}", c.getId());
	}
}
