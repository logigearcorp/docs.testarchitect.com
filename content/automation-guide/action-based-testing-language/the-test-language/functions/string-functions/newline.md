--- 
title: "newline"
linktitle: "newline"
description: "Return a special character signifying the end of a line of text."
weight: 8
aliases: 
    - /TA_Automation/Topics/Expressions_functions_newLine.html
keywords: "string functions, char, newline()"
---

Return a special character signifying the end of a line of text.

## {{< expand >}} Syntax

`newline()`

## {{< expand >}} Parameters

`none`

## {{< expand >}} Return Value

A non-printing character having the effect of forcing subsequent text to begin at a new line.

## {{< expand >}} Notes

-   Depending on the host operating system, the returned control character varies as follows:
    -   Windows: \\r\\n.
    -   Linux and macOS: \\n.

## {{< expand >}} Example

**Test Lines**

![](/images/TA_Automation/Images/automationguide_stringfunction_newLine_pgm.png)

**Result**

![](/images/TA_Automation/Images/automationguide_stringfunction_newLine_res.png)




