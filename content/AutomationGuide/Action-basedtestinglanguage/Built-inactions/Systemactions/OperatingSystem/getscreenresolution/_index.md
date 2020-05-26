--- 
title: "get screen resolution"
linktitle: "get screen resolution"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_get_screen_resolution.html
---
# get screen resolution {#bia_get_screen_resolution .reference}

## Description { .section}

Retrieve the screen resolution of the test machine.

## Arguments { .section}

width
:   Variable to receive the returned screen width in pixels.

height
:   Variable to receive the returned screen height in pixels.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   In iOS, all coordinate values are specified using floating-point values in units referred to as points. Consequently, built-in actions acting on iOS applications similarly use points in place of pixels, to specify object positions and dimensions. Note that one point does not necessarily correspond to one pixel on the screen.

    -   To determine an iOS device's screen resolution in points, divide the width and height values obtained from get screen resolution by the Apple-specified scale factor for the given device. The following table specifies the scale factors for each iOS device supported by TestArchitect:

        |iOS device\(s\)|Display technology|Scale factor|
        |---------------|------------------|------------|
        |iPad Mini, iPad 2| |1.0|
        |iPhone 6, 5S, 5C, 5, 4S; iPad Air, iPad with Retina Display, iPad 3|Retina|2.0|
        |iPhone 6 Plus|Retina HD|3.0|

-   If the variables in argumentswidth or heighthave not been declared, the action creates them as globals.
-   For each of width and height, if the argument is left empty, a variable with the same name as the argument header is created to hold the return value.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_get_screen_resolution_pgm.png)

**Result**

![](../Images/bia_get_screen_resolution_res.png)

**Parent topic:**[Operating System](../../TA_Automation/Topics/bia_operating_system.html)

**Previous topic:**[get operating system name](../../TA_Automation/Topics/bia_get_operating_system_name.html)

**Next topic:**[get system date](../../TA_Automation/Topics/bia_get_system_date.html)

