--- 
title: "drag"
linktitle: "drag"
description: "Description Simulate a long press operation, and then perform a drag-and-drop to a specified destination on the screen. Arguments x1 Horizontal position of starting point, in pixels 1 , from left edge ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_drag.html
keywords: "built-in actions, drag, drag (action), iOS (action), drag, Android (action), long press operation, drag operation, long press gesture, long press event, drag event, drag objects, touch gesture, drag-and-drop event listeners"
---

## Description

Simulate a long press operation, and then perform a drag-and-drop to a specified destination on the screen.

## Arguments

-   **x1**

    Horizontal position of starting point, in pixels[1](#fn.iOS_screen_units), from left edge of the display.

-   **y1**

    Vertical position of starting point, in pixels[1](#fn.iOS_screen_units), from top edge of the display.

-   **x2**

    Horizontal position of end point, in pixels[1](#fn.iOS_screen_units), from left edge of the display.

-   **y2**

    Vertical position of end point, in pixels[1](#fn.iOS_screen_units), from top edge of the display.

-   **press duration**

    \(Optional\) The duration of the long press operation \(units: milliseconds; default = 550 \).

-   **drag duration**

    \(Optional\) Duration of the drag operation \(units: milliseconds; valid range: 500 to 60000; default = 500 \).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/reuse/../TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

Drag the Android robot into the bucket.

![](/images/TA_Automation/Images/bia_drag_aut.r02.jpg)

**Action Lines**

The following action lines presume that picture checks have already been created for both the Android robot and bucket icons.

![](/images/TA_Automation/Images/bia_drag_pgm.r02.png)




<div id="fn.iOS_screen_units"></div>
1 In the case of iOS device testing, screen units are points. \(See Notes.\)

