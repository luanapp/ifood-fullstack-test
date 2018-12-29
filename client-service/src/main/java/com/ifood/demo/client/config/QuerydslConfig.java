package com.ifood.demo.client.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.data.web.config.QuerydslWebConfiguration;

@Configuration
@EnableSpringDataWebSupport
@Import({QuerydslWebConfiguration.class})
public class QuerydslConfig {
}
