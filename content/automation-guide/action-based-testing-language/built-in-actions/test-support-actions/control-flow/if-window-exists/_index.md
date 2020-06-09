--- 
title: "if window exists"
linktitle: "if window exists"
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_if_window_exists.html
keywords: "if window exists, check if window exists, check whether window exists, check existence of window, verify existence of window"
---

## Description

Begin a block of action lines which are executed only if a specified window is found to exist.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the specified window is found, the succeeding block of action lines up until the first occurrence of an [else](else.html), [else if](else_if.html), or [end if](end_if.html), is executed. Otherwise, that block is skipped.
-   The if window exists action, in effect, combines the [does window exist](does_window_exist.html) and [if](if.html) built-in actions.
-   This built-in action can typically be used in recovery actions to detect unwanted open windows.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [window wait probe](window_wait_probe.html).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

**Action Lines**

![](/images//Images/bia_if_window_exists_pgm.png)

**Result**

![](/images//Images/bia_if_window_exists_res.png)

## Example

**Action Lines**

![](/images//Images/bia_if_window_exists_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_if_window_exists_ta4vs_res.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[if control not exists](/TA_Automation/Topics/bia_if_control_not_exists.html)

**Next topic:**[if window not exists](/TA_Automation/Topics/bia_if_window_not_exists.html)

**Related information**  


[if window not exists](/TA_Automation/Topics/bia_if_window_not_exists.html)

