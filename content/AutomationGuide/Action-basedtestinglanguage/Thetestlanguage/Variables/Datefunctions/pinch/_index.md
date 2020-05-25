--- 
title: "pinch"
linktitle: "pinch"
aliases: 
    - /TA_Automation/Topics/bia_iOS_pinch.html
---
# pinch {#bia_iOS_pinch .reference}

## Description { .section}

Simulate the placing of two fingers on the device surface, followed by the fingers approaching each other \(pinch in\) or diverging \(pinch out\).

## Arguments { .section}

type
:   Type of pinch.

:   Allowable values:

    close
    :   Perform a pinch-in gesture.

    open
    :   Perform a pinch-out gesture.

window
:   TA name of the window.

x1
:   Horizontal position of starting point of finger 1 \(both gesture types\) and finger 2 \(pinch-out gesture\) \(units: pixels[1](#fn.iOS_screen_units), relative to left edge of window\).

y1
:   Vertical position of starting point of finger 1 \(both gesture types\) and finger 2 \(pinch-out gesture\) \(units: pixels[1](#fn.iOS_screen_units), relative to left edge of window\).

x2
:   Horizontal position of finger 2's starting point for a pinch-in and ending point for a pinch-out \(units: pixels[1](#fn.iOS_screen_units), relative to left edge of window\).

y2
:   Vertical position of finger 2's starting point for a pinch-in and ending point for a pinch-out \(units: pixels[1](#fn.iOS_screen_units), relative to top edge of window\).

duration
:   \(Optional\) Length of time allocated to the gesture \(units: milliseconds\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {#section_hqw_kcl_zcb .section}

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes { .section}

-   **Pinch-in gesture**: Finger 1 starts at \(x1, y1\), finger 2 at \(x2, y2\). Both fingers are drawn toward each other at equal speed \(as determined by duration\), and converge at the midpoint.
-   **Pinch-out gesture**: Fingers 1 and 2 both start at point \(x1, y1\). With finger 1 remaining stationary, finger 2 slides over to finish at point \(x2, y2\), at a speed determined by duration.
-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](../../reuse/../TA_Automation/Topics/bia_get_screen_resolution.md#li.ios.get_screen_resolution).\)
-   For Android versions 4.0 and later, it is essential that you turn off the Pointer Location setting to prevent your device from restarting. Pointer Location is available at: **Settings** \> **Developer options** \> **Pointer location**.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example { .section}

In the application, pinch the tomato and papaya towards each other.

![](../Images/bia_pinch_close.jpg)

**Action Lines**

![](../Images/bia_pinch_open_pgm.r02.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[multi touch tap](../../TA_Automation/Topics/bia_multi_touch_tap.html)

**Next topic:**[press device buttons](../../TA_Automation/Topics/bia_press_device_buttons.html)

1 In the case of iOS device testing, screen units are points. \(See Notes.\)

