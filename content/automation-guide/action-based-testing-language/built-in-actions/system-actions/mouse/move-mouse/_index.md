--- 
title: "move mouse"
linktitle: "move mouse"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_move_mouse.html
---
keyword: [move mouse, move mouse to position, move mouse to position within control]
---

# move mouse

## Description

Move the mouse pointer to a specified location within a control.

## Arguments

-   **window**

    \(Optional\) TA name of the window.

-   **control**

    \(Optional\) TA name of the control.

-   **x**

    \(Optional\) Horizontal position of location to which mouse pointer is to move, specified as distance in pixels from left edge of the display element, which may be a control, window or screen \(see note below\). \(Defaults to horizontal center of the display element.\)

-   **y**

    \(Optional\) Vertical position oflocation to which mouse pointer is to move, specified as distance in pixels from top edge of the display element, which may be a control, window or screen \(see note below\). \(Defaults to vertical center of the display element.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    **Note:** As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    **Restriction:** This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   You cannot interact with the control located outside the working document.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window

## Example

![](/images//Images/bia_move_mouse_aut.png)

## Action Lines

![](/images//Images/bia_move_mouse_pgm.png)

## Result

![](/images//Images/bia_move_mouse_res.png)

**Parent topic:**[Mouse](/TA_Automation/Topics/bia_mouse_events.html)

**Previous topic:**[get system double click time](/TA_Automation/Topics/bia_get_system_double_click_time.html)

