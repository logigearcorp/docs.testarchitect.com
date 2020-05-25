--- 
title: "check clipboard"
linktitle: "check clipboard"
aliases: 
    - /TA_Automation/Topics/bia_check_clipboard.html
---
# check clipboard {#bia_check_clipboard .reference}

## Description { .section}

Check the text content of the test system's clipboard against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments { .section}

expected
:   Expected clipboard contents.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports text formats only. TestArchitect treats unrecognized formats in the clipboard as blank content.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [value changed wait](bis_value_changed_wait.html).

## Example { .section}

**Action Lines**

![](../Images/bia_check_clipboard_pgm.png)

**Result**

![](../Images/bia_check_clipboard_res.png)

**Parent topic:**[Clipboard](../../TA_Automation/Topics/bia_clipboard.html)

**Next topic:**[get clipboard](../../TA_Automation/Topics/bia_get_clipboard.html)

