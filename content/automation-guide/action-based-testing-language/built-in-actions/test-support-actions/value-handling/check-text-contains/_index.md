--- 
title: "check text contains"
linktitle: "check text contains"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_text_contains.html
---
keyword: [check if text contains specific string, check if string contains substring, check whether string contains specific words, verify if text contains specific characters, verify whether string contains substring]
---

# check text contains

## Description

Check for the existence of a specified string of text within another string. Result is Passed ifthe substring is found; otherwise Failed.

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

![](/images//Images/bia_check_text_contains_pgm.png)

**Result**

![](/images//Images/bia_check_text_contains_res.png)

**Parent topic:**[Value Handling](/TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[check pattern](/TA_Automation/Topics/bia_check_pattern.html)

**Next topic:**[check text not contains](/TA_Automation/Topics/bia_check_text_not_contains.html)

