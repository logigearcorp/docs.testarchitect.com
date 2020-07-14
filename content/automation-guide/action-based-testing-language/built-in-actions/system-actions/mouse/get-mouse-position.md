--- 
title: "get mouse position"
linktitle: "get mouse position"
description: "Description Retrieve the coordinates of the current mouse pointer position. Arguments window (Optional) TA name of the window. control (Optional) TA name of the control. x (Optional) Variable to ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_get_mouse_position.html
keywords: "built-in actions, get mouse position, get mouse position (action), get mouse position, get mouse coordinates"
---

## Description

Retrieve the coordinates of the current mouse pointer position.

## Arguments

-   **window**

    \(Optional\) TA name of the window.

-   **control**

    \(Optional\) TA name of the control.

-   **x**

    \(Optional\) Variable to receive the current horizontal position of mouse pointer, specified as distance in pixels from left edge of the display element, which may be a control, window or screen \(see note below\). \(Defaults to horizontal center of the display element.\)

-   **y**

    \(Optional\) Variable to receive the current vertical position of mouse pointer, specified as distance in pixels from top edge of the display element, which may be a control, window or screen \(see note below\). \(Defaults to horizontal center of the display element.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    {{<note>}} As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    {{<restriction>}} This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:all.

## Example

![](/images/TA_Automation/Images/bia_get_mouse_position_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_mouse_position_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_mouse_position_res.png)



