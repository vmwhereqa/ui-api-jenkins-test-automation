Feature: Filter Restaurants

  @deliveryCost
  Scenario: Validate restaurants result based on delivery cost

    Given Lieferando home page is launched
    And I search for restaurants near 'Heinersdorfer Str., 13086 Berlin'
    When I filter restaurants with 'Delivery Costs' as '1,00 € or less'
    Then Displayed restaurants delivery costs should be 1 € or less

  @cuisine
  Scenario: Validate restaurants result based on cuisine

    Given Lieferando home page is launched
    And I search for restaurants near 'Heinersdorfer Str., 13086 Berlin'
    When I filter restaurants with 'cuisine' as 'Italian'
    Then Only restaurants with Italian cuisine should be displayed