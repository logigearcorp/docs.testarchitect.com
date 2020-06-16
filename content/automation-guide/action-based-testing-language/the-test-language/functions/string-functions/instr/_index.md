--- 
title: "instr"
linktitle: "instr"
description: "Return an integer value specifying the start position of the first occurrence of one string within another. The search for the substring begins at a specified position."
weight: 3
aliases: 
    - /TA_Automation/Topics/Expressions_functions_instr.html
keywords: "string functions, instr, instr (string function)"
---

Return an integer value specifying the start position of the first occurrence of one string within another. The search for the substring begins at a specified position.

## Syntax

`integer instr(string string1, string string2, integer startLoc)`

## Parameters

-   **string1**

    Source string to be searched.

-   **string2**

    Substring to search for.

-   **startLoc**

    The starting position in string1 at which to begin the search. \(The first character is considered to be at position 1\)


## Return Value

Returns the position of the first occurrence of string2 in the search area of string1. The search area is defined as the part of string1 starting from the startLoc index to the end. Returns zero if string2 is not found.

## Example

**Test Lines**

![](/images/TA_Automation/Images/automationguide_stringfunction_instr_pgm.png)

**Result**

![](/images/TA_Automation/Images/automationguide_stringfunction_instr_res.png)




