--- 
title: "Error handling and recovery"
linktitle: "Error handling and recovery"
weight: 7
aliases: 
    - /TA_Automation/Topics/The_test_language_error_handling_and_recovery.html
---
# Error handling and recovery {#the_test_language_error_handling_and_recovery .concept}

Handling unanticipated errors, warnings or test failures.

TestArchitect has a number of mechanisms to support error handling to allow for tests to continue to run after encountering unexpected difficulties. Situations resulting in errors may stem from unanticipated problems experienced by the system under test, or from the automation itself.

1.  [Suppressing message dialogs](../../TA_Automation/Topics/error_handling_suppress_messages.html)  
Use the set notice level action to specify the types of problem-related messages that are inhibited from being displayed during the test run.
2.  [Escaping on error](../../TA_Automation/Topics/error_handling_escapes.html)  
You can direct TestArchitect to escape from the current flow of the test when an error occurs.
3.  [Taking action on problems](../../TA_Automation/Topics/error_handling_taking_action.html)  
You can provide TestArchitect with specific instructions as to what to do when a problem occurs.
4.  [Passing arguments to error handlers](../../TA_Automation/Topics/error_handling_passing_args.html)  
Error and failure handlers can be made more flexible by having them accept arguments.

**Parent topic:**[The test language](../../TA_Automation/Topics/The_test_language.html)

**Previous topic:**[Working with checks](../../TA_Automation/Topics/Automation_model_working_with_checks.html)

**Next topic:**[Timing](../../TA_Automation/Topics/Automation_practices_Timing.html)

