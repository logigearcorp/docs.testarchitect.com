--- 
title: "-"
linktitle: "multi touch slide"
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_multi_touch_slide.html
---
keyword: [multi touch slide, Swipe between pages, Open Notification Center, Three finger drag, Swipe between full-screen apps]
---

# multi touch slide

## Description

Mimic the gesture of placing the fingers on specified locations, then swiping with all fingers traveling in a parallel direction.

## Arguments

-   **window**

    TA name of the window.

-   **destination point**

    Location of the destination for the “primary finger” starting at the touch1 point \(format: `x, y`; units: points, relative to top-left corner of window\).

-   **slide duration**

    \(Optional\) Duration of slide \(units: milliseconds\).

-   **touch1, touch2, ... , touchN**

    Initial touch locations \(format for each: `x, y`; units: points, relative to top-left corner of window\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: iOS.

## Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/images//Images/TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   The format for specifying positional values for the destination point and touchN arguments is `x, y`. For example: to simulate initial touch locations at \(20,35\) and \(45, 80\), set touch1 to 20, 35 and touch2 to 45, 80.
-   Note that the touch1 and destination point arguments specify the endpoints of the trajectory of the primary finger. Other fingers \(if specified by the optional touch2, touch3, etc., arguments\) move in a parallel and equidistant trajectory with the primary.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Example

Have your test move the cherry, apple and papaya icons in this application 320 pixels to the right.

![](/images//Images/bia_multi_touch_slide_aut.r02.png)

**Action Lines**

The following action lines presume that picture checks have already been created for the various fruit icons.

![](/images//Images/bia_multi_touch_slide_pgm.r02.png)

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Previous topic:**[kill process](/TA_Automation/Topics/bia_kill_process.html)

**Next topic:**[multi touch tap](/TA_Automation/Topics/bia_multi_touch_tap.html)

