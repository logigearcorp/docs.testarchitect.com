--- 
title: "-"
linktitle: "GetTextBackgroundColor"
weight: 20
aliases: 
    - /TA_Automation/Topics/abt_AbtGetTextBackgroundColor_AbtElement.html
---
keyword: [gettextbackgroundcolor, abtelement gettextbackgroundelement, hexadecimal color code of text background in control, background color of text in HTML element, text background color in element]
---

# GetTextBackgroundColor

## Syntax

`string GetTextBackgroundColor (string drawfunction, string text, int index)`

## Description

Retrieve color code of the text background residing in a given control, in hexadecimal.

## Parameters

-   **drawfunction**

    TestArchitect detects the text fragment drawn by its drawing functions.

    Allowable values:

    -   DrawTextA: Retrieve texts drawn by the [DrawTextA](https://msdn.microsoft.com/en-us/library/dd162498(v=vs.85).aspx) function \(ANSI name\).
    -   DrawTextW: Retrieve texts drawn by the [DrawTextW](https://msdn.microsoft.com/en-us/library/dd162498(v=vs.85).aspx) function \(Unicode name\).
    -   TextOutA: Retrieve texts drawn by the [TextOutA](https://msdn.microsoft.com/en-us/library/dd145133(v=vs.85).aspx) function \(ANSI name\).
    -   TextOutW: Retrieve texts drawn by the [TextOutA](https://msdn.microsoft.com/en-us/library/dd145133(v=vs.85).aspx) function \(Unicode name\).
    -   ExtTextOutA: Retrieve texts drawn by the [ExtTextOutA](https://msdn.microsoft.com/en-us/library/dd162713(v=vs.85).aspx) function \(ANSI name\).
    -   ExtTextOutW: Retrieve texts drawn by the [ExtTextOutW](https://msdn.microsoft.com/en-us/library/dd162713(v=vs.85).aspx) function \(Unicode name\).
    **Note:**

    -   If the argument's value is omitted, by default, TestArchitect retrieve texts drawn by all drawing functions above.
    -   To use multiple values at a time, use semi-colon \( ; \) as delimiters between values.
-   **text**

    String representing the [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html) to be searched for.

-   **index**

    Specifies a minimum number of instances of the search text that must be discovered within the active area for the target [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html) to be considered as found \(default = 1\).


## Return Value

A hexadecimal value indicating color code of the text background.

-   This method always employs the [Graphics Device Interface](aut_text_recognition_techniques.html) \(GDI\) technique to recognize text produced by an AUT.
-   You can also apply GDI methods including:

    -   [GetTextBackgroundColor](abt_AbtGetTextBackgroundColor_AbtElement.html)
    -   [GetTextColor](abt_AbtGetTextColor_AbtElement.html)
    -   [GetTextContent](abt_AbtGetTextContent_AbtElement.html)
    -   [GetTextCount](abt_AbtGetTextCount_AbtElement.html)
    to reconstruct a table from the recognized texts. Note that, off-screen columns/rows will not be counted. This circumstance is quite useful when you'd like to retrieve a number of columns/rows in a table by using GDI technique.

    Technically, the GDI methods reconstruct columns based on the vertical bar's max height in the given control. By default, when a detected vertical bar is equivalent to or above 80% of the max vertical bar, this detected vertical bar is a separator of a column. If the reconstructed number of column is not what you expect, adjusting the value of the [gdi column identifier percentage](bis_gdi_column_identifier_percentage.html) built-in setting might help.

    Similarly, rows are reconstructed based on the horizontal bar's max height. By default, when a detected horizontal bar is equivalent to or above 80% of the max horizontal bar, the detected horizontal bar is a separator of a row. [gdi row identifier percentage](bis_gdi_row_identifier_percentage.html) is the built-in setting to define the threshold value for reconstructing rows.


**Parent topic:**[AbtElement](/TA_Automation/Topics/abt_AbtElement.html)

**Previous topic:**[GetTAClass](/TA_Automation/Topics/abt_GetTAClass_1.html)

**Next topic:**[GetTextColor](/TA_Automation/Topics/abt_AbtGetTextColor_AbtElement.html)

