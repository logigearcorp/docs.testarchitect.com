--- 
title: "GetTextColor"
linktitle: "GetTextColor"
description: "Syntax string GetTextColor (string drawfunction, string text, int index) Description Retrieve color code of the text fragment residing in a given window, in hexadecimal. Parameters drawfunction ..."
weight: 18
aliases: 
    - /TA_Automation/Topics/abt_AbtGetTextColor_AbtEntity.html
keywords: "methods of abt, GetTextColor, GetTextColor (AbtEntity), AbtEntity, gettextcolor, abtentity gettextcolor, color code of text in window, retrieve backcolor of text in window, hexadecimal color code of text"
---

## {{< expand >}} Syntax {{< permerlink >}} {#abt_GetTextColor_AbtEntity__section.syntax} 

`string GetTextColor (string drawfunction, string text, int index)`

## {{< expand >}} Description {{< permerlink >}} {#abt_GetTextColor_AbtEntity__section.desc} 

Retrieve color code of the text fragment residing in a given window, in hexadecimal.

## {{< expand >}} Parameters {{< permerlink >}} {#abt_GetTextColor_AbtEntity__section.params} 

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


## {{< expand >}} Return Value {{< permerlink >}} {#abt_GetTextColor_AbtEntity__section.return} 

A hexadecimal value indicating color code of the text.

## {{< expand >}} Notes {{< permerlink >}} {#abt_GetTextColor_AbtEntity__section_vwj_hjw_j4} 

-   This method is currently supported only by the C\# harness.
-   This method always employs the [Graphics Device Interface](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques) \(GDI\) technique to recognize text produced by an AUT.
-   You can also apply GDI methods including:

    -   [GetTextBackgroundColor](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/gettextbackgroundcolor)
    -   [GetTextColor](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/gettextcolor)
    -   [GetTextContent](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/gettextcontent)
    -   [GetTextCount](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/gettextcount)
    to reconstruct a table from the recognized texts. Note that, off-screen columns/rows will not be counted. This circumstance is quite useful when you'd like to retrieve a number of columns/rows in a table by using GDI technique.

    Technically, the GDI methods reconstruct columns based on the vertical bar's max height in the given control. By default, when a detected vertical bar is equivalent to or above 80% of the max vertical bar, this detected vertical bar is a separator of a column. If the reconstructed number of column is not what you expect, adjusting the value of the [gdi column identifier percentage](/automation-guide/action-based-testing-language/built-in-settings/other-settings/gdi-column-identifier-percentage) built-in setting might help.

    Similarly, rows are reconstructed based on the horizontal bar's max height. By default, when a detected horizontal bar is equivalent to or above 80% of the max horizontal bar, the detected horizontal bar is a separator of a row. [gdi row identifier percentage](/automation-guide/action-based-testing-language/built-in-settings/other-settings/gdi-row-identifier-percentage) is the built-in setting to define the threshold value for reconstructing rows.





