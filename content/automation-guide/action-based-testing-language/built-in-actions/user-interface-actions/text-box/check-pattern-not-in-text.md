--- 
title: "check pattern not in text"
linktitle: "check pattern not in text"
description: "Description Check whether the displayed text of a control contains a specified substring, or matches a specified regular expression. Result is Passed if the captured string does not match the pattern ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_pattern_not_in_text.html
keywords: "built-in actions, check pattern not in text, check pattern not in text (action), iOS (action), check pattern not in text, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if text does not contain specified substring, verify whether text does not contain specified substring, check whether text does not match regular expression, verify if text does not match regular expression pattern"
---

## {{< expand >}} Description

Check whether the displayed text of a control contains a specified substring, or matches a specified regular expression. Result is Passed ifthe captured string does *not* match the pattern; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **pattern**

    Text or pattern to test for.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   The pattern argument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   On macOS, curly brackets \{\} are treated as special characters. To include a curly bracket in regular expressions you must enclose it in a pair of square brackets \[\]. For example: \{ →\[\{\]; \}→ \[\}\].
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:richtext,text box, text view.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_pattern_not_in_text_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_pattern_not_in_text_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_pattern_not_in_text_res.png)




**Related information**  


[check pattern in text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/text-box/check-pattern-in-text)

