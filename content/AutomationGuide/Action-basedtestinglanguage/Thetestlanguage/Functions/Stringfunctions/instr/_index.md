--- 
title: "instr"
linktitle: "instr"
weight: 3
aliases: 
    - /TA_Automation/Topics/Expressions_functions_instr.html
---
# instr {#instr .reference}

Return an integer value specifying the start position of the first occurrence of one string within another. The search for the substring begins at a specified position.

## Syntax { .section}

`integer instr(string string1, string string2, integer startLoc)`

## Parameters { .section}

string1
:   Source string to be searched.

string2
:   Substring to search for.

startLoc
:   The starting position in string1 at which to begin the search. \(The first character is considered to be at position 1\)

## Return Value { .section}

Returns the position of the first occurrence of string2 in the search area of string1. The search area is defined as the part of string1 starting from the startLoc index to the end. Returns zero if string2 is not found.

## Example { .section}

**Test Lines**

![](../Images/automationguide_stringfunction_instr_pgm.png)

**Result**

![](../Images/automationguide_stringfunction_instr_res.png)

**Parent topic:**[String functions](../../TA_Automation/Topics/Expressions_string_functions.html)

**Previous topic:**[getsetting](../../TA_Automation/Topics/Expressions_functions_getsetting.html)

**Next topic:**[left](../../TA_Automation/Topics/Expressions_functions_left.html)

