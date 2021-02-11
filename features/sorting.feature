@sorting @test
Feature: Table sort

  Scenario: Validate table sorting by last name column 

    Given I reach tables page
    When I click on last name column header in table 2
    Then Last name column should be sorted alphabetically
