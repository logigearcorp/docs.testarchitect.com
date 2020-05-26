--- 
title: "newline"
linktitle: "newline"
weight: 8
aliases: 
    - /TA_Automation/Topics/Expressions_functions_newLine.html
---
# newline {#newline .reference}

Return a special character signifying the end of a line of text.

## Syntax { .section}

`newline()`

## Parameters { .section}

`none`

## Return Value { .section}

A non-printing character having the effect of forcing subsequent text to begin at a new line.

## Notes { .section}

-   Depending on the host operating system, the returned control character varies as follows:
    -   Windows: \\r\\n.
    -   Linux and macOS: \\n.

## Example { .section}

**Test Lines**

![](../Images/automationguide_stringfunction_newLine_pgm.png)

**Result**

![](../Images/automationguide_stringfunction_newLine_res.png)

**Parent topic:**[String functions](../../TA_Automation/Topics/Expressions_string_functions.html)

**Previous topic:**[mid](../../TA_Automation/Topics/Expressions_functions_mid.html)

**Next topic:**[right](../../TA_Automation/Topics/Expressions_functions_right.html)

