--- 
title: "GetItemRectByIndex"
linktitle: "GetItemRectByIndex"
description: "Syntax TARect GetItemRectByIndex (int index) Description Retrieve the bounding rectangle of a list item by its index. Parameters index Index of item in the list control. Note that index numbering ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/abt_GetItemRect_3.html
keywords: "methods of abt, GetItemRectByIndex, GetItemRectByIndex (AbtList), AbtList, getitemrectbyindex, abtlist getitemrectbyindex, get bounding rectangle of item list by index, rectangle covering item using index"
---

## Syntax

`TARect GetItemRectByIndex (int index)`

## Description {{< permerlink >}} {#abt_GetItemRectByIndex__section.desc} 

Retrieve the bounding rectangle of a list item by its index.

## Parameters {{< permerlink >}} {#abt_GetItemRectByIndex__section.params} 

-   **index**

    Index of item in the list control. Note that index numbering begins with 1.


## Return Value {{< permerlink >}} {#abt_GetItemRectByIndex__section.return} 

[TARect](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abt-object-classes/tarect) object representing the bounding rectangle ofthe item. The object contains the following elements:

-   left: Horizontal coordinate of left border of the bounding rectangle relative to the left side of the calling object.
-   top: Vertical coordinate of top of the bounding rectangle relative to the top of the calling object.
-   width: Width of the bounding rectangle.
-   height: Height of the bounding rectangle.

Note: all values are in pixels.

## Notes

-   This method is applicable to both ListBox and ListView controls.




