--- 
title: "value changed wait"
linktitle: "value changed wait"
description: "Description The maximum wait time to allow a value in a UI element to change, in response to some prior action, before sampling that value with a get or check action. Value units milliseconds Default ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/bis_value_changed_wait.html
keywords: "built-in settings, value changed wait, settings, value changed wait (settings), value changed wait, maximum wait time for value in UI element to change, maximum wait time for value in UI element to change in response to actions"
---

## {{< expand >}} Description

The maximum wait time to allow a value in a UI element to change, in response to some prior action, before sampling that value with a get or check action.

## {{< expand >}} Value units

milliseconds

## {{< expand >}} Default value

500

## {{< expand >}} Notes

-   Examples of get/check value actions are as follows: [check](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check), [check control property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-property), [check control tooltip](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-tooltip), [get](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get), [get column number](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-column-number), etc.
-   The effect of value changed wait is to cause a get or check action to continue sampling its target UI element until the sampled value has changed, or a timeout has occurred.
-   value changed wait does not affect program flow. The effect of a timeout is that the sampled value is used by the get or check action, after which control proceeds normally.
-   To speed up automation execution, it is recommended that you:
    1.  set the time-out for value changed wait to 0 initially.
    2.  set appropriate values in specific cases, wherever you find it to be necessary.
    3.  reset the time-out to 0 immediately after the action lines that require the non-zero value.




**Related information**  


[value changed wait](/automation-guide/action-based-testing-language/the-test-language/timing/timing-settings-by-type/non-critical-wait-settings/value-changed-wait)

