--- 
title: "Escaping on error"
linktitle: "Escaping on error"
description: "You can direct TestArchitect to escape from the current flow of the test when an error occurs."
weight: 2
aliases: 
    - /TA_Automation/Topics/error_handling_escapes.html
keywords: "errors, handling, recovery, escaping test execution, escaping test execution on errors, action, on error, continue, action argument, exit action, exit test case, exit test module"
---

You can direct TestArchitect to escape from the current flow of the test when an error occurs.

In the event of anticipated or unanticipated errors, normal test execution may be interrupted and normal program flow may be redirected. This can be done with the built-in [on error](/TA_Automation/Topics/bia_on_error.html) action. The allowable arguments are continue, exit action, exit test case, and exit test module.

For example, when you specify the exit test case argument, TestArchitect abandons the current test case and continues with the next test case in the same test module. For theexit action argument, TestArchitect abandons the current test action and continues with the next test action.




