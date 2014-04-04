@demo
Feature: Demonstrate the use of various browsers in a Selenium Grid setup

  @slow @android
  Scenario: Visit useragentstring.com using Android browser
    Given I use Android browser
    When I visit "http://www.useragentstring.com"
    Then I should see "User Agent String explained"
    And a screenshot should be taken

  @fast @firefox
  Scenario: Visit useragentstring.com using Firefox browser
    Given I use Firefox browser
    When I visit "http://www.useragentstring.com"
    Then I should see "User Agent String explained"
    And a screenshot should be taken

  @fast @chrome
  Scenario: Visit useragentstring.com using Chrome browser
    Given I use Chrome browser
    When I visit "http://www.useragentstring.com"
    Then I should see "User Agent String explained"
    And a screenshot should be taken

  @fast @safari
  Scenario: Visit useragentstring.com using Safari browser
    Given I use Safari browser
    When I visit "http://www.useragentstring.com"
    Then I should see "User Agent String explained"
    And a screenshot should be taken

  @fast @internet-explorer
  Scenario: Visit useragentstring.com using Internet Explorer browser
    Given I use Internet Explorer browser
    When I visit "http://www.useragentstring.com"
    Then I should see "User Agent String explained"
    And a screenshot should be taken
