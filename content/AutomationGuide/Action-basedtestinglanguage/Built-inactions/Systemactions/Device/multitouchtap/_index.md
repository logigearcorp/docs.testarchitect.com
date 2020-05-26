--- 
title: "multi touch tap"
linktitle: "multi touch tap"
weight: 19
aliases: 
    - /TA_Automation/Topics/bia_multi_touch_tap.html
---
# multi touch tap {#bia_multi_touch_tap .reference}

## Description { .section}

Mimic concurrent taps in multiple locations within a window or control.

## Arguments { .section}

window
:   TA name of the window.

control
:   \(Optional\) TA name of the control, if any.

hold duration
:   \(Optional\) Duration of touch applied to each of the touch arguments \(units: milliseconds; valid range: 500 to 60,000; defaults to an instantaneous tap\).

touch1, touch2, ... , touchN
:   Touch locations \(format for each: `x, y`; units: points\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {#section_eqr_2cl_zcb .section}

Use of this action is supported on the following systems/platforms: iOS.

## Notes {#section_tll_j2y_mk .section}

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](../../reuse/../TA_Automation/Topics/bia_get_screen_resolution.md#li.ios.get_screen_resolution).\)
-   If a value is provided for the control argument, coordinates of the touch arguments relate to the top left corner of the control. If control is blank, the touch arguments relate to the window. For example: to simulate two touches at locations \(20,35\) and \(45, 80\) relative to the window, omit the control argument and set touch1 to 20, 35 and touch2 to 45, 80.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example { .section}

After creating picture checks for all the fruits in this window, tab the apple and orange simultaneously.

![](../Images/bia_multi_touch_tap_aut.r02.png)

**Action Lines**

The following action lines presume that picture checks have already been created for the various fruit icons.

![](../Images/bia_multi_touch_tap_pgm.r02.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[multi touch slide](../../TA_Automation/Topics/bia_multi_touch_slide.html)

**Next topic:**[pinch](../../TA_Automation/Topics/bia_iOS_pinch.html)

