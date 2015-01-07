*** Settings ***
Resource          ../Keywords/Keywords.robot
Library           Collections

*** Test Cases ***
Case 1: Arrival date should at 330 day after booking date
    Given user "123.456.789.0" with password "abcd" is logged in
    And a new search is started
    And departure city is "AMS"
    And destination city is "CDG"
    And no return trip
    And depature date is 330 days after today
    When query is submitted
    Then query result is shown

Case 2: Arrival date should at 329 day after booking date
    Given user "123.456.789.0" with password "abcd" is logged in
    And a new search is started
    And departure city is "AMS"
    And destination city is "CDG"
    And no return trip
    And depature date is 329 days after today
    When query is submitted
    Then query result is shown

Case 3: Arrival date 331 day after booking date
    Given user "123.456.789.0" with password "abcd" is logged in
    And a new search is started
    And departure city is "AMS"
    And destination city is "CDG"
    And no return trip
    And depature date is 331 days after today
    When query is submitted
    Then the alert "The departing date must be at most 330 days in the future" is shown

*** Keywords ***
