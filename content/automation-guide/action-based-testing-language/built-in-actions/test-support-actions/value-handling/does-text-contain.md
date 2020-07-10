--- 
title: "does text contain"
linktitle: "does text contain"
description: "Description Return a Boolean value to indicate whether a specified string of text is a substring of another text string. Arguments text Text string to be tested. fragment Target text to search for. ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_does_text_contain.html
keywords: "built-in actions, does text contain, does text contain (action), check if text is substring of another text, verify whether text is substring of another text, check if string is substring of another string"
---

## {{< expand >}} Description

Return a Boolean value to indicate whether a specified string of text is a substring of another text string.

## {{< expand >}} Arguments

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


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action is useful for determining whether a string captured at runtime contains a substring of interest.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only).

## {{< expand >}} Example

**Test Lines**

![](/images/TA_Automation/Images/bia_does_text_contain_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_text_contain_res.png)




