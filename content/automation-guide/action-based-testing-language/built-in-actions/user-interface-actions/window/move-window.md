--- 
title: "move window"
linktitle: "move window"
description: "Description Move a specified window to a new position. Arguments window TA name of the window. top (Optional) New vertical position of top edge of window, in relation to top of screen (units: pixels; ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_move_window.html
keywords: "built-in actions, move window, move window (action), Safari, macOS (action), move window, macOS, Safari (action), move specified window to new position"
---

## Description

Move a specified window to a new position.

## Arguments

-   **window**

    TA name of the window.

-   **top**

    \(Optional\) New vertical position of top edge of window, in relation to top of screen \(units: pixels; default=0\).

-   **left**

    \(Optional\) New horizontal position of left edge of window, in relation to left side of screen \(units: pixels; default=0\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This is an exception to the general rule for built-in actions that, if a window is supplied as an argument, x,y \(or, in this case, top, left\) coordinate arguments specify positions relative to the window borders. In this case, while a window must be specified, the top and left values specify a position relative to the screen.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images/TA_Automation/Images/bia_move_windows_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_move_windows_pgm.png)

Result

![](/images/TA_Automation/Images/bia_move_windows_res.png)

**Related information**  


[restore window](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/restore-window)
