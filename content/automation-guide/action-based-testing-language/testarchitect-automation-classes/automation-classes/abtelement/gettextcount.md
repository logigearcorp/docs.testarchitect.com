--- 
title: "GetTextCount"
linktitle: "GetTextCount"
description: "Syntax int getTextCount (string drawfunction, string text) Description Retrieve a count of the total number of text fragments residing in a given control. Parameters drawfunction TestArchitect detects ..."
weight: 24
aliases: 
    - /TA_Automation/Topics/abt_AbtGetTextCount_AbtElement.html
keywords: "methods of abt, GetTextCount, GetTextCount (AbtElement), AbtElement, gettextcount, abtelement gettextcount, number of texts in control, get number of text fragments in control, count text fragments in control"
---

## Syntax

`int getTextCount (string drawfunction, string text)`

## Description  

Retrieve a count of the total number of text fragments residing in a given control.

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

    String representing the [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) to be searched for.


## Return Value  

An integer value indicating the total number of text fragments found.

## Notes

-   This method always employs the [Graphics Device Interface](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques) \(GDI\) technique to recognize text produced by an AUT.




