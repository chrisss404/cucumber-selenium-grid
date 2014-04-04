$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("at/tugraz/ist/cucumber/demonstration.feature");
formatter.feature({
  "id": "demonstrate-the-use-of-various-browsers-in-a-selenium-grid-setup",
  "tags": [
    {
      "name": "@demo",
      "line": 1
    }
  ],
  "description": "",
  "name": "Demonstrate the use of various browsers in a Selenium Grid setup",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 212038,
  "status": "passed"
});
formatter.scenario({
  "id": "demonstrate-the-use-of-various-browsers-in-a-selenium-grid-setup;visit-useragentstring.com-using-android-browser",
  "tags": [
    {
      "name": "@slow",
      "line": 4
    },
    {
      "name": "@android",
      "line": 4
    }
  ],
  "description": "",
  "name": "Visit useragentstring.com using Android browser",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "I use Android browser",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I visit \"http://www.useragentstring.com\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I should see \"User Agent String explained\"",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "a screenshot should be taken",
  "keyword": "And ",
  "line": 9
});
formatter.match({
  "location": "SeleniumStepdefs.I_use_Android_browser()"
});
formatter.result({
  "duration": 10116929386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.useragentstring.com",
      "offset": 9
    }
  ],
  "location": "SeleniumStepdefs.I_visit(String)"
});
formatter.result({
  "duration": 860785939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User Agent String explained",
      "offset": 14
    }
  ],
  "location": "SeleniumStepdefs.I_should_see(String)"
});
formatter.result({
  "duration": 4238147304,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumStepdefs.a_screenshot_should_be_taken()"
});
formatter.write("");
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 1133454391,
  "status": "passed"
});
formatter.after({
  "duration": 2328246188,
  "status": "passed"
});
});