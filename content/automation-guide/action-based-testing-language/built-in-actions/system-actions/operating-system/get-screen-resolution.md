--- 
title: "get screen resolution"
linktitle: "get screen resolution"
description: "Description Retrieve the screen resolution of the test machine. Arguments width Variable to receive the returned screen width in pixels. height Variable to receive the returned screen height in ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_get_screen_resolution.html
keywords: "built-in actions, get screen resolution, get screen resolution (action), iOS (action), get screen resolution, Android (action), retrieve screen resolution, get display resolution, retrieve display resolution"
---

## Description

Retrieve the screen resolution of the test machine.

## Arguments

-   **width**

    Variable to receive the returned screen width in pixels.

-   **height**

    Variable to receive the returned screen height in pixels.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   In iOS, all coordinate values are specified using floating-point values in units referred to as points. Consequently, built-in actions acting on iOS applications similarly use points in place of pixels, to specify object positions and dimensions. Note that one point does not necessarily correspond to one pixel on the screen.

    -   To determine an iOS device's screen resolution in points, divide the width and height values obtained from get screen resolution by the Apple-specified scale factor for the given device. The following table specifies the scale factors for each iOS device supported by TestArchitect:

        |iOS device\(s\)|Display technology|Scale factor|
        |---------------|------------------|------------|
        |iPad Mini, iPad 2| |1.0|
        |iPhone 6, 5S, 5C, 5, 4S; iPad Air, iPad with Retina Display, iPad 3|Retina|2.0|
        |iPhone 6 Plus|Retina HD|3.0|

-   If the variables in argumentswidth or heighthave not been declared, the action creates them as globals.
-   For each of width and height, if the argument is left empty, a variable with the same name as the argument header is created to hold the return value.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

Action Lines

![](/images/TA_Automation/Images/bia_get_screen_resolution_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_screen_resolution_res.png)



