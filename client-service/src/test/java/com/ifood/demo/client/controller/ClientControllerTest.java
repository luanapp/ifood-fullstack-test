package com.ifood.demo.client.controller;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.ifood.demo.client.ClientApplication;
import com.ifood.demo.client.document.Client;
import com.ifood.demo.client.repository.ClientRepository;
import com.querydsl.core.types.Predicate;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.data.web.querydsl.QuerydslPredicateArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {ClientApplication.class})
public class ClientControllerTest {

  private static final String CLIENT1_NAME = "Some Name";
  private static final String CLIENT1_EMAIL = "email@email.com";
  private static final String CLIENT1_PHONE = "888888";
  private static final String CLIENT1_PREDICATE = "containsIc(client.name,"
      + CLIENT1_NAME + ") && containsIc(client.email," + CLIENT1_EMAIL
      + ") && containsIc(client.phone," + CLIENT1_PHONE + ")";

  @Autowired private QuerydslPredicateArgumentResolver querydslPredicateArgumentResolver;

  private MockMvc mvc;

  @InjectMocks private ClientController clientController;

  @Mock private ClientRepository clientRepository;

  @Before
  public void setUp() {
    MockitoAnnotations.initMocks(this);
    mvc = MockMvcBuilders.standaloneSetup(clientController)
        .setCustomArgumentResolvers(new PageableHandlerMethodArgumentResolver())
        .setCustomArgumentResolvers(querydslPredicateArgumentResolver)
        .build();
  }

  @Test
  public void findAllFiltered() throws Exception {
    Client client1 = Client.builder()
        .name(CLIENT1_NAME)
        .email(CLIENT1_EMAIL)
        .phone(CLIENT1_PHONE)
        .build();
    List<Client> clients = Arrays.asList(client1);


    when(clientRepository.findAll(any(Predicate.class))).then(invocation -> {
      Predicate predicate = (Predicate) invocation.getArguments()[0];
      String actualPredicate = predicate.toString();
      assertEquals(CLIENT1_PREDICATE, actualPredicate);
      return clients;
    });

    mvc.perform(get("/v1/clients/query")
        .accept(MediaType.APPLICATION_JSON)
        .param("name", CLIENT1_NAME)
        .param("email", CLIENT1_EMAIL)
        .param("phone", CLIENT1_PHONE))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(1)))
        .andExpect(jsonPath("$[0].name", is(CLIENT1_NAME)))
        .andExpect(jsonPath("$[0].email", is(CLIENT1_EMAIL)))
        .andExpect(jsonPath("$[0].phone", is(CLIENT1_PHONE)))
        .andReturn();
  }
}