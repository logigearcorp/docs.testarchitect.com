--- 
title: "multi touch slide"
linktitle: "multi touch slide"
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_multi_touch_slide.html
---
# multi touch slide {#bia_multi_touch_slide .reference}

## Description { .section}

Mimic the gesture of placing the fingers on specified locations, then swiping with all fingers traveling in a parallel direction.

## Arguments { .section}

window
:   TA name of the window.

destination point
:   Location of the destination for the “primary finger” starting at the touch1 point \(format: `x, y`; units: points, relative to top-left corner of window\).

slide duration
:   \(Optional\) Duration of slide \(units: milliseconds\).

touch1, touch2, ... , touchN
:   Initial touch locations \(format for each: `x, y`; units: points, relative to top-left corner of window\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {#section_zfb_2cl_zcb .section}

Use of this action is supported on the following systems/platforms: iOS.

## Notes {#section_tll_j2y_mk .section}

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](../../reuse/../TA_Automation/Topics/bia_get_screen_resolution.md#li.ios.get_screen_resolution).\)
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   The format for specifying positional values for the destination point and touchN arguments is `x, y`. For example: to simulate initial touch locations at \(20,35\) and \(45, 80\), set touch1 to 20, 35 and touch2 to 45, 80.
-   Note that the touch1 and destination point arguments specify the endpoints of the trajectory of the primary finger. Other fingers \(if specified by the optional touch2, touch3, etc., arguments\) move in a parallel and equidistant trajectory with the primary.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Example { .section}

Have your test move the cherry, apple and papaya icons in this application 320 pixels to the right.

![](../Images/bia_multi_touch_slide_aut.r02.png)

**Action Lines**

The following action lines presume that picture checks have already been created for the various fruit icons.

![](../Images/bia_multi_touch_slide_pgm.r02.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[kill process](../../TA_Automation/Topics/bia_kill_process.html)

**Next topic:**[multi touch tap](../../TA_Automation/Topics/bia_multi_touch_tap.html)

