--- 
title: "Escaping on error"
linktitle: "Escaping on error"
aliases: 
    - /TA_Automation/Topics/error_handling_escapes.html
---
# Escaping on error {#error_handling_escapes .concept}

You can direct TestArchitect to escape from the current flow of the test when an error occurs.

In the event of anticipated or unanticipated errors, normal test execution may be interrupted and normal program flow may be redirected. This can be done with the built-in [on error](bia_on_error.html) action. The allowable arguments are continue, exit action, exit test case, and exit test module.

For example, when you specify the exit test case argument, TestArchitect abandons the current test case and continues with the next test case in the same test module. For theexit action argument, TestArchitect abandons the current test action and continues with the next test action.

**Parent topic:**[Error handling and recovery](../../TA_Automation/Topics/The_test_language_error_handling_and_recovery.html)

**Previous topic:**[Suppressing message dialogs](../../TA_Automation/Topics/error_handling_suppress_messages.html)

**Next topic:**[Taking action on problems](../../TA_Automation/Topics/error_handling_taking_action.html)

