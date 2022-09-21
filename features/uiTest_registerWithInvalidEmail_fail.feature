@foo
Feature: Test Betsson Register Failure Feature UI

  Background: Navigation
    Given Go to Betsson website

  Scenario: Proceeed as casual registration event
    When Proceed to register screen
    Then Receive error message for invalid email