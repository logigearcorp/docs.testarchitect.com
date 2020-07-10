--- 
title: "GetTextColor"
linktitle: "GetTextColor"
description: "Syntax string GetTextColor (string drawfunction, string text, int index) Description Retrieve color code of the text fragment residing in a given control, in hexadecimal. Parameters drawfunction ..."
weight: 21
aliases: 
    - /TA_Automation/Topics/abt_AbtGetTextColor_AbtElement.html
keywords: "methods of abt, GetTextColor, GetTextColor (AbtElement), AbtElement, gettextcolor, abtelement gettextcolor, color code of text in control, get forecolor of text in HTML element, hexadecimal color code of text fragment in element"
---

## {{< expand >}} Syntax {{< permerlink >}} {#abt_GetTextColor_AbtElement__section.syntax} 

`string GetTextColor (string drawfunction, string text, int index)`

## {{< expand >}} Description {{< permerlink >}} {#abt_GetTextColor_AbtElement__section.desc} 

Retrieve color code of the text fragment residing in a given control, in hexadecimal.

## {{< expand >}} Parameters {{< permerlink >}} {#abt_GetTextColor_AbtElement__section.params} 

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

    String representing the [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) to be searched for.

-   **index**

    Specifies a minimum number of instances of the search text that must be discovered within the active area for the target [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) to be considered as found \(default = 1\).


## {{< expand >}} Return Value {{< permerlink >}} {#abt_GetTextColor_AbtElement__section.return} 

A hexadecimal value indicating color code of the text.

## {{< expand >}} Notes {{< permerlink >}} {#abt_GetTextColor_AbtElement__section_vwj_hjw_j4} 

-   This method always employs the [Graphics Device Interface](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques) \(GDI\) technique to recognize text produced by an AUT.




