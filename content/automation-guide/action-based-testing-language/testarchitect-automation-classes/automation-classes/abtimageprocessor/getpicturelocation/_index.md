--- 
title: "GetPictureLocation"
linktitle: "GetPictureLocation"
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_AbtGetPictureLocation_AbtImageProcessor.html
keywords: "getpicturelocation, abtimageprocessor getpicturelocation, coordinates and dimensions of image in bitmap, location and size of image in bitmap"
---

## Syntax

`TARect GetPictureLocation (string picture, TARect rect, int index)`

## Description

Return the location and dimensions of an instance of a specified image within the object's bitmap.

## Parameters

-   **picture**

    [Picture check](/TA_Help/Topics/Projects_and_tests_picture_check.html) containing the baseline image\(s\) that the object's bitmap will be scanned for.

-   **rect**

    [TARect](abt_TARect.html) object specifying a rectangular active area in the object's bitmap. Scanning for matching images is limited to this active area.

-   **index**

    Index of the image of interest displayed within the active area, in case more than one matching image is discovered within it.

    Note that index numbering begins with 1. \(Default: 1\)


## Return Value

-   [TARect](/reuse/../TA_Automation/Topics/abt_TARect.html) object representing the bounding rectangle ofthe found picture, and containing the following:

    -   left: Horizontal coordinate of left border of the bounding rectangle relative to the left side of the calling object.
    -   top: Vertical coordinate of top of the bounding rectangle relative to the top of the calling object.
    -   width: Width of the bounding rectangle.
    -   height: Height of the bounding rectangle.
    Note: all values are in pixels.

-   If the index-specified instance of a matching image is not found, return null.

## Notes

-   As an [AbtImageProcessor](abt_ImageProcessor.html) object represents the entire display; the returned left and top coordinates are relative to the left and top of screen, respectively.
-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtImageProcessor](/TA_Automation/Topics/abt_ImageProcessor.html)

**Next topic:**[GetTextCoordinates](/TA_Automation/Topics/abt_AbtGetTextCoordinates_AbtImageProcessor.html)

