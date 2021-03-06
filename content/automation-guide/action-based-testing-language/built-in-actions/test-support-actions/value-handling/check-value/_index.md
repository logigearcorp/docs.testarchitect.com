--- 
title: "check value"
linktitle: "check value"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_value.html
keywords: "check if argument matches specifiecd value, check whether argument matches specified value, verify if argument matches specified value"
---

## Description

Check the contents of an argument against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **value**

    Text string \(or expression resolving to a text string\) to be tested.

-   **expected**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   While the value argument may hold a literal text string, as a practical matter it is generally used to hold a variable or expression.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html).

## Example

**Action Lines**

![](/images//Images/bia_check_value_pgm.png)

**Result**

![](/images//Images/bia_check_value_res.png)

## Example

**Action Lines**

![](/images//Images/bia_check_value_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_value_ta4vs_res.png)

**Parent topic:**[Value Handling](/TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[check text not contains](/TA_Automation/Topics/bia_check_text_not_contains.html)

**Next topic:**[does text contain](/TA_Automation/Topics/bia_does_text_contain.html)

