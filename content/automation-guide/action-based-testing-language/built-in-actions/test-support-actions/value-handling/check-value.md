--- 
title: "check value"
linktitle: "check value"
description: "Description Check the contents of an argument against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments value Text string (or expression resolving to a text ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_value.html
keywords: "built-in actions, check value, check value (action), check if argument matches specifiecd value, check whether argument matches specified value, verify if argument matches specified value"
---

## {{< expand >}} Description

Check the contents of an argument against an expected value. Result is Passed ifthe values match; otherwise Failed.

## {{< expand >}} Arguments

-   **value**

    Text string \(or expression resolving to a text string\) to be tested.

-   **expected**

    Expected value.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   While the value argument may hold a literal text string, as a practical matter it is generally used to hold a variable or expression.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_check_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_value_res.png)

