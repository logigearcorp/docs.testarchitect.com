--- 
title: "click window"
linktitle: "click window"
description: "Description Click within a window. Arguments window TA name of the window. x (Optional) Horizontal position of effective click , specified as distance in pixels from left edge of window . (Defaults to ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_click_window.html
keywords: "built-in actions, click window, click window (action), iOS (action), click window, click within window, click inside window"
---

## Description

Click within a window.

## Arguments

-   **window**

    TA name of the window.

-   **x**

    \(Optional\) Horizontal position of effective click, specified as distance in pixels from left edge of window. \(Defaults to horizontal center of window.\)

-   **y**

    \(Optional\) Vertical position of effective click, specified as distance in pixels from top edge of window. \(Defaults to vertical center of window.\)

-   **click type**

    \(Optional\) Type of mouse click.

    Allowable values:

    -   **left**

        \(Default\) Single left-click.

    -   **right**

        Single right-click.

    -   **double**

        Double left-click.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/get-screen-resolution#li.ios.get_screen_resolution).\)
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    {{<note>}} As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    {{<restriction>}} This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   You cannot interact with the control located outside the working document.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:window

## Example

![](/images/TA_Automation/Images/bia_click_window_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_click_window_pgm.png)

Result

![](/images/TA_Automation/Images/bia_click_window_res.png)



