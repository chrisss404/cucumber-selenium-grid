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
formatter.scenarioOutline({
  "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language",
  "tags": [
    {
      "name": "@slow",
      "line": 10
    }
  ],
  "description": "",
  "name": "Use the language switch to change the websites language",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am on the startpage",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "the websites language is \"English\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I change the language to \"\u003clanguage\u003e\"",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "the title of the newest section should be \"\u003ctitle\u003e\"",
  "keyword": "Then ",
  "line": 15
});
formatter.examples({
  "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 17,
  "rows": [
    {
      "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;;1",
      "cells": [
        "language",
        "title"
      ],
      "line": 18
    },
    {
      "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;;2",
      "cells": [
        "Deutsch",
        "NEUESTE"
      ],
      "line": 19
    },
    {
      "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;;3",
      "cells": [
        "日本語",
        "最新プロジェクト"
      ],
      "line": 20
    },
    {
      "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;;4",
      "cells": [
        "русский",
        "НОВЕЙШИЕ ПРОЕКТЫ"
      ],
      "line": 21
    },
    {
      "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;;5",
      "cells": [
        "Bahasa Melayu‬",
        "PROJEK TERBARU"
      ],
      "line": 22
    }
  ]
});
formatter.before({
  "duration": 231035,
  "status": "passed"
});
formatter.scenario({
  "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;;2",
  "tags": [
    {
      "name": "@pocket-code",
      "line": 1
    },
    {
      "name": "@slow",
      "line": 10
    }
  ],
  "description": "",
  "name": "Use the language switch to change the websites language",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the startpage",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "the websites language is \"English\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I change the language to \"Deutsch\"",
  "keyword": "When ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "the title of the newest section should be \"NEUESTE\"",
  "keyword": "Then ",
  "line": 15,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "SeleniumStepdefs.I_am_on_the_startpage()"
});
formatter.result({
  "duration": 8667328946,
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
  "duration": 765126292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deutsch",
      "offset": 26
    }
  ],
  "location": "SeleniumStepdefs.I_change_the_language_to(String)"
});
formatter.result({
  "duration": 4789684442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NEUESTE",
      "offset": 43
    }
  ],
  "location": "SeleniumStepdefs.the_title_of_the_newest_section_should_be(String)"
});
formatter.result({
  "duration": 32537655,
  "status": "passed"
});
formatter.after({
  "duration": 76611133,
  "status": "passed"
});
formatter.before({
  "duration": 33803,
  "status": "passed"
});
formatter.scenario({
  "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;;3",
  "tags": [
    {
      "name": "@pocket-code",
      "line": 1
    },
    {
      "name": "@slow",
      "line": 10
    }
  ],
  "description": "",
  "name": "Use the language switch to change the websites language",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the startpage",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "the websites language is \"English\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I change the language to \"日本語\"",
  "keyword": "When ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "the title of the newest section should be \"最新プロジェクト\"",
  "keyword": "Then ",
  "line": 15,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "SeleniumStepdefs.I_am_on_the_startpage()"
});
formatter.result({
  "duration": 7008758933,
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
  "duration": 761059576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "日本語",
      "offset": 26
    }
  ],
  "location": "SeleniumStepdefs.I_change_the_language_to(String)"
});
formatter.result({
  "duration": 5071602676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "最新プロジェクト",
      "offset": 43
    }
  ],
  "location": "SeleniumStepdefs.the_title_of_the_newest_section_should_be(String)"
});
formatter.result({
  "duration": 30350225,
  "status": "passed"
});
formatter.after({
  "duration": 68160340,
  "status": "passed"
});
formatter.before({
  "duration": 29613,
  "status": "passed"
});
formatter.scenario({
  "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;;4",
  "tags": [
    {
      "name": "@pocket-code",
      "line": 1
    },
    {
      "name": "@slow",
      "line": 10
    }
  ],
  "description": "",
  "name": "Use the language switch to change the websites language",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the startpage",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "the websites language is \"English\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I change the language to \"русский\"",
  "keyword": "When ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "the title of the newest section should be \"НОВЕЙШИЕ ПРОЕКТЫ\"",
  "keyword": "Then ",
  "line": 15,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "SeleniumStepdefs.I_am_on_the_startpage()"
});
formatter.result({
  "duration": 7854457199,
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
  "duration": 765980314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "русский",
      "offset": 26
    }
  ],
  "location": "SeleniumStepdefs.I_change_the_language_to(String)"
});
formatter.result({
  "duration": 1866362345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "НОВЕЙШИЕ ПРОЕКТЫ",
      "offset": 43
    }
  ],
  "location": "SeleniumStepdefs.the_title_of_the_newest_section_should_be(String)"
});
formatter.result({
  "duration": 33821337,
  "status": "passed"
});
formatter.after({
  "duration": 72653647,
  "status": "passed"
});
formatter.before({
  "duration": 27936,
  "status": "passed"
});
formatter.scenario({
  "id": "provide-key-functionalities-to-catrobats-community-website;use-the-language-switch-to-change-the-websites-language;;5",
  "tags": [
    {
      "name": "@pocket-code",
      "line": 1
    },
    {
      "name": "@slow",
      "line": 10
    }
  ],
  "description": "",
  "name": "Use the language switch to change the websites language",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the startpage",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "the websites language is \"English\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I change the language to \"Bahasa Melayu‬\"",
  "keyword": "When ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "the title of the newest section should be \"PROJEK TERBARU\"",
  "keyword": "Then ",
  "line": 15,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "SeleniumStepdefs.I_am_on_the_startpage()"
});
formatter.result({
  "duration": 9319219899,
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
  "duration": 781197330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bahasa Melayu‬",
      "offset": 26
    }
  ],
  "location": "SeleniumStepdefs.I_change_the_language_to(String)"
});
formatter.result({
  "duration": 1446553402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROJEK TERBARU",
      "offset": 43
    }
  ],
  "location": "SeleniumStepdefs.the_title_of_the_newest_section_should_be(String)"
});
formatter.result({
  "duration": 30663395,
  "status": "passed"
});
formatter.after({
  "duration": 67514168,
  "status": "passed"
});
});