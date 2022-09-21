@foo
Feature: Test Betsson Log-in Failure Feature UI

  Background: Navigation
    Given Go to Betsson website

  Scenario: Proceeed as casual registration event
    When Proceeded to login with invalid email input
    Then Expect to get fail message