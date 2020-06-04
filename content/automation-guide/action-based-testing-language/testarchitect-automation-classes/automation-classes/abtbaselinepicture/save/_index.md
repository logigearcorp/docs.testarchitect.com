--- 
title: "-"
linktitle: "Save"
weight: 2
aliases: 
    - /TA_Automation/Topics/abt_Save.html
---
keyword: [save, abtbaselinepicture save, save baseline image to file, export current baseline image to file, save as current baseline image]
---

# Save

## Syntax

`int Save(string location)`

## Description

Save the current baseline image to a file.

## Parameters

-   **location**

    String value indicating the local /network location to which the exported file will be saved.


## Return Value

Return 0 if the image is saved to a file successfully; otherwise return an error code \(see Notes\).

## Notes

-   This method is currently supported only by the C\# harness.
-   Possible errors returned:

    |Error code|Description|
    |----------|-----------|
    |0x8001000AL|Picture check does not exist.|
    |0x8001000BL|Baseline image does not exist.|
    |0x8001000CL|Required argument\(s\) are empty.|
    |0x8001000DL|Path of file does not exist.|
    |0x8001000EL|Unknown error encountered.|


**Parent topic:**[AbtBaselinePicture](/TA_Automation/Topics/abt_AbtBaselinePicture.html)

**Previous topic:**[GetName](/TA_Automation/Topics/abt_GetName_BaselinePicture.html)

