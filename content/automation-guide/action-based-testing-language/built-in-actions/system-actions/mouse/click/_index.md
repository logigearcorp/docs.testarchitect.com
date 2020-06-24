--- 
title: "click"
linktitle: "click"
description: "Description Click a GUI element. Arguments window (Optional) TA name of the window. control (Optional) TA name of the control. click type (Optional) Type of mouse click. Allowable values: left ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_click.html
keywords: "built-in actions, click, click (action), iOS (action), click, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), mouse click, left click, single left click"
---

## Description

Click a GUI element.

## Arguments

-   **window**

    \(Optional\) TA name of the window.

-   **control**

    \(Optional\) TA name of the control.

-   **click type**

    \(Optional\) Type of mouse click.

    Allowable values:

    -   **left**

        \(Default\) Single left-click.

    -   **right**

        Single right-click.

    -   **double**

        Double left-click.

-   **x**

    \(Optional\) Horizontal position of effective click, specified as distance in pixels from left edge of the specified display element, which may be a control, window or screen \(see note below\). \(Defaults to horizontal center of display element.\)

-   **y**

    \(Optional\) Vertical position of effective click, specified as distance in pixels from top edge of the specified display element, which may be a control, window or screen \(see note below\). \(Defaults to vertical center of display element.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   click type argument:
    -   The following applies to the use of this action on an iOS device:
        -   A value of right causes a long-press gesture to be simulated.
        -   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/reuse/../TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
        -   For the Safari web browser on iOS, only the value left is supported. The value left indicates a tap with your finger.
    -   For Safari running on macOS, only a value of left \(the default\) is supported.
-   The [click window](/TA_Automation/Topics/bia_click_window.html) built-in action is functionally identical to click with control omitted.
-   For controls that require an extra argument to be identified \(e.g., a button on a toolbar\), use actions which are specific to those kinds of controls \(e.g., [click toolbar button](/TA_Automation/Topics/bia_click_toolbar_button.html)\).
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    {{<note>}} As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    {{<restriction>}} This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   You cannot interact with the control located outside the working document.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example

![](/images/TA_Automation/Images/bia_click_aut1.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_click_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_click_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_click_aut2.png)



