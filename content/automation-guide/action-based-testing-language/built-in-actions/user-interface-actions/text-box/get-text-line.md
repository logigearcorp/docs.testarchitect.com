--- 
title: "get text line"
linktitle: "get text line"
description: "Description Extract a single line from multi-line text content. Arguments value Multi-line text content. number Integer index specifying the line in value to be extracted. variable (Optional) Variable ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_get_text_line.html
keywords: "built-in actions, get text line, get text line (action), iOS (action), get text line, Android (action), Safari, macOS (action), macOS, Safari (action), retrieve line from text, extract line from multi-line text, obtain line from multi-line text"
---

## {{< expand >}} Description

Extract a single line from multi-line text content.

## {{< expand >}} Arguments

-   **value**

    Multi-line text content.

-   **number**

    Integer index specifying the line in value to be extracted.

-   **variable**

    \(Optional\) Variable to receive the extracted text.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   value argument:
    -   While it is possible to use literal text content in the value argument, in most practical cases you will want to use a variable here \(preceded by **\#**\) which has been pre-loaded with multi-line text. Possible sources of such text: a multi-line text control \(see [get](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get)\), or a text file \(see [get text file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/get-text-file) action\).
-   number argument:
    -   Note that line numbering begins with 1.
    -   TestArchitect issues a warning if the value in number is larger than the total number of lines in the multi-line text.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only) none.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_get_text_line_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_text_line_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_text_line_res.png)

