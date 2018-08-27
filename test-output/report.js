$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyAccount_Login.feature");
formatter.feature({
  "line": 1,
  "name": "MyAccount-Login",
  "description": "",
  "id": "myaccount-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with Valid Username and Password",
  "description": "",
  "id": "myaccount-login;login-with-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser and StartApplication \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter Login Credentials \"\u003cUsername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "VerifyName Displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Clik on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "myaccount-login;login-with-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ],
      "line": 12,
      "id": "myaccount-login;login-with-valid-username-and-password;;1"
    },
    {
      "cells": [
        "inampudivenki@gmail.com",
        "Virama#123"
      ],
      "line": 13,
      "id": "myaccount-login;login-with-valid-username-and-password;;2"
    },
    {
      "cells": [
        "vcinampudi@gmail.com",
        "Virama#123"
      ],
      "line": 14,
      "id": "myaccount-login;login-with-valid-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login with Valid Username and Password",
  "description": "",
  "id": "myaccount-login;login-with-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser and StartApplication \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter Login Credentials \"inampudivenki@gmail.com\" and \"Virama#123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "VerifyName Displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Clik on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 35
    }
  ],
  "location": "FaceBookLoginStepDefination.open_Browser_and_StartApplication(String)"
});
formatter.result({
  "duration": 8344102538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inampudivenki@gmail.com",
      "offset": 25
    },
    {
      "val": "Virama#123",
      "offset": 55
    }
  ],
  "location": "FaceBookLoginStepDefination.enter_Login_Credentials_and(String,String)"
});
formatter.result({
  "duration": 2545124785,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLoginStepDefination.click_on_Login_Button()"
});
formatter.result({
  "duration": 9059462934,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLoginStepDefination.verifyname_Displayed()"
});
formatter.result({
  "duration": 268159142,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLoginStepDefination.clik_on_Logout()"
});
formatter.result({
  "duration": 4999994869,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 3248905158,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with Valid Username and Password",
  "description": "",
  "id": "myaccount-login;login-with-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser and StartApplication \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter Login Credentials \"vcinampudi@gmail.com\" and \"Virama#123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "VerifyName Displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Clik on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 35
    }
  ],
  "location": "FaceBookLoginStepDefination.open_Browser_and_StartApplication(String)"
});
formatter.result({
  "duration": 7064953920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vcinampudi@gmail.com",
      "offset": 25
    },
    {
      "val": "Virama#123",
      "offset": 52
    }
  ],
  "location": "FaceBookLoginStepDefination.enter_Login_Credentials_and(String,String)"
});
formatter.result({
  "duration": 2509901936,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLoginStepDefination.click_on_Login_Button()"
});
formatter.result({
  "duration": 7770476725,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLoginStepDefination.verifyname_Displayed()"
});
formatter.result({
  "duration": 306006691,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLoginStepDefination.clik_on_Logout()"
});
formatter.result({
  "duration": 3674522213,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 4444271017,
  "status": "passed"
});
});