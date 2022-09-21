@foo
Feature: Test Betsson Login Failure Feature API

  Scenario: Send HTTP POST Request to Back-End with failing credential.
    Given A new member login operation is initialized with failing email
