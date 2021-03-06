--- 
title: "Taking action on problems"
linktitle: "Taking action on problems"
weight: 3
aliases: 
    - /TA_Automation/Topics/error_handling_taking_action.html
---

You can provide TestArchitect with specific instructions as to what to do when a problem occurs.

In many cases when an error or test failure occurs, it is necessary not just to interrupt the normal flow of processing, but to take some specific action or set of actions. Such actions might include:

-   returning the AUT to some known state, to allow for testing to continue
-   shutting down the AUT altogether
-   logging a report
-   capturing some aspect of the state of the AUT, to allow for analysis of the problem at some later point in time.

Two actions serve this purpose:

-   **[on error action](on_error_action.html)**

    Allows you to specify an action to be executed in the event of an error

-   **[on failure action](on_failure_action.html)**

    Let you specify the action to be executed in the event of a check failure.


The action that you specify may be a built-in action, but in most cases it is likely that you will want to call a dedicated user-defined action to handle the error or failure.

As an example, the following is a simple error handler that, when called, merely writes out a report to the effect that an error occurred, and captures the screen at the time of the error, saving it to a designated jpg file:

![](/images//Images/abtErrorHandling_Simple_error_handler_test02.png)

A test module that uses this handler is shown below:

![](/images//Images/abtErrorHandling_Simple_error_handler_test01.png)

The [on error action](on_error_action.html) action specifies the error handler. \(Note that [on error action](on_error_action.html) need not necessarily be limited to the INITIAL section of the test module, and you are not limited to specifying a single error handler within the test module. Indeed, it is possible to have [on error action](on_error_action.html) calls scattered throughout your action lines, so that the appropriate handler is invoked for each given place in which an error is possible.\)

**Parent topic:**[Error handling and recovery](/TA_Automation/Topics/The_test_language_error_handling_and_recovery.html)

**Previous topic:**[Escaping on error](/TA_Automation/Topics/error_handling_escapes.html)

**Next topic:**[Passing arguments to error handlers](/TA_Automation/Topics/error_handling_passing_args.html)

