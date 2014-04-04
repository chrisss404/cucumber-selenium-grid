$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("at/tugraz/ist/cucumber/pocketCode.feature");
formatter.feature({
  "id": "provide-key-functionalities-to-catrobats-community-website",
  "tags": [
    {
      "name": "@pocket-code",
      "line": 1
    }
  ],
  "description": "",
  "name": "Provide key functionalities to Catrobats community website",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 257016,
  "status": "passed"
});
formatter.scenario({
  "id": "provide-key-functionalities-to-catrobats-community-website;open-the-startpage-and-check-for-a-certain-text",
  "tags": [
    {
      "name": "@fast",
      "line": 4
    }
  ],
  "description": "",
  "name": "Open the startpage and check for a certain text",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the startpage",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I change the language to \"English\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "the title of the featured section should be \"FEATURED\"",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "SeleniumStepdefs.I_am_on_the_startpage()"
});
formatter.result({
  "duration": 14096706703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 26
    }
  ],
  "location": "SeleniumStepdefs.I_change_the_language_to(String)"
});
formatter.result({
  "duration": 825880106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FEATURED",
      "offset": 45
    }
  ],
  "location": "SeleniumStepdefs.the_title_of_the_featured_section_should_be(String)"
});
formatter.result({
  "duration": 37287141,
  "status": "passed"
});
formatter.after({
  "duration": 82017965,
  "status": "passed"
});
formatter.before({
  "duration": 62019,
  "status": "passed"
});
formatter.scenario({
  "id": "provide-key-functionalities-to-catrobats-community-website;use-the-search-function-to-find-a-project",
  "tags": [
    {
      "name": "@fast",
      "line": 24
    }
  ],
  "description": "",
  "name": "Use the search function to find a project",
  "keyword": "Scenario",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the startpage",
  "keyword": "Given ",
  "line": 26
});
formatter.step({
  "name": "the websites language is \"English\"",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "I use the top search box to search for a project called \"Tic-Tac-Toe\"",
  "keyword": "When ",
  "line": 28
});
formatter.step({
  "name": "I should see \"Search Results\"",
  "keyword": "Then ",
  "line": 29
});
formatter.step({
  "name": "the number of search results should be 1",
  "keyword": "And ",
  "line": 30
});
formatter.match({
  "location": "SeleniumStepdefs.I_am_on_the_startpage()"
});
formatter.result({
  "duration": 11934526035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 26
    }
  ],
  "location": "SeleniumStepdefs.the_websites_language_is(String)"
});
formatter.result({
  "duration": 797712278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tic-Tac-Toe",
      "offset": 57
    }
  ],
  "location": "SeleniumStepdefs.I_use_the_top_search_box_to_search_for_a_project_called(String)"
});
formatter.result({
  "duration": 1177043171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Results",
      "offset": 14
    }
  ],
  "location": "SeleniumStepdefs.I_should_see(String)"
});
formatter.result({
  "duration": 125032372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "SeleniumStepdefs.the_number_of_results_should_be(int)"
});
formatter.result({
  "duration": 36353782,
  "status": "passed"
});
formatter.after({
  "duration": 74119475,
  "status": "passed"
});
formatter.before({
  "duration": 28775,
  "status": "passed"
});
formatter.scenario({
  "id": "provide-key-functionalities-to-catrobats-community-website;increase-the-download-count-when-a-project-is-downloaded",
  "tags": [
    {
      "name": "@fast",
      "line": 32
    }
  ],
  "description": "",
  "name": "Increase the download count when a project is downloaded",
  "keyword": "Scenario",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the details page of the project 1478",
  "keyword": "Given ",
  "line": 34
});
formatter.step({
  "name": "the websites language is \"English\"",
  "keyword": "And ",
  "line": 35
});
formatter.step({
  "name": "I press the download button",
  "keyword": "When ",
  "line": 36
});
formatter.step({
  "name": "the download count should be increased by one",
  "keyword": "Then ",
  "line": 37
});
formatter.match({
  "arguments": [
    {
      "val": "1478",
      "offset": 40
    }
  ],
  "location": "SeleniumStepdefs.I_am_on_the_details_page_of_the_project(int)"
});
formatter.result({
  "duration": 7426595000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 26
    }
  ],
  "location": "SeleniumStepdefs.the_websites_language_is(String)"
});
formatter.result({
  "duration": 753959232,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumStepdefs.I_press_the_download_button()"
});
formatter.result({
  "duration": 349052184,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumStepdefs.the_download_count_should_be_increased_by_one()"
});
formatter.result({
  "duration": 3997858386,
  "status": "passed"
});
formatter.after({
  "duration": 67916174,
  "status": "passed"
});
});