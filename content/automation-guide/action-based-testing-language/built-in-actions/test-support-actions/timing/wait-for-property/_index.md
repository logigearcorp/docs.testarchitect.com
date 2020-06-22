--- 
title: "wait for property"
linktitle: "wait for property"
description: "Description Wait a specified amount of time for a given property value of a control or window to contain an expected value before proceeding to the next action line. Arguments window TA name of the ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_wait_for_property.html
keywords: "built-in actions, wait for property, wait for property (action), iOS (action), wait for property, Safari, macOS (action), macOS, Safari (action), wait for property to get expected value, waiting time for property to contain desired value, timeout for property to get expect value"
---

## Description

Wait a specified amount of time for a given property value of a control or window to contain an expected value before proceeding to the next action line.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    \(Optional\) TA name of the control.

-   **property**

    TA property whose value is to be tested.

-   **value**

    Expected value of the specified property. When this value is detected, execution proceeds to the next action line.

-   **timeout**

    \(Optional\) Maximum time to wait \(units: seconds; default = 20\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Whenever possible, it is recommended that you use the built-in [property wait](/TA_Automation/Topics/bis_property_wait.html) setting, along with the appropriate built-in action, in lieu of wait for property. The property wait setting applies to three built-in actions: [check control property](/TA_Automation/Topics/bia_check_control_property.html), [check window property](/TA_Automation/Topics/bia_check_window_property.html), and [check](/TA_Automation/Topics/bia_check.html).
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Example

![](/images/TA_Automation/Images/bia_wait_for_property_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_wait_for_property_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_wait_for_property_res.png)




