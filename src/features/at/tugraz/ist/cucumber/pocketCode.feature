@pocket-code
Feature: Provide key functionalities to Catrobat's community website

  @fast
  Scenario: Open the startpage and check for a certain text
    Given I am on the startpage
    When I change the language to "English"
    Then the title of the featured section should be "FEATURED"
    And a screenshot should be taken

  @slow
  Scenario Outline: Use the language switch to change the website's language
    Given I am on the startpage
    And the website's language is "English"
    When I change the language to "<language>"
    Then the title of the newest section should be "<title>"
    And a screenshot should be taken

    Examples:
    	| language      | title            |
    	| Deutsch       | NEUESTE          |
    	| 日本語         | 最新             |
    	| русский       | НОВЕЙШИЕ ПРОЕКТЫ |
    	| Bahasa Melayu‬ | PROJEK TERBARU   |

  @fast
  Scenario: Use the search function to find a project
    Given I am on the startpage
    And the website's language is "English"
    When I use the top search box to search for a project called "Tic-Tac-Toe"
    Then I should see "Search Results"
    And the number of search results should be at least 1
    And a screenshot should be taken

  @fast
  Scenario: Increase the download count when a project is downloaded
    Given I am on the details page of the project 1478
    And the website's language is "English"
    When I press the download button
    Then the download count should be increased by one
    And a screenshot should be taken
