@api
Feature: API Test

    @getBooking
    Scenario: Validate get bookings
        Given URI of request is "https://restful-booker.herokuapp.com/booking"
        When I get list of bookings
        Then request should be successful                           

    @updateBooking
    Scenario: Validate update bookings
        Given URI of request is "https://restful-booker.herokuapp.com/booking"
        When I get list of bookings
        Then request should be successful 