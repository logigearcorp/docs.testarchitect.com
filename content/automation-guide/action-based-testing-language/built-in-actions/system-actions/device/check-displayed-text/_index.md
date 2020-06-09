--- 
title: "check displayed text"
linktitle: "check displayed text"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_displayed_text.html
keywords: "check displayed text, verify displayed text, validate displayed text"
---

## Description

Check the text in a control against an expected text string. Result is Passed ifthe two strings match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **expected**

    The expected text content of the control.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: iOS.

## Notes

-   This built-in action applies only to the iOS operating system.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example

![](/images//Images/bia_check_displayed_text_aut.png)

**Action Lines**

![](/images//Images/bia_check_displayed_text_pgm.png)

**Result**

![](/images//Images/bia_check_displayed_text_res.png)

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Previous topic:**[assign device](/TA_Automation/Topics/bia_assign_device.html)

**Next topic:**[check toast message](/TA_Automation/Topics/bia_check_toast_message.html)

