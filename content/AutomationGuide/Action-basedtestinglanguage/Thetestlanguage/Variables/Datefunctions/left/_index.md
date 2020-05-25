--- 
title: "left"
linktitle: "left"
aliases: 
    - /TA_Automation/Topics/Expressions_functions_left.html
---
# left {#left .reference}

Return a substring containing a specified number of characters from the left side of a string.

## Syntax { .section}

`string left(string str,integer len)`

## Parameters { .section}

str
:   The source string from which the leftmost characters are returned.

len
:   The number of leftmost characters in str to return.

## Return Value { .section}

Returns a string containing a specified number of characters from the left side of string str. If len is zero, a zero-length string \(""\) is returned. If len is greater than or equal to the number of characters in str, the entire source string is returned.

## Example { .section}

**Test Lines**

![](../Images/automationguide_stringfunction_left_pgm.png)

**Result**

![](../Images/automationguide_stringfunction_left_res.png)

**Parent topic:**[String functions](../../TA_Automation/Topics/Expressions_string_functions.html)

**Previous topic:**[instr](../../TA_Automation/Topics/Expressions_functions_instr.html)

**Next topic:**[length](../../TA_Automation/Topics/Expressions_functions_length.html)

