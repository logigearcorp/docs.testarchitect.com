--- 
title: "check"
linktitle: "check"
description: "Description Check the displayed text in a control against an expected string value; in the base of Boolean-state controls, check the current state against an expected Boolean value. Result is Passed ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check.html
keywords: "built-in actions, check, check (action), iOS (action), check, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check text, check text in control against expected string, check if text in control matches expected string, check whether text in control matches expected string"
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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [property wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/property-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:check box, combo box, date picker, datetime, label, progress bar, radio button, rating bar, richtext, slider, status bar, switch, text box, text view, toggle button, trackbar, calendar.

{{<note>}} When getting very long strings from an SAP BW **richtext** control, you may experience perfomance issues.



## Example

![](/images/TA_Automation/Images/bia_check_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_res.png)


