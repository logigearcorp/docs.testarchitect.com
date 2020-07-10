--- 
title: "GetItemRectByText"
linktitle: "GetItemRectByText"
description: "Syntax TARect GetItemRectByText (string text) Description Retrieve the bounding rectangle of a list item by its text content. Parameters text String value specifying the text content of the list item. ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/abt_GetItemRect_4.html
keywords: "methods of abt, GetItemRectByText, GetItemRectByText (AbtList), AbtList, getitemrectbytext, abtlist getitemrectbytext, get bounding rectangle of item list by value, get rectangle surrounding item with specified content"
---

## Syntax

`TARect GetItemRectByText (string text)`

## {{< expand >}} Description {{< permerlink >}} {#abt_GetItemRectByText__section.desc} 

Retrieve the bounding rectangle of a list item by its text content.

## {{< expand >}} Parameters {{< permerlink >}} {#abt_GetItemRectByText__section.params} 

-   **text**

    String value specifying the text content ofthe list item.


## {{< expand >}} Return Value

[TARect](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abt-object-classes/tarect) object representing the bounding rectangle ofthe item. The object contains the following elements:

-   left: Horizontal coordinate of left border of the bounding rectangle relative to the left side of the calling object.
-   top: Vertical coordinate of top of the bounding rectangle relative to the top of the calling object.
-   width: Width of the bounding rectangle.
-   height: Height of the bounding rectangle.

Note: all values are in pixels.

## {{< expand >}} Notes

-   This method is applicable to both ListBox and ListView controls.




