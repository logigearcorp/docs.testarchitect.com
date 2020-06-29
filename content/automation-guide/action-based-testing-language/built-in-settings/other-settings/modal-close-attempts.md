--- 
title: "modal close attempts"
linktitle: "modal close attempts"
description: "Description Specifies the maximum number of retries for the invoked action handler specified in a call to the built-in on modal action action. Default value 5 times Notes If the action handler is ..."
weight: 17
aliases: 
    - /TA_Automation/Topics/bis_modal_close_attempts.html
keywords: "built-in settings, modal close attempts, settings, modal close attempts (settings), specify maximum number of retries for invoked action handler, retry number of times to handle modal action, set number of times to handle modal action"
---

## Description

Specifies the maximum number of retries for the invoked action handler specified in a call to the built-in [on modal action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-modal-action) action.

## Default value

5 times

## Notes

-   If the action handler is invoked <modal close attempts\> times, but fails in all cases to remove the unwanted modal dialog box, TA returns an automation error with the following message:

    The action '<name of the action handler\>', specified by the 'on modal action' action line, was unable to dispatch the unexpected modal dialog box after '<numbers of specified retries\>' attempts.


## Example

**Scenario**: You want to handle exceptions that your AUT may or may not throw, so you specify that action modal handler dialog is to be called in the event that an unexpected modal dialog appears during the course of execution. You'll limit to three the maximum number of times that modal handler dialog may be called in sequence without success.

1.  Captures screenshots of the current state when the modal dialog box unexpectedly appears, by using the [capture screen](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/capture-screen) built-in action.
2.  If the modal dialog box indeed appears, TA clicks the **Continue** button to bypass the dialog box. If TA is unable to find the **Continue** button, TA then closes that modal dialog box.

    {{<note>}} If the action handler is unable to be executed at the first time, it attempts to retry 3 times.


**Action Lines**

![](/images/TA_Automation/Images/bis_modal_close_attempts_pgm.r02.png)




