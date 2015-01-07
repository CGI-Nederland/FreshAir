*** Settings ***
Resource          ../Keywords/Keywords.robot
Library           Collections

*** Test Cases ***
Case 1: Departure date is 14 days in future
    [Documentation]    Booking date = today
    Given user "123.456.789.0" with password "abcd" is logged in
    And a new search is started
    And departure city is "AMS"
    And destination city is "CDG"
    And no return trip
    And depature date is 15 days after today
    When query is submitted
    Then query result is shown

Case 2: departure date less than 14 days in future
    [Documentation]    Booking date = today
    Given user "123.456.789.0" with password "abcd" is logged in
    And a new search is started
    And departure city is "AMS"
    And destination city is "CDG"
    And no return trip
    And depature date is 7 days after today
    When query is submitted
    Then the alert "The bookingdate must be 14 days in the future" is shown

*** Keywords ***
