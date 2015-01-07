*** Settings ***
Resource          ../Keywords/Keywords.robot
Library           Collections

*** Test Cases ***
Case 1: Return date should be later to departure date
    Given user "123.456.789.0" with password "abcd" is logged in
    And a new search is started
    And departure city is "AMS"
    And destination city is "CDG"
    And return trip
    And depature date is 15 days after today
    And return date is 17 days after today
    When query is submitted
    Then query result is shown

Case 2: Return date can be equal to departure date
    Given user "123.456.789.0" with password "abcd" is logged in
    And a new search is started
    And departure city is "AMS"
    And destination city is "CDG"
    And return trip
    And depature date is 15 days after today
    And return date is 15 days after today
    When query is submitted
    Then query result is shown

Case 3: Return date before departure date should result in alert
    # Test case 2
    Given user "123.456.789.0" with password "abcd" is logged in
    And a new search is started
    And departure city is "AMS"
    And destination city is "CDG"
    And return trip
    And depature date is 17 days after today
    And return date is 15 days after today
    When query is submitted
    Then the alert "Date of returnflight is incorrect!" is shown

*** Keywords ***
