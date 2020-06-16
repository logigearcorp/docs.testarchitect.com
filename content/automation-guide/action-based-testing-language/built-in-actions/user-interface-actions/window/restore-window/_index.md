--- 
title: "restore window"
linktitle: "restore window"
description: "Description Restore the specified window from its minimized or maximized state. Arguments window TA name of the window. Valid contexts This action may be used within the following project items: test ..."
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_restore_window.html
keywords: "built-in actions, restore window, restore window (action), Safari, macOS (action), restore window, macOS, Safari (action)"
---

## Description

Restore the specified window from its minimized or maximized state.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action has no effect if the specified window is already in its restored state.
-   For testing in Safari on macOS machines, this action is only able to restore a window currently in the minimized state. It does not currently support restoring a window that is maximized.
-   This action is not supported in the [WebDriver](/TA_Automation/Topics/Generic_WebDriver.html) mode.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images/TA_Automation/Images/bia_restore_window_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_restore_window_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_restore_window_res.png)

## Example

![](/images/TA_Automation/Images/bia_restore_window_ta4vs_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_restore_window_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_restore_window_ta4vs_res.png)



**Related information**  


[move window](/TA_Automation/Topics/bia_move_window.html)

