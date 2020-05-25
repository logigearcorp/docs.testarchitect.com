--- 
title: "check displayed text"
linktitle: "check displayed text"
aliases: 
    - /TA_Automation/Topics/bia_check_displayed_text.html
---
# check displayed text {#bia_check_displayed_text .reference}

## Description { .section}

Check the text in a control against an expected text string. Result is Passed ifthe two strings match; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

expected
:   The expected text content of the control.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms { .section}

Use of this action is supported on the following systems/platforms: iOS.

## Notes {#section_tll_j2y_mk .section}

-   This built-in action applies only to the iOS operating system.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example { .section}

![](../Images/bia_check_displayed_text_aut.png)

**Action Lines**

![](../Images/bia_check_displayed_text_pgm.png)

**Result**

![](../Images/bia_check_displayed_text_res.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[assign device](../../TA_Automation/Topics/bia_assign_device.html)

**Next topic:**[check toast message](../../TA_Automation/Topics/bia_check_toast_message.html)

