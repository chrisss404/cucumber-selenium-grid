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
  "duration": 150298,
  "status": "passed"
});
formatter.scenario({
  "id": "demonstrate-the-use-of-various-browsers-in-a-selenium-grid-setup;visit-useragentstring.com-using-firefox-browser",
  "tags": [
    {
      "name": "@fast",
      "line": 11
    },
    {
      "name": "@firefox",
      "line": 11
    }
  ],
  "description": "",
  "name": "Visit useragentstring.com using Firefox browser",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I use Firefox browser",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "I visit \"http://www.useragentstring.com\"",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I should see \"User Agent String explained\"",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "a screenshot should be taken",
  "keyword": "And ",
  "line": 16
});
formatter.match({
  "location": "SeleniumStepdefs.I_use_Firefox_browser()"
});
formatter.result({
  "duration": 2329009692,
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
  "duration": 531859216,
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
  "duration": 126974797,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumStepdefs.a_screenshot_should_be_taken()"
});
formatter.write("");
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 261736618,
  "status": "passed"
});
formatter.after({
  "duration": 66338319,
  "status": "passed"
});
formatter.before({
  "duration": 28216,
  "status": "passed"
});
formatter.scenario({
  "id": "demonstrate-the-use-of-various-browsers-in-a-selenium-grid-setup;visit-useragentstring.com-using-chrome-browser",
  "tags": [
    {
      "name": "@fast",
      "line": 18
    },
    {
      "name": "@chrome",
      "line": 18
    }
  ],
  "description": "",
  "name": "Visit useragentstring.com using Chrome browser",
  "keyword": "Scenario",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I use Chrome browser",
  "keyword": "Given ",
  "line": 20
});
formatter.step({
  "name": "I visit \"http://www.useragentstring.com\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "I should see \"User Agent String explained\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "a screenshot should be taken",
  "keyword": "And ",
  "line": 23
});
formatter.match({
  "location": "SeleniumStepdefs.I_use_Chrome_browser()"
});
formatter.result({
  "duration": 909910617,
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
  "duration": 1353520628,
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
  "duration": 116867089,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumStepdefs.a_screenshot_should_be_taken()"
});
formatter.write("");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 287346298,
  "status": "passed"
});
formatter.after({
  "duration": 561537568,
  "status": "passed"
});
formatter.before({
  "duration": 66489,
  "status": "passed"
});
formatter.scenario({
  "id": "demonstrate-the-use-of-various-browsers-in-a-selenium-grid-setup;visit-useragentstring.com-using-safari-browser",
  "tags": [
    {
      "name": "@fast",
      "line": 25
    },
    {
      "name": "@safari",
      "line": 25
    }
  ],
  "description": "",
  "name": "Visit useragentstring.com using Safari browser",
  "keyword": "Scenario",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "I use Safari browser",
  "keyword": "Given ",
  "line": 27
});
formatter.step({
  "name": "I visit \"http://www.useragentstring.com\"",
  "keyword": "When ",
  "line": 28
});
formatter.step({
  "name": "I should see \"User Agent String explained\"",
  "keyword": "Then ",
  "line": 29
});
formatter.step({
  "name": "a screenshot should be taken",
  "keyword": "And ",
  "line": 30
});
formatter.match({
  "location": "SeleniumStepdefs.I_use_Safari_browser()"
});
formatter.result({
  "duration": 2770547095,
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
  "duration": 331298530,
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
  "duration": 139834532,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumStepdefs.a_screenshot_should_be_taken()"
});
formatter.write("");
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 325459242,
  "status": "passed"
});
formatter.after({
  "duration": 77221545,
  "status": "passed"
});
formatter.before({
  "duration": 35200,
  "status": "passed"
});
formatter.scenario({
  "id": "demonstrate-the-use-of-various-browsers-in-a-selenium-grid-setup;visit-useragentstring.com-using-internet-explorer-browser",
  "tags": [
    {
      "name": "@fast",
      "line": 32
    },
    {
      "name": "@internet-explorer",
      "line": 32
    }
  ],
  "description": "",
  "name": "Visit useragentstring.com using Internet Explorer browser",
  "keyword": "Scenario",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "I use Internet Explorer browser",
  "keyword": "Given ",
  "line": 34
});
formatter.step({
  "name": "I visit \"http://www.useragentstring.com\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "I should see \"User Agent String explained\"",
  "keyword": "Then ",
  "line": 36
});
formatter.step({
  "name": "a screenshot should be taken",
  "keyword": "And ",
  "line": 37
});
formatter.match({
  "location": "SeleniumStepdefs.I_use_Internet_Explorer_browser()"
});
formatter.result({
  "duration": 3059328211,
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
  "duration": 2225487316,
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
  "duration": 174161800,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumStepdefs.a_screenshot_should_be_taken()"
});
formatter.write("");
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 361666636,
  "status": "passed"
});
formatter.after({
  "duration": 1112648674,
  "status": "passed"
});
});