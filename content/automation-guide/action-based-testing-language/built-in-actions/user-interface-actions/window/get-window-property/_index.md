--- 
title: "get window property"
linktitle: "get window property"
description: "Description Retrieve the value of a specified property of a window. Arguments window TA name of the window. property Property to retrieve the value of. variable Variable to receive the returned value ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_get_window_property.html
keywords: "built-in actions, get window property, get window property (action), iOS (action), get window property, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get value of specified property of window, retrieve value of specified property of window"
---

## Description

Retrieve the value of a specified property of a window.

## Arguments

-   **window**

    TA name of the window.

-   **property**

    Property to retrieve the value of.

-   **variable**

    Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images/TA_Automation/Images/bia_get_window_property_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_window_property_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_window_property_res.png)




**Related information**  


[check window property](/TA_Automation/Topics/bia_check_window_property.html)

