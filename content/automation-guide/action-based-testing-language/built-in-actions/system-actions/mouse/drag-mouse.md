--- 
title: "drag mouse"
linktitle: "drag mouse"
description: "Description Effectively drag the mouse pointer between two points within a window. Arguments window TA name of the window. x1 Horizontal position of starting point of drag operation (units: pixels, ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_drag_mouse.html
keywords: "built-in actions, drag mouse, drag mouse (action), drag, mouse drag, drage mouse"
---

## {{< expand >}} Description

Effectively drag the mouse pointer between two points within a window.

## {{< expand >}} Arguments

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


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action can be used to effect drag-and-drop type events.
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    {{<note>}} As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    {{<restriction>}} This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   Mouse drag across frames is not supported.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:window

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_drag_mouse_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_drag_mouse_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_drag_mouse_res.png)




