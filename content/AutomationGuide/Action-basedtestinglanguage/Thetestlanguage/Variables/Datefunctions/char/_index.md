--- 
title: "char"
linktitle: "char"
aliases: 
    - /TA_Automation/Topics/Expressions_functions_char.html
---
# char {#char .reference}

Return a Unicode character specified by a code number.

## Syntax { .section}

`char(code)`

## Parameters { .section}

code
:   Decimal number representing a Unicode character.

## Return Value { .section}

Unicode character, as specified by the given decimal code.

## Notes { .section}

-   This expression function relies on UTF-8 encoding.
-   The website [Unicode Character Table](http://unicode-table.com/en/) offers a helpful reference for determining the decimal code needed to produce any given Unicode character.
-   Note that the decimal code of 0 \(that is, the null character\) is unsupported.
-   The decimal code of 10 \(line feed, LF\), 13 \(Carriage Return, CR\) or a combination of them used in TestArchitect represents a new line regardless of AUT's platform or system-under-test.

## Example { .section}

**Test Lines**

![](../Images/automationguide_stringfunction_char_pgm.png)

\( Note: The decimal value of 8364 represents the Euro symbol. \)

**Result**

![](../Images/automationguide_stringfunction_char_res.png)

**Parent topic:**[String functions](../../TA_Automation/Topics/Expressions_string_functions.html)

**Next topic:**[getsetting](../../TA_Automation/Topics/Expressions_functions_getsetting.html)

