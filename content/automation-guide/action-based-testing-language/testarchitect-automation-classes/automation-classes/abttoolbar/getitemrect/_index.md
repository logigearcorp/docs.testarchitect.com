--- 
title: "GetItemRect"
linktitle: "GetItemRect"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_GetItemRect_15.html
keywords: "getitemrect, abttoolbar getitemrect, bounding rectangle of toolbar item, bounding rectangle of item on toolbar, rectangle encircles toolbar item"
---

## Syntax

`long GetItemRect(int index, TARect rect)`

## Description

Retrieve the bounding rectangle of the specified toolbar item.

## Parameters

-   **index**

    Integer index specifying the item. Note that index numbering begins with 1.

-   ***rect***

    Returned [TARect](/TA_Automation/Topics/abt_TARect.html) object indicating the bounding rectangle of the item.


## Return Value

Return 0 if the call is successful; otherwise, -1..

**Parent topic:**[AbtToolBar](/TA_Automation/Topics/abt_AbtToolBar.html)

**Previous topic:**[GetItemCount](/TA_Automation/Topics/abt_GetItemCount_15.html)

**Next topic:**[GetItemStates](/TA_Automation/Topics/abt_GetItemStates_15.html)

