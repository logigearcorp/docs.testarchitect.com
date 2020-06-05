--- 
title: "check text line"
linktitle: "check text line"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_text_line.html
---
keyword: [check text line, check specified line of multi-line text against value, check whether specific line of text matches value, verify if specified line of multi-line text matches regular expression, verify whether specified line of text matches regular expression]
---

# check text line

## Description

Check a specified line of multi-line text content against a text string or regular expression. Result is Passed ifthe specified line matches the expected line; otherwise Failed.

## Arguments

-   **value**

    Multi-line text content.

-   **number**

    Integer index specifying the line in value to be tested against the contents of expected argument.

-   **expected**

    Text or pattern to test for.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   number argument:
    -   Note that line numbering begins with 1.
    -   Result registers as Failed if value in number is larger than the total lines in the multi-line text.
-   expected argument:
    -   While it is possible to use literal text content in the value argument, in most practical cases you will want to use a variable here \(preceded by **\#**\) which has been pre-loaded with multi-line text. Possible sources of such text: a multi-line text control \(see [get](bia_get.html)\), or a text file \(see [get text file](bia_get_text_file.html) action\).
    -   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Example

![](/images//Images/bia_check_text_line_aut.png)

**Action Lines**

![](/images//Images/bia_check_text_line_pgm.png)

**Result**

![](/images//Images/bia_check_text_line_res.png)

## Example

![](/images//Images/bia_check_text_line_ta4vs_aut.png)

**Action Lines**

![](/images//Images/bia_check_text_line_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_text_line_ta4vs_res.png)

**Parent topic:**[Text Box](/TA_Automation/Topics/bia_Text_box.html)

**Previous topic:**[check pattern not in text](/TA_Automation/Topics/bia_check_pattern_not_in_text.html)

**Next topic:**[get text line](/TA_Automation/Topics/bia_get_text_line.html)

