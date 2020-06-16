--- 
title: "get status bar section state"
linktitle: "get status bar section state"
description: "Description Retrieve the state of a status bar section. Arguments window TA name of the window. control TA name of the status bar. section Integer index specifying the status bar section. variable ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_get_status_bar_section_state.html
keywords: "built-in actions, get status bar section state, get status bar section state (action), get status bar section state, get state of status bar section, retrieve state of status bar section, get state of status bar part"
---

## Description

Retrieve the state of a status bar section.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the status bar.

-   **section**

    Integer index specifying the status bar section.

-   **variable**

    Variable to receive the returned value.

    Possible returned values:

    -   enabled
    -   disabled
    -   marquee
    -   resizable

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports .NET \(not including WPF\) tested applications.
-   In the case of the section argument, note that index numbering begins with 1, and proceeds from left to right.
-   A status bar section may have more than a single state. Multiple states are returned to the variable as a single, comma-delimited string.
-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:status bar

## Example

![](/images/TA_Automation/Images/bia_get_status_bar_section_state_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_status_bar_section_state_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_status_bar_section_state_res.png)




**Related information**  


[check status bar section state](/TA_Automation/Topics/bia_check_status_bar_section_state.html)

