@foo
Feature: Test Betsson Register Failure Feature API

  Scenario: Send HTTP POST Request to Back-End with failing credential.
    Given A new member register operation is initialized with invalid password
