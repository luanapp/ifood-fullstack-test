package com.ifood.demo.client;

import java.util.logging.Logger;

import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RepositoryEventHandler(Client.class)
public class ClientEventHandler {
	Logger log = Logger.getLogger("Class ClientEventHandler");

	@HandleAfterCreate 
	public void handleClientCreate(Client c){
		log.info("handleClientCreate: {}");
		String name = c.getName();
		String email = c.getEmail();
		String phone = c.getPhone();
 }
	
	@HandleAfterSave 
	public void handleClientSave(Client c) {
		log.info("handleClientSave: {}");
		String name = c.getName();
		String email = c.getEmail();
		String phone = c.getPhone();
	}
	
	@HandleAfterDelete
	public void handleClientDelete(Client c) {
		log.info("handleClientDelete: {}");
		String name = c.getName();
		String email = c.getEmail();
		String phone = c.getPhone();
	}
}

