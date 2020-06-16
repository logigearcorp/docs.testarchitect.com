--- 
title: "slide"
linktitle: "slide"
description: "Description Mimic the action of a finger sliding across the screen. Arguments x1 Horizontal position of starting point (units: pixels 1 , relative to left edge of display). y1 Vertical position of ..."
weight: 24
aliases: 
    - /TA_Automation/Topics/bia_slide.html
keywords: "built-in actions, slide, slide (action), iOS (action), Android (action), swipe, swipe left, swipe right"
---

## Description

Mimic the action of a finger sliding across the screen.

## Arguments

-   **x1**

    Horizontal position of starting point \(units: pixels[1](#fn.iOS_screen_units), relative to left edge of display\).

-   **y1**

    Vertical position of starting point \(units: pixels[1](#fn.iOS_screen_units), relative to top edge of display\).

-   **x2**

    Horizontal position of end point \(units: pixels[1](#fn.iOS_screen_units), relative to left edge of display\).

-   **y2**

    Vertical position of end point \(units: pixels[1](#fn.iOS_screen_units), relative to top edge of display\).

-   **slide duration**

    \(Optional\) Duration of the finger slide \( units: milliseconds; valid range: 500 to 60000; default = 500 \).


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

![](/images/TA_Automation/Images/bia_slide_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_slide_pgm.png)




1 In the case of iOS device testing, screen units are points. \(See Notes.\)

