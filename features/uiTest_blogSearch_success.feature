@foo
Feature: Test Betsson Docs Search Feature UI

  Background: Navigation
    Given Go to Betsson website

  Scenario: Find related article
    When Search for the article
    Then We find correct article