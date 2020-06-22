--- 
title: "cleanup timeout"
linktitle: "cleanup timeout"
description: "Description Specify the timeout value, for action to be invoked by on timeout action . Value units seconds Default value 0 Indicates an infinite timeout period. Notes Applies to TestArchitect 8.3 ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bis_cleanup_timeout.html
keywords: "built-in settings, cleanup timeout, settings, cleanup timeout (settings), cleanup timeout, set timeout, timeout"
---

## Description

Specify the timeout value, for action to be invoked by [on timeout action](/TA_Automation/Topics/bia_on_timeout_action.html).

## Value units

seconds

## Default value

-   **0**

    Indicates an infinite timeout period.


## Notes

-   Applies to TestArchitect [8.3 Update 4](/TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3_update_4.html) and higher.
-   When this setting is not declared or its value is omitted, the value of 0 is used.
-   When the duration of test case timeout's action handler, invoked by [on timeout action](/TA_Automation/Topics/bia_on_timeout_action.html), exceeds the timeout period, the remaining lines of the action handler will stop instantly.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bis_cleanup_timeout_pgm.png)



**Related information**  


[test case timeout](/TA_Automation/Topics/bis_test_case_timeout.html)

[Stopping tests on timeout](/TA_Automation/Topics/aut_stop_tests_after_timeout.html)

[on timeout action](/TA_Automation/Topics/bia_on_timeout_action.html)

