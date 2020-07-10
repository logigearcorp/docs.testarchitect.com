--- 
title: "GetPictureLocation"
linktitle: "GetPictureLocation"
description: "Syntax TARect GetPictureLocation (string picture, TARect rect, int index) Description Return the location and dimensions of an instance of a specified image within the object's bitmap. Parameters ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_AbtGetPictureLocation_AbtImageProcessor.html
keywords: "methods of abt, GetPictureLocation, GetPictureLocation (AbtImageProcessor), AbtImageProcessor, GetPictureLocation, getpicturelocation, abtimageprocessor getpicturelocation, coordinates and dimensions of image in bitmap, location and size of image in bitmap"
---

## {{< expand >}} Syntax {{< permerlink >}} {#abt_GetPictureLocationAbtImageProcessor__section.syntax} 

`TARect GetPictureLocation (string picture, TARect rect, int index)`

## {{< expand >}} Description {{< permerlink >}} {#abt_GetPictureLocationAbtImageProcessor__section.desc} 

Return the location and dimensions of an instance of a specified image within the object's bitmap.

## {{< expand >}} Parameters {{< permerlink >}} {#abt_GetPictureLocationAbtImageProcessor__section.params} 

-   **picture**

    [Picture check](/user-guide/projects-and-project-items/project-items/picture-checks/) containing the baseline image\(s\) that the object's bitmap will be scanned for.

-   **rect**

    [TARect](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abt-object-classes/tarect) object specifying a rectangular active area in the object's bitmap. Scanning for matching images is limited to this active area.

-   **index**

    Index of the image of interest displayed within the active area, in case more than one matching image is discovered within it.

    Note that index numbering begins with 1. \(Default: 1\)


## {{< expand >}} Return Value {{< permerlink >}} {#abt_GetPictureLocationAbtImageProcessor__section.return} 

-   [TARect](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abt-object-classes/tarect) object representing the bounding rectangle ofthe found picture, and containing the following:

    -   left: Horizontal coordinate of left border of the bounding rectangle relative to the left side of the calling object.
    -   top: Vertical coordinate of top of the bounding rectangle relative to the top of the calling object.
    -   width: Width of the bounding rectangle.
    -   height: Height of the bounding rectangle.
    Note: all values are in pixels.

-   If the index-specified instance of a matching image is not found, return null.

## {{< expand >}} Notes {{< permerlink >}} {#abt_GetPictureLocationAbtImageProcessor__section_vwj_hjw_j4} 

-   As an [AbtImageProcessor](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtimageprocessor/) object represents the entire display; the returned left and top coordinates are relative to the left and top of screen, respectively.
-   This method is currently supported only by the C\# harness.



