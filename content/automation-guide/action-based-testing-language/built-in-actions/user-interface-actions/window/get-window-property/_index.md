--- 
title: "get window property"
linktitle: "get window property"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_get_window_property.html
---
keyword: [get window property, get value of specified property of window, retrieve value of specified property of window]
---

# get window property

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
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images//Images/bia_get_window_property_aut.png)

**Action Lines**

![](/images//Images/bia_get_window_property_pgm.png)

**Result**

![](/images//Images/bia_get_window_property_res.png)

**Parent topic:**[Window](/TA_Automation/Topics/bia_Window.html)

**Previous topic:**[get modal definition](/TA_Automation/Topics/bia_get_modal_definition.html)

**Next topic:**[identify windows](/TA_Automation/Topics/bia_identify_windows.html)

**Related information**  


[check window property](/TA_Automation/Topics/bia_check_window_property.html)

