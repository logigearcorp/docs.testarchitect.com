--- 
title: "mid"
linktitle: "mid"
aliases: 
    - /TA_Automation/Topics/Expressions_functions_mid.html
---
# mid {#mid .reference}

Return a substring of a given source string, specifying the substring's size as well as its starting location within the source.

## Syntax { .section}

`string mid(string str, integer startLoc, integer len)`

## Parameters { .section}

str
:   The source string from which the substring is to be derived.

startLoc
:   The position in str at which the returned substring begins. \(The first character is considered to be at position 1\)

len
:   The number of characters to return.

## Return Value { .section}

Returns a string containing len characters from string str, beginning at startLoc. If startLoc is greater than the number of characters in str, return a zero-length string \(""\). If there are fewer than startLoc + len characters in str, all characters from the start position to the end of str are returned.

## Example { .section}

**Test Lines**

![](../Images/automationguide_stringfunction_mid_pgm.png)

**Result**

![](../Images/automationguide_stringfunction_mid_res.png)

**Parent topic:**[String functions](../../TA_Automation/Topics/Expressions_string_functions.html)

**Previous topic:**[lowercase](../../TA_Automation/Topics/Expressions_functions_lowercase.html)

**Next topic:**[newline](../../TA_Automation/Topics/Expressions_functions_newLine.html)

