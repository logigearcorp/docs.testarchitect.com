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

Specify the timeout value, for action to be invoked by [on timeout action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-timeout-action).

## Value units  

seconds

## Default value  

-   **0**

    Indicates an infinite timeout period.


## Notes  

-   Applies to TestArchitect [8.3 Update 4](/user-guide/version-history/features-added-to-testarchitect-8-3-update-4/windows) and higher.
-   When this setting is not declared or its value is omitted, the value of 0 is used.
-   When the duration of test case timeout's action handler, invoked by [on timeout action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-timeout-action), exceeds the timeout period, the remaining lines of the action handler will stop instantly.

## Example  

**Action Lines**

![](/images/TA_Automation/Images/bis_cleanup_timeout_pgm.png)



**Related information**  


[test case timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/test-case-timeout)

[Stopping tests on timeout](/automation-guide/action-based-testing-language/the-test-language/stopping-tests-on-timeout)

[on timeout action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-timeout-action)
