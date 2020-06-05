--- 
title: "modal close attempts"
linktitle: "modal close attempts"
weight: 17
aliases: 
    - /TA_Automation/Topics/bis_modal_close_attempts.html
---
keyword: [modal close attempts, specify maximum number of retries for invoked action handler, retry number of times to handle modal action, set number of times to handle modal action]
---

# modal close attempts

## Description

Specifies the maximum number of retries for the invoked action handler specified in a call to the built-in [on modal action](bia_on_modal_action.html) action.

## Default value

5 times

## Notes

-   If the action handler is invoked <modal close attempts\> times, but fails in all cases to remove the unwanted modal dialog box, TA returns an automation error with the following message:

    The action '<name of the action handler\>', specified by the 'on modal action' action line, was unable to dispatch the unexpected modal dialog box after '<numbers of specified retries\>' attempts.


## Example

**Scenario**: You want to handle exceptions that your AUT may or may not throw, so you specify that action modal handler dialog is to be called in the event that an unexpected modal dialog appears during the course of execution. You'll limit to three the maximum number of times that modal handler dialog may be called in sequence without success.

1.  Captures screenshots of the current state when the modal dialog box unexpectedly appears, by using the [capture screen](bia_capture_screen.html) built-in action.
2.  If the modal dialog box indeed appears, TA clicks the **Continue** button to bypass the dialog box. If TA is unable to find the **Continue** button, TA then closes that modal dialog box.

    **Note:** If the action handler is unable to be executed at the first time, it attempts to retry 3 times.


**Action Lines**

![](/images//Images/bis_modal_close_attempts_pgm.r02.png)

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[minimum accuracy](/TA_Automation/Topics/bis_minimum_accuracy.html)

**Next topic:**[notice level](/TA_Automation/Topics/bis_notice_level.html)

