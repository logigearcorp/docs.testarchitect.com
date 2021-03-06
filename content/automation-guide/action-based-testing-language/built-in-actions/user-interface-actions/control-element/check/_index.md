--- 
title: "check"
linktitle: "check"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check.html
keywords: "check text, check text in control against expected string, check if text in control matches expected string, check whether text in control matches expected string"
---

## Description

Check the displayed text in a control against an expected string value; in the base of Boolean-state controls, check the current state against an expected Boolean value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **value**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   value argument:
    -   The valueargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
    -   An empty value argument results in Pass if the control's value is indeed empty; otherwise Fail.
    -   In the case of Boolean-state controls, such as check boxes and radio buttons, the values 1, on, true and yes are all equivalent to the selected state, while 0, off, false and no are equivalent to the cleared state.
-   Note that the TA property of the control checked by this action varies by control class. In all cases, it is the property whose value is on display.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [property wait](property_wait.html), [page wait](page_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:check box, combo box, date picker, datetime, label, progress bar, radio button, rating bar, richtext, slider, status bar, switch, text box, text view, toggle button, trackbar, calendar.

**Note:** When getting very long strings from an SAP BW **richtext** control, you may experience perfomance issues.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, progress bar, radio button, text box, toogle button.

## Example

![](/images//Images/bia_check_aut.png)

**Action Lines**

![](/images//Images/bia_check_pgm.png)

**Result**

![](/images//Images/bia_check_res.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Next topic:**[check control exists](/TA_Automation/Topics/bia_check_control_exists.html)

