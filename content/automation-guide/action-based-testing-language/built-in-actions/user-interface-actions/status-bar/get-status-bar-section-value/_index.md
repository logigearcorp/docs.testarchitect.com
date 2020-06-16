--- 
title: "get status bar section value"
linktitle: "get status bar section value"
description: "Description Retrieve the caption of a specified section of the status bar. Arguments window TA name of the window. control TA name of the status bar. section Integer index specifying the status bar ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_get_status_bar_section_value.html
keywords: "built-in actions, get status bar section value, get status bar section value (action), get status bar section value, get value of status bar section, retrieve value of status bar section, get value of specified part of status bar"
---

## Description

Retrieve the caption of a specified section of the status bar.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the status bar.

-   **section**

    Integer index specifying the status bar section.

-   **output**

    Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports .NET \(not including WPF\), Win32 tested applications.
-   In the case of the section argument, note that index numbering begins with 1, and proceeds from left to right.
-   If the variable in argumentoutputhas not been declared, the action creates it as a global.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms:

|Desktop applications|-   Java
-   UIA
-   Win32
-   WinForms
-   WPF

|

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:status bar

## Example

![](/images/TA_Automation/Images/bia_get_status_bar_section_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_status_bar_section_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_status_bar_section_value_res.png)



**Related information**  


[check status bar section value](/TA_Automation/Topics/bia_check_status_bar_section_value.html)

