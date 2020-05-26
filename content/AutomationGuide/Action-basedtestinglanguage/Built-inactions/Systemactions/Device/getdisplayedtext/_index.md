--- 
title: "get displayed text"
linktitle: "get displayed text"
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_get_displayed_text.html
---
# get displayed text {#bia_get_displayed_text .reference}

## Description { .section}

Retrieve the all text displayed in a control.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

variable
:   \(Optional\) Variable to receive the returned text.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {#section_qhy_ybl_zcb .section}

Use of this action is supported on the following systems/platforms: iOS.

## Notes {#section_tll_j2y_mk .section}

-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example { .section}

Use get displayed text to retrieve the default text found in the **username** control of a login window, then check that it matches the string “John”.

![](../Images/bia_get_displayed_text_aut.png)

**Action Lines**

![](../Images/bia_get_displayed_text_pgm.png)

**Result**

![](../Images/bia_get_displayed_text_res.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[get device screen size](../../TA_Automation/Topics/bia_get_device_screen_size.html)

**Next topic:**[get screen orientation](../../TA_Automation/Topics/bia_get_screen_orientation.html)

