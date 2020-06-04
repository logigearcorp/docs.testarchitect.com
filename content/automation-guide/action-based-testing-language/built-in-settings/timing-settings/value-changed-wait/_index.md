--- 
title: "-"
linktitle: "value changed wait"
weight: 14
aliases: 
    - /TA_Automation/Topics/bis_value_changed_wait.html
---
keyword: [value changed wait, maximum wait time for value in UI element to change, maximum wait time for value in UI element to change in response to actions]
---

# value changed wait

## Description

The maximum wait time to allow a value in a UI element to change, in response to some prior action, before sampling that value with a get or check action.

## Value units

milliseconds

## Default value

500

## Notes

-   Examples of get/check value actions are as follows: [check](bia_check.html), [check control property](bia_check_control_property.html), [check control tooltip](bia_check_control_tooltip.html), [get](bia_get.html), [get column number](bia_get_column_number.html), etc.
-   The effect of value changed wait is to cause a get or check action to continue sampling its target UI element until the sampled value has changed, or a timeout has occurred.
-   value changed wait does not affect program flow. The effect of a timeout is that the sampled value is used by the get or check action, after which control proceeds normally.
-   To speed up automation execution, it is recommended that you:
    1.  set the time-out for value changed wait to 0 initially.
    2.  set appropriate values in specific cases, wherever you find it to be necessary.
    3.  reset the time-out to 0 immediately after the action lines that require the non-zero value.

**Parent topic:**[Timing settings](/TA_Automation/Topics/bis_timing.html)

**Previous topic:**[test case timeout](/TA_Automation/Topics/bis_test_case_timeout.html)

**Next topic:**[window wait](/TA_Automation/Topics/bis_window_wait.html)

**Related information**  


[value changed wait](/TA_Automation/Topics/timing_value_changed_wait.html)

