--- 
title: "resize window"
linktitle: "resize window"
description: "Description Change the size of a window. Arguments window TA name of the window. width (Optional) New window width (units: pixels; default=0). height (Optional) New window height (units: pixels; ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_resize_window.html
keywords: "built-in actions, resize window, resize window (action), Safari, macOS (action), resize window, macOS, Safari (action), change size of window"
---

## Description

Change the size of a window.

## Arguments

-   **window**

    TA name of the window.

-   **width**

    \(Optional\) New window width \(units: pixels; default=0\).

-   **height**

    \(Optional\) New window height \(units: pixels; default=0\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Resizing of the window is performed with the top-left corner remaining stationary.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images/TA_Automation/Images/bia_resize_window_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_resize_window_pgm.png)

Result

![](/images/TA_Automation/Images/bia_resize_window_res.png)

**Related information**  


[maximize](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/maximize)

[minimize](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/minimize)
