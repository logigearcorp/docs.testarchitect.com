--- 
title: "-"
linktitle: "GetTextContent"
weight: 22
aliases: 
    - /TA_Automation/Topics/abt_AbtGetTextContent_AbtElement.html
---
keyword: [gettextcontent, abtelement gettextcontent, content of text fragment, content of bitmap text in control]
---

# GetTextContent

## Syntax

`string getTextContent (string drawfunction, string text, int index)`

## Description

Retrieve content of the text fragment residing in a given control.

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

A string value indicating content of the text.

## Notes

-   This method always employs the [Graphics Device Interface](aut_text_recognition_techniques.html) \(GDI\) technique to recognize text produced by an AUT.

**Parent topic:**[AbtElement](/TA_Automation/Topics/abt_AbtElement.html)

**Previous topic:**[GetTextColor](/TA_Automation/Topics/abt_AbtGetTextColor_AbtElement.html)

**Next topic:**[GetTextCoordinates](/TA_Automation/Topics/abt_AbtGetTextCoordinates_AbtElement.html)

