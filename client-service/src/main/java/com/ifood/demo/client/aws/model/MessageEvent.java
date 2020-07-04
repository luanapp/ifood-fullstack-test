package com.ifood.demo.client.aws.model;

import lombok.Builder;
import lombok.Value;

import java.util.UUID;

@Value
@Builder
public class MessageEvent {
    private UUID eventId;
    private ActionType actionType;
    private Object entity;

    public enum ActionType {
        CREATE,
        UPDATE,
        DELETE,
    }
}
