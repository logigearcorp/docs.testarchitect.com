--- 
title: "-"
linktitle: "check pattern not in text"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_pattern_not_in_text.html
---
keyword: [check pattern not in text, check if text does not contain specified substring, verify whether text does not contain specified substring, check whether text does not match regular expression, verify if text does not match regular expression pattern]
---

# check pattern not in text

## Description

Check whether the displayed text of a control contains a specified substring, or matches a specified regular expression. Result is Passed ifthe captured string does *not* match the pattern; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **pattern**

    Text or pattern to test for.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The pattern argument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   On macOS, curly brackets \{\} are treated as special characters. To include a curly bracket in regular expressions you must enclose it in a pair of square brackets \[\]. For example: \{ →\[\{\]; \}→ \[\}\].
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:richtext,text box, text view.

## Example

![](/images//Images/bia_check_pattern_not_in_text_aut.png)

**Action Lines**

![](/images//Images/bia_check_pattern_not_in_text_pgm.png)

**Result**

![](/images//Images/bia_check_pattern_not_in_text_res.png)

**Parent topic:**[Text Box](/TA_Automation/Topics/bia_Text_box.html)

**Previous topic:**[check pattern in text](/TA_Automation/Topics/bia_check_pattern_in_text.html)

**Next topic:**[check text line](/TA_Automation/Topics/bia_check_text_line.html)

**Related information**  


[check pattern in text](/TA_Automation/Topics/bia_check_pattern_in_text.html)

