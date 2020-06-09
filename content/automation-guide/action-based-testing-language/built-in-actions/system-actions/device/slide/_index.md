--- 
title: "slide"
linktitle: "slide"
weight: 24
aliases: 
    - /TA_Automation/Topics/bia_slide.html
---
keyword: [slide, swipe, swipe left, swipe right]
---

# slide

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

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/images//Images/TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

![](/images//Images/bia_slide_aut.png)

**Action Lines**

![](/images//Images/bia_slide_pgm.png)

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Previous topic:**[set screen orientation](/TA_Automation/Topics/bia_set_screen_orientation.html)

**Next topic:**[tap](/TA_Automation/Topics/bia_tap.html)

1 In the case of iOS device testing, screen units are points. \(See Notes.\)

