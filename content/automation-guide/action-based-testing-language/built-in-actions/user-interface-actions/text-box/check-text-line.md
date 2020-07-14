--- 
title: "check text line"
linktitle: "check text line"
description: "Description Check a specified line of multi-line text content against a text string or regular expression. Result is Passed if the specified line matches the expected line ; otherwise Failed . ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_text_line.html
keywords: "built-in actions, check text line, check text line (action), iOS (action), check text line, Android (action), Safari, macOS (action), macOS, Safari (action), check specified line of multi-line text against value, check whether specific line of text matches value, verify if specified line of multi-line text matches regular expression, verify whether specified line of text matches regular expression"
---

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
    -   While it is possible to use literal text content in the value argument, in most practical cases you will want to use a variable here \(preceded by \#\) which has been pre-loaded with multi-line text. Possible sources of such text: a multi-line text control \(see [get](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get)\), or a text file \(see [get text file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/get-text-file) action\).
    -   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only).

## Example

![](/images/TA_Automation/Images/bia_check_text_line_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_text_line_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_text_line_res.png)
