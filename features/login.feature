@login @test
Feature: Login

  @success
  Scenario: Validate login when valid username and password is provided

    Given I reach login page
    When I login with username as "tomsmith" and password as "SuperSecretPassword!"
    Then Success Message: "You logged into a secure area!" should be displayed

  @invalidPassword @failure
  Scenario: Validate login when valid username and invalid password is provided

    Given I reach login page
    When I login with username as "tomsmith" and password as "SuperSecretPassword"
    Then Error Message: "Your password is invalid!" should be displayed

  @invalidUsername @failure
  Scenario: Validate login when valid username and invalid password is provided

    Given I reach login page
    When I login with username as "tomsmit" and password as "SuperSecretPassword!"
    Then Error Message: "Your username is invalid!" should be displayed