package com.ifood.demo.order.controller;

import org.springframework.hateoas.VndErrors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@ControllerAdvice(assignableTypes = OrderDetailsController.class)
@RequestMapping(produces = "application/vnd.error+json")
public class OrderDetailsControllerAdvice {

  @ExceptionHandler(Exception.class)
  public ResponseEntity<VndErrors> defaultHandler(Exception e) {
    return error(e, HttpStatus.INTERNAL_SERVER_ERROR, String.valueOf(e.getMessage()));
  }

  private <E extends Exception> ResponseEntity<VndErrors> error(final E exception,
      final HttpStatus httpStatus, final String logRef) {

    final String message =
        Optional.of(exception.getMessage())
            .orElse(exception.getClass().getSimpleName());

    return new ResponseEntity<>(new VndErrors(logRef, message), httpStatus);
  }
}
