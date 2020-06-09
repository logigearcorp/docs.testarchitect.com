--- 
title: "if window not exists"
linktitle: "if window not exists"
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_if_window_not_exists.html
keywords: "if window does not exist, check if window does not exist, check nonexistence of window, verify nonexistance of window"
---

## Description

Begin a block of action lines which are executed only if a specified window is found not to exist.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the specified window is not found, the succeeding block of action lines up until the first occurrence of an [else](else.html), [else if](else_if.html), or [end if](end_if.html), is executed. Otherwise, that block is skipped.
-   The if window not exists action, in effect, combines the [does window exist](does_window_exist.html) and [if](if.html) built-in actions, with the if condition properly constructed.
-   Typically, this built-in action is used to take an extra action if a window or browser is not yet open.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [window wait probe](window_wait_probe.html).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

**Action Lines**

![](/images//Images/bia_if_window_not_exists_pgm.png)

**Result**

![](/images//Images/bia_if_window_not_exists_res.png)

## Example

**Action Lines**

![](/images//Images/bia_if_window_not_exists_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_if_window_not_exists_ta4vs_res.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[if window exists](/TA_Automation/Topics/bia_if_window_exists.html)

**Next topic:**[repeat](/TA_Automation/Topics/bia_repeat.html)

**Related information**  


[if window exists](/TA_Automation/Topics/bia_if_window_exists.html)

