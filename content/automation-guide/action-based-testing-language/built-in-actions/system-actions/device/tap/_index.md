--- 
title: "tap"
linktitle: "tap"
description: "Description Administer a tap within the test device's control, window or screen. Arguments window (Optional) TA name of the window. control (Optional) TA name of the control. x (Optional) Horizontal ..."
weight: 25
aliases: 
    - /TA_Automation/Topics/bia_tap.html
keywords: "built-in actions, tap, tap (action), iOS (action), Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), touch, single tap, Single tap device"
---

## Description

Administer a tap within the test device's control, window or screen.

## Arguments

-   **window**

    \(Optional\) TA name of the window.

-   **control**

    \(Optional\) TA name of the control.

-   **x**

    \(Optional\) Horizontal position of effective tap, specified as distance in pixels from left edge of the specified display element, which may be a control, window or screen \(see note below\). \(Defaults to horizontal center of display element.\)

-   **y**

    \(Optional\) Vertical position of effective tap, specified as distance in pixels from top edge of the specified display element, which may be a control, window or screen \(see note below\). \(Defaults to vertical center of display element.\)

-   **hold duration**

    \(Optional\) Duration of the tap operation \(units: milliseconds; valid range: 500 to 60,000; default=0 \[i.e., instantaneous\]\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes

-   The hold duration argument is currently not supported on Safari iOS.
-   As a general rule for all actions involving x, y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:
    -   control, if a control is specified as an argument;
    -   window, if a window is specified as an argument, but no control is;
    -   screen, if neither a window nor control is specified.
-   If all window, control, x and y arguments' values are empty, TestArchitect taps in the middle of the device's screen.
-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/reuse/../TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example

Let's say you are testing a mobile application, and you want verify the application's response to the selection of a check box, which is achieved by means of a tap.

![](/images/TA_Automation/Images/bia_check_toast_message_aut.r02.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_toast_message_pgm.r02.png)




