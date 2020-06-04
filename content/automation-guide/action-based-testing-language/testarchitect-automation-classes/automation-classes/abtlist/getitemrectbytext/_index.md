--- 
title: "-"
linktitle: "GetItemRectByText"
weight: 12
aliases: 
    - /TA_Automation/Topics/abt_GetItemRect_4.html
---
keyword: [getitemrectbytext, abtlist getitemrectbytext, get bounding rectangle of item list by value, get rectangle surrounding item with specified content]
---

# GetItemRectByText

## Syntax

`TARect GetItemRectByText (string text)`

## Description

Retrieve the bounding rectangle of a list item by its text content.

## Parameters

-   **text**

    String value specifying the text content ofthe list item.


## Return Value

[TARect](/images//Images/TA_Automation/Topics/abt_TARect.html) object representing the bounding rectangle ofthe item. The object contains the following elements:

-   left: Horizontal coordinate of left border of the bounding rectangle relative to the left side of the calling object.
-   top: Vertical coordinate of top of the bounding rectangle relative to the top of the calling object.
-   width: Width of the bounding rectangle.
-   height: Height of the bounding rectangle.

Note: all values are in pixels.

## Notes

-   This method is applicable to both ListBox and ListView controls.

**Parent topic:**[AbtList](/TA_Automation/Topics/abt_AbtList.html)

**Previous topic:**[GetItemRectByIndex](/TA_Automation/Topics/abt_GetItemRect_3.html)

**Next topic:**[GetItemStates](/TA_Automation/Topics/abt_GetItemStates_4.html)

