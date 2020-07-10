--- 
title: "Error handling and recovery"
linktitle: "Error handling and recovery"
description: "Handling unanticipated errors, warnings or test failures."
weight: 7
aliases: 
    - /TA_Automation/Topics/The_test_language_error_handling_and_recovery.html
keywords: "errors, handling, recovery, failures, handling errors and failures"
---

Handling unanticipated errors, warnings or test failures.

TestArchitect has a number of mechanisms to support error handling to allow for tests to continue to run after encountering unexpected difficulties. Situations resulting in errors may stem from unanticipated problems experienced by the system under test, or from the automation itself.

1.  [Suppressing message dialogs](/automation-guide/action-based-testing-language/the-test-language/error-handling-and-recovery/suppressing-message-dialogs)  
Use the set notice level action to specify the types of problem-related messages that are inhibited from being displayed during the test run.
2.  [Escaping on error](/automation-guide/action-based-testing-language/the-test-language/error-handling-and-recovery/escaping-on-error)  
You can direct TestArchitect to escape from the current flow of the test when an error occurs.
3.  [Taking action on problems](/automation-guide/action-based-testing-language/the-test-language/error-handling-and-recovery/taking-action-on-problems)  
You can provide TestArchitect with specific instructions as to what to do when a problem occurs.
4.  [Passing arguments to error handlers](/automation-guide/action-based-testing-language/the-test-language/error-handling-and-recovery/passing-arguments-to-error-handlers)  
Error and failure handlers can be made more flexible by having them accept arguments.




