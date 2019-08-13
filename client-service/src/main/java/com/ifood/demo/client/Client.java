package com.ifood.demo.client;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
public class Client {

	private @Id @GeneratedValue UUID id;
	private final String name;
	private final String email;
	private final String phone;

	
	public String getName() {
		return name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getPhone() {
		return phone;
	}

	protected Client() {
		this.name = null;
		this.email = null;
		this.phone = null;
	}
	
}
