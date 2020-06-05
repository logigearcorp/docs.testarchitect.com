--- 
title: "check text not contains"
linktitle: "check text not contains"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_text_not_contains.html
---
keyword: [check if text does not contain specfied string, check if string does not contain specified words, check whether string does not contain substring, verify if string does not contain specified text, verify whether string does contain specified words]
---

# check text not contains

## Description

Check the nonexistence of a specified string within another string. Result is Passed ifthe substring is not found; otherwise Failed.

## Arguments

-   **text**

    Text string to be tested.

-   **fragment**

    Target text to search for.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is useful for determining whether a string captured at runtime contains the target string of interest.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Example

**Action Lines**

![](/images//Images/bia_check_text_not_contains_pgm.png)

**Result**

![](/images//Images/bia_check_text_not_contains_res.png)

**Parent topic:**[Value Handling](/TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[check text contains](/TA_Automation/Topics/bia_check_text_contains.html)

**Next topic:**[check value](/TA_Automation/Topics/bia_check_value.html)

