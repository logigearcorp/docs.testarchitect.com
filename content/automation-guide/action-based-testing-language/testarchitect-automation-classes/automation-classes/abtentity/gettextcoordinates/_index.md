--- 
title: "GetTextCoordinates"
linktitle: "GetTextCoordinates"
weight: 20
aliases: 
    - /TA_Automation/Topics/abt_AbtGetTextCoordinates_AbtEntity.html
keywords: "gettextcoordinates, abtentity gettextcoordinates, position and dimensions of bitmap text, coordinates and size of bitmap text"
---

## Syntax

`TARect GetTextCoordinates (string text, TARect rect, int index, string color)`

## Description

Return the location and dimensions of an instance of a specified [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html) within the object's bitmap.

## Parameters

-   **text**

    String representing the bitmap text fragment whose presence the object's bitmap will be scanned for.

-   **rect**

    [TARect](abt_TARect.html) value specifying a rectangular active area in the object's bitmap. Scanning for the matching bitmap text fragment is limited to this active area.

-   **index**

    Index of the specific instance of the matching bitmap text fragment of interest, in case more than one is discovered within the active area.

    Note that index numbering begins with 1. \(Default: 1\)

-   **color**

    Color code of the text, in hexadecimal.


## Return Value

-   A TARect object is returned, representing the bounding rectangle of the found bitmap text fragment of interest, and containing the following:
    -   left: Horizontal coordinate of left border of the bounding rectangle relative to the left side of the calling object.
    -   top: Vertical coordinate of top of the bounding rectangle relative to the top of the calling object.
    -   width: Width of the bounding rectangle.
    -   height: Height of the bounding rectangle.
-   If the index-specified instance of the bitmap text fragment is not found, return null.

## Notes

-   The returned left and top coordinates are relative to the respective left and top edges of thewindow.
-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtEntity](/TA_Automation/Topics/abt_AbtEntity.html)

**Previous topic:**[GetTextContent](/TA_Automation/Topics/abt_AbtGetTextContent_AbtEntity.html)

**Next topic:**[GetTextCount](/TA_Automation/Topics/abt_AbtGetTextCount_AbtEntity.html)

