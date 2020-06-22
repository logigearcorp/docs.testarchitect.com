--- 
title: "check pattern"
linktitle: "check pattern"
description: "Description Check whether a string of text conforms to a specified pattern. Result is Passed if the string matches the pattern ; otherwise Failed . Arguments text Text string to be tested. pattern ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_pattern.html
keywords: "built-in actions, check pattern, check pattern (action), check if string matches pattern, check whether string matches pattern, check if text follows pattern, verify if string matches pattern, verify whether text follows pattern"
---

## Description

Check whether a string of text conforms to a specified pattern. Result is Passed ifthe string matches the pattern; otherwise Failed.

## Arguments

-   **text**

    Text string to be tested.

-   **pattern**

    Expected pattern.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The pattern argument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc. As an example: \{\[A-Z0-9.\_%+-\]+@\[A-Z0-9.-\]+\\.\[A-Z\]\{2,4\}\} specifies the pattern for an acceptable email address.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html).

## Example

![](/images/TA_Automation/Images/bia_check_pattern_in_text_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_pattern_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_pattern_res.png)



