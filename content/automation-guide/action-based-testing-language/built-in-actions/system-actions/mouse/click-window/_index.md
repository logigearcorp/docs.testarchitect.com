--- 
title: "-"
linktitle: "click window"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_click_window.html
---
keyword: [click window, click within window, click inside window]
---

# click window

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

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/images//Images/TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    **Note:** As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    **Restriction:** This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   You cannot interact with the control located outside the working document.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window

## Example

![](/images//Images/bia_click_window_aut.png)

**Action Lines**

![](/images//Images/bia_click_window_pgm.png)

**Result**

![](/images//Images/bia_click_window_res.png)

**Parent topic:**[Mouse](/TA_Automation/Topics/bia_mouse_events.html)

**Previous topic:**[click](/TA_Automation/Topics/bia_click.html)

**Next topic:**[drag mouse](/TA_Automation/Topics/bia_drag_mouse.html)

