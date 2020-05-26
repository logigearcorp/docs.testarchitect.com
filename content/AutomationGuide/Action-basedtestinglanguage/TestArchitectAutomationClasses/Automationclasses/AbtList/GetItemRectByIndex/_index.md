--- 
title: "GetItemRectByIndex"
linktitle: "GetItemRectByIndex"
weight: 11
aliases: 
    - /TA_Automation/Topics/abt_GetItemRect_3.html
---
# GetItemRectByIndex {#abt_GetItemRectByIndex .reference}

## Syntax

`TARect GetItemRectByIndex (int index)`

## Description {#section.desc .section}

Retrieve the bounding rectangle of a list item by its index.

## Parameters {#section.params .section}

index
:   Index of item in the list control. Note that index numbering begins with 1.

## Return Value {#section.return .section}

[TARect](../../reuse/../TA_Automation/Topics/abt_TARect.html) object representing the bounding rectangle ofthe item. The object contains the following elements:

-   left: Horizontal coordinate of left border of the bounding rectangle relative to the left side of the calling object.
-   top: Vertical coordinate of top of the bounding rectangle relative to the top of the calling object.
-   width: Width of the bounding rectangle.
-   height: Height of the bounding rectangle.

Note: all values are in pixels.

## Notes { .section}

-   This method is applicable to both ListBox and ListView controls.

**Parent topic:**[AbtList](../../TA_Automation/Topics/abt_AbtList.html)

**Previous topic:**[GetItemIndex](../../TA_Automation/Topics/abt_GetItemIndex_3.html)

**Next topic:**[GetItemRectByText](../../TA_Automation/Topics/abt_GetItemRect_4.html)

