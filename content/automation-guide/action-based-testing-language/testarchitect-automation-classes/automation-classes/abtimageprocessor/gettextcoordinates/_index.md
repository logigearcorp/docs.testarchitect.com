--- 
title: "-"
linktitle: "GetTextCoordinates"
weight: 2
aliases: 
    - /TA_Automation/Topics/abt_AbtGetTextCoordinates_AbtImageProcessor.html
---
keyword: [gettextcoordinates, abtimageprocessor gettextcoordinates, coordinates and dimensions of text fragment in bitmap, location and size of text fragment in bitmap]
---

# GetTextCoordinates

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

-   As an [AbtImageProcessor](abt_ImageProcessor.html) object represents the entire display; the returned left and top coordinates are relative to the left and top of screen, respectively.
-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtImageProcessor](/TA_Automation/Topics/abt_ImageProcessor.html)

**Previous topic:**[GetPictureLocation](/TA_Automation/Topics/abt_AbtGetPictureLocation_AbtImageProcessor.html)

