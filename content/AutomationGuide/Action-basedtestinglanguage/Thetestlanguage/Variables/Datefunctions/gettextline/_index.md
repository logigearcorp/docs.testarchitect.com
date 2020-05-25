--- 
title: "get text line"
linktitle: "get text line"
aliases: 
    - /TA_Automation/Topics/bia_get_text_line.html
---
# get text line {#bia_get_text_line .reference}

## Description { .section}

Extract a single line from multi-line text content.

## Arguments { .section}

value
:   Multi-line text content.

number
:   Integer index specifying the line in value to be extracted.

variable
:   \(Optional\) Variable to receive the extracted text.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   value argument:
    -   While it is possible to use literal text content in the value argument, in most practical cases you will want to use a variable here \(preceded by **\#**\) which has been pre-loaded with multi-line text. Possible sources of such text: a multi-line text control \(see [get](bia_get.html)\), or a text file \(see [get text file](bia_get_text_file.html) action\).
-   number argument:
    -   Note that line numbering begins with 1.
    -   TestArchitect issues a warning if the value in number is larger than the total number of lines in the multi-line text.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html) none.

## Example { .section}

![](../Images/bia_get_text_line_aut.png)

**Action Lines**

![](../Images/bia_get_text_line_pgm.png)

**Result**

![](../Images/bia_get_text_line_res.png)

## Example { .section}

![](../Images/bia_get_text_line_ta4vs_aut.png)

**Action Lines**

![](../Images/bia_get_text_line_ta4vs_pgm.png)

**Result**

![](../Images/bia_get_text_line_ta4vs_res.png)

**Parent topic:**[Text Box](../../TA_Automation/Topics/bia_Text_box.html)

**Previous topic:**[check text line](../../TA_Automation/Topics/bia_check_text_line.html)

