--- 
title: "does text contain"
linktitle: "does text contain"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_does_text_contain.html
---
keyword: [check if text is substring of another text, verify whether text is substring of another text, check if string is substring of another string]
---

# does text contain

## Description

Return a Boolean value to indicate whether a specified string of text is a substring of another text string.

## Arguments

-   **text**

    Text string to be tested.

-   **fragment**

    Target text to search for.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Target text found.

    -   **0**

        Target text not found


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is useful for determining whether a string captured at runtime contains a substring of interest.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Example

**Test Lines**

![](/images//Images/bia_does_text_contain_pgm.png)

**Result**

![](/images//Images/bia_does_text_contain_res.png)

**Parent topic:**[Value Handling](/TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[check value](/TA_Automation/Topics/bia_check_value.html)

**Next topic:**[get setting](/TA_Automation/Topics/bia_get_setting.html)

