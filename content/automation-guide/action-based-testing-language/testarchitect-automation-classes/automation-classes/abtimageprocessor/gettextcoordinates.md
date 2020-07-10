--- 
title: "GetTextCoordinates"
linktitle: "GetTextCoordinates"
description: "Syntax TARect GetTextCoordinates (string text, TARect rect, int index, string color) Description Return the location and dimensions of an instance of a specified bitmap text fragment within the ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/abt_AbtGetTextCoordinates_AbtImageProcessor.html
keywords: "methods of abt, GetTextCoordinates, GetTextCoordinates (AbtImageProcessor), AbtImageProcessor, GetTextCoordinates, gettextcoordinates, abtimageprocessor gettextcoordinates, coordinates and dimensions of text fragment in bitmap, location and size of text fragment in bitmap"
---

## {{< expand >}} Syntax {{< permerlink >}} {#abt_GetPictureLocation_image_processor__section.syntax} 

`TARect GetTextCoordinates (string text, TARect rect, int index, string color)`

## {{< expand >}} Description {{< permerlink >}} {#abt_GetPictureLocation_image_processor__section.desc} 

Return the location and dimensions of an instance of a specified [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) within the object's bitmap.

## {{< expand >}} Parameters {{< permerlink >}} {#abt_GetPictureLocation_image_processor__section.params} 

-   **text**

    String representing the bitmap text fragment whose presence the object's bitmap will be scanned for.

-   **rect**

    [TARect](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abt-object-classes/tarect) value specifying a rectangular active area in the object's bitmap. Scanning for the matching bitmap text fragment is limited to this active area.

-   **index**

    Index of the specific instance of the matching bitmap text fragment of interest, in case more than one is discovered within the active area.

    Note that index numbering begins with 1. \(Default: 1\)

-   **color**

    Color code of the text, in hexadecimal.


## {{< expand >}} Return Value {{< permerlink >}} {#abt_GetPictureLocation_image_processor__section.return} 

-   A TARect object is returned, representing the bounding rectangle of the found bitmap text fragment of interest, and containing the following:
    -   left: Horizontal coordinate of left border of the bounding rectangle relative to the left side of the calling object.
    -   top: Vertical coordinate of top of the bounding rectangle relative to the top of the calling object.
    -   width: Width of the bounding rectangle.
    -   height: Height of the bounding rectangle.
-   If the index-specified instance of the bitmap text fragment is not found, return null.

## {{< expand >}} Notes {{< permerlink >}} {#abt_GetPictureLocation_image_processor__section_vwj_hjw_j4} 

-   As an [AbtImageProcessor](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtimageprocessor/) object represents the entire display; the returned left and top coordinates are relative to the left and top of screen, respectively.
-   This method is currently supported only by the C\# harness.



