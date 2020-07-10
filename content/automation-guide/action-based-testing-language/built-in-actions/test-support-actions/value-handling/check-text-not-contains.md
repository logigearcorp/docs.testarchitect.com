--- 
title: "check text not contains"
linktitle: "check text not contains"
description: "Description Check the nonexistence of a specified string within another string. Result is Passed if the substring is not found ; otherwise Failed . Arguments text Text string to be tested. fragment ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_text_not_contains.html
keywords: "built-in actions, check text not contains, check text not contains (action), check if text does not contain specfied string, check if string does not contain specified words, check whether string does not contain substring, verify if string does not contain specified text, verify whether string does contain specified words"
---

## {{< expand >}} Description

Check the nonexistence of a specified string within another string. Result is Passed ifthe substring is not found; otherwise Failed.

## {{< expand >}} Arguments

-   **text**

    Text string to be tested.

-   **fragment**

    Target text to search for.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action is useful for determining whether a string captured at runtime contains the target string of interest.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_check_text_not_contains_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_text_not_contains_res.png)




