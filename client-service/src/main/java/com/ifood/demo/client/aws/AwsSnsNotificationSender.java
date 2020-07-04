package com.ifood.demo.client.aws;

import com.ifood.demo.client.aws.model.MessageEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.aws.messaging.core.NotificationMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class AwsSnsNotificationSender {

    private String topicUrl;
    private NotificationMessagingTemplate messagingTemplate;

    @Autowired
    public AwsSnsNotificationSender(@Value("${aws.sns.client.topic.url}") String topicUrl,
                                    NotificationMessagingTemplate messagingTemplate) {
        this.topicUrl = topicUrl;
        this.messagingTemplate = messagingTemplate;
    }

    public <T extends MessageEvent> void sendNotification(T message) {
        messagingTemplate.sendNotification(topicUrl, message, "Client entity changed!");
    }
}
