--- 
title: "mid"
linktitle: "mid"
description: "Return a substring of a given source string, specifying the substring's size as well as its starting location within the source."
weight: 7
aliases: 
    - /TA_Automation/Topics/Expressions_functions_mid.html
keywords: "string functions, mid, mid (string function)"
---

Return a substring of a given source string, specifying the substring's size as well as its starting location within the source.

## Syntax

`string mid(string str, integer startLoc, integer len)`

## Parameters

-   **str**

    The source string from which the substring is to be derived.

-   **startLoc**

    The position in str at which the returned substring begins. \(The first character is considered to be at position 1\)

-   **len**

    The number of characters to return.


## Return Value

Returns a string containing len characters from string str, beginning at startLoc. If startLoc is greater than the number of characters in str, return a zero-length string \(""\). If there are fewer than startLoc + len characters in str, all characters from the start position to the end of str are returned.

## Example

Test Lines

![](/images/TA_Automation/Images/automationguide_stringfunction_mid_pgm.png)

Result

![](/images/TA_Automation/Images/automationguide_stringfunction_mid_res.png)



