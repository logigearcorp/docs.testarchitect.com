--- 
title: "char"
linktitle: "char"
description: "Return a Unicode character specified by a code number."
weight: 1
aliases: 
    - /TA_Automation/Topics/Expressions_functions_char.html
keywords: "string functions, char, char(code)"
---

Return a Unicode character specified by a code number.

## {{< expand >}} Syntax

`char(code)`

## {{< expand >}} Parameters

-   **code**

    Decimal number representing a Unicode character.


## {{< expand >}} Return Value

Unicode character, as specified by the given decimal code.

## {{< expand >}} Notes

-   This expression function relies on UTF-8 encoding.
-   The website [Unicode Character Table](http://unicode-table.com/en/) offers a helpful reference for determining the decimal code needed to produce any given Unicode character.
-   Note that the decimal code of 0 \(that is, the null character\) is unsupported.
-   The decimal code of 10 \(line feed, LF\), 13 \(Carriage Return, CR\) or a combination of them used in TestArchitect represents a new line regardless of AUT's platform or system-under-test.

## {{< expand >}} Example

**Test Lines**

![](/images/TA_Automation/Images/automationguide_stringfunction_char_pgm.png)

\( Note: The decimal value of 8364 represents the Euro symbol. \)

**Result**

![](/images/TA_Automation/Images/automationguide_stringfunction_char_res.png)



