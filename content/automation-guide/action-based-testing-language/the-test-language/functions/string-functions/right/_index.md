--- 
title: "right"
linktitle: "right"
weight: 9
aliases: 
    - /TA_Automation/Topics/Expressions_functions_right.html
---

Return a substring containing a specified number of characters from the right side of a string.

## Syntax

`string right(string str,integer len)`

## Parameters

-   **str**

    The source string from which the rightmost characters are returned.

-   **len**

    The number of rightmost characters in str to return.


## Return Value

Returns a string containing a specified number of characters from the right side of string str. If len is zero, a zero-length string \(""\) is returned. If len is greater than or equal to the number of characters in str, the entire source string is returned.

## Example

**Test Lines**

![](/images//Images/automationguide_stringfunction_right_pgm.png)

**Result**

![](/images//Images/automationguide_stringfunction_right_res.png)

**Parent topic:**[String functions](/TA_Automation/Topics/Expressions_string_functions.html)

**Previous topic:**[newline](/TA_Automation/Topics/Expressions_functions_newLine.html)

**Next topic:**[tab](/TA_Automation/Topics/Expressions_functions_tab.html)

