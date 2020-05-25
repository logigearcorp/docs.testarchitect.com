--- 
title: "check value"
linktitle: "check value"
aliases: 
    - /TA_Automation/Topics/bia_check_value.html
---
# check value {#bia_check_value .reference}

## Description { .section}

Check the contents of an argument against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments { .section}

value
:   Text string \(or expression resolving to a text string\) to be tested.

expected
:   Expected value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   While the value argument may hold a literal text string, as a practical matter it is generally used to hold a variable or expression.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Example { .section}

**Action Lines**

![](../Images/bia_check_value_pgm.png)

**Result**

![](../Images/bia_check_value_res.png)

## Example { .section}

**Action Lines**

![](../Images/bia_check_value_ta4vs_pgm.png)

**Result**

![](../Images/bia_check_value_ta4vs_res.png)

**Parent topic:**[Value Handling](../../TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[check text not contains](../../TA_Automation/Topics/bia_check_text_not_contains.html)

**Next topic:**[does text contain](../../TA_Automation/Topics/bia_does_text_contain.html)

