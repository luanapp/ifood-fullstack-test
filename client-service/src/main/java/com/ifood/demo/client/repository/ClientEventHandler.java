package com.ifood.demo.client.repository;

import com.ifood.demo.client.aws.AwsSnsNotificationSender;
import com.ifood.demo.client.aws.model.MessageEvent;
import com.ifood.demo.client.document.Client;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

import java.util.UUID;

@Slf4j
@RepositoryEventHandler(Client.class)
public class ClientEventHandler {

    @Autowired
    private AwsSnsNotificationSender notificationSender;

    @HandleAfterCreate
    public void handleClientCreate(Client c) {
        log.info("handleClientCreate: {}", c.getId());
        sendChangeNotification(c, MessageEvent.ActionType.CREATE);
    }

    @HandleAfterSave
    public void handleClientSave(Client c) {
        log.info("handleClientSave: {}", c.getId());
        sendChangeNotification(c, MessageEvent.ActionType.UPDATE);
    }

    @HandleAfterDelete
    public void handleClientDelete(Client c) {
        log.info("handleClientDelete: {}", c.getId());
        sendChangeNotification(c, MessageEvent.ActionType.DELETE);
    }

    private void sendChangeNotification(Client c, MessageEvent.ActionType type) {
        MessageEvent event = MessageEvent.builder()
                .eventId(UUID.randomUUID())
                .actionType(type)
                .entity(c)
                .build();

        notificationSender.sendNotification(event);
    }
}
