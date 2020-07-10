--- 
title: "check clipboard"
linktitle: "check clipboard"
description: "Description Check the text content of the test system's clipboard against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments expected Expected clipboard contents. ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_clipboard.html
keywords: "built-in actions, check clipboard, check clipboard (action), check clipboard contents, check clipboard, validate clipboard contents, validate clipboard, verify clipboard contents, verify clipboard"
---

## {{< expand >}} Description

Check the text content of the test system's clipboard against an expected value. Result is Passed ifthe values match; otherwise Failed.

## {{< expand >}} Arguments

-   **expected**

    Expected clipboard contents.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action supports text formats only. TestArchitect treats unrecognized formats in the clipboard as blank content.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_check_clipboard_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_clipboard_res.png)



