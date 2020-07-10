--- 
title: "check toolbar control value"
linktitle: "check toolbar control value"
description: "Description Check the displayed text of a text box or a combo box control on a toolbar against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_control_value.html
keywords: "built-in actions, check toolbar control value, check toolbar control value (action), check toolbar control value, check displayed text of text box on toolbar against expected value, check selected value of combo box on toolbar against expected value, check if text of control matches expected value, verify whether text of control matches expected value"
---

## {{< expand >}} Description

Check the displayed text of a text box or a combo box control on a toolbar against an expected value. Result is Passed ifthe values match; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **control**

    Index number of toolbar-contained control \(see Notes\).

-   **expected**

    Expected value.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   For the control argument, , note that index numbering begins with 1, and proceeds from left to right.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:toolbar.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_toolbar_control_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_toolbar_control_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_toolbar_control_value_res.png)




