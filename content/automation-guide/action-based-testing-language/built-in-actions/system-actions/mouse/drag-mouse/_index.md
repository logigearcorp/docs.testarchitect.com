--- 
title: "-"
linktitle: "drag mouse"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_drag_mouse.html
---
keyword: [drag, mouse drag, drage mouse]
---

# drag mouse

## Description

Effectively drag the mouse pointer between two points within a window.

## Arguments

-   **window**

    TA name of the window.

-   **x1**

    Horizontal position of starting point of drag operation \(units: pixels, relative to left edge of window\).

-   **y1**

    Vertical position of starting point of drag operation \(units: pixels, relative to top edge of window\).

-   **x2**

    Horizontal position of ending point of drag operation \(units: pixels, relative to left edge of window\).

-   **y2**

    Vertical position of ending point of drag operation \(units: pixels, relative to top edge of window\).

-   **delay**

    The delay between each incremental mouse movement \(units: milliseconds; default = 10\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action can be used to effect drag-and-drop type events.
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    **Note:** As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    **Restriction:** This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   Mouse drag across frames is not supported.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window

## Example

![](/images//Images/bia_drag_mouse_aut.png)

**Action Lines**

![](/images//Images/bia_drag_mouse_pgm.png)

**Result**

![](/images//Images/bia_drag_mouse_res.png)

**Parent topic:**[Mouse](/TA_Automation/Topics/bia_mouse_events.html)

**Previous topic:**[click window](/TA_Automation/Topics/bia_click_window.html)

**Next topic:**[get mouse position](/TA_Automation/Topics/bia_get_mouse_position.html)

