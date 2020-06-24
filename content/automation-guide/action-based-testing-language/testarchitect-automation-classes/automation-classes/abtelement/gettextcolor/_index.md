--- 
title: "GetTextColor"
linktitle: "GetTextColor"
description: "Syntax string GetTextColor (string drawfunction, string text, int index) Description Retrieve color code of the text fragment residing in a given control, in hexadecimal. Parameters drawfunction ..."
weight: 21
aliases: 
    - /TA_Automation/Topics/abt_AbtGetTextColor_AbtElement.html
keywords: "methods of abt, GetTextColor, GetTextColor (AbtElement), AbtElement, gettextcolor, abtelement gettextcolor, color code of text in control, get forecolor of text in HTML element, hexadecimal color code of text fragment in element"
---

## Syntax

`string GetTextColor (string drawfunction, string text, int index)`

## Description

Retrieve color code of the text fragment residing in a given control, in hexadecimal.

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
    {{<note>}}

    -   If the argument's value is omitted, by default, TestArchitect retrieve texts drawn by all drawing functions above.
    -   To use multiple values at a time, use semi-colon \( ; \) as delimiters between values.
-   **text**

    String representing the [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html) to be searched for.

-   **index**

    Specifies a minimum number of instances of the search text that must be discovered within the active area for the target [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html) to be considered as found \(default = 1\).


## Return Value

A hexadecimal value indicating color code of the text.

## Notes

-   This method always employs the [Graphics Device Interface](/TA_Automation/Topics/aut_text_recognition_techniques.html) \(GDI\) technique to recognize text produced by an AUT.




