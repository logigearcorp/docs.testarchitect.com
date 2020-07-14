--- 
title: "GetItemRect"
linktitle: "GetItemRect"
description: "Syntax long GetItemRect(int index, TARect rect) Description Retrieve the bounding rectangle of the specified toolbar item. Parameters index Integer index specifying the item. Note that index numbering ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_GetItemRect_15.html
keywords: "methods of abt, GetItemRect, GetItemRect (AbtToolBar), AbtToolBar, getitemrect, abttoolbar getitemrect, bounding rectangle of toolbar item, bounding rectangle of item on toolbar, rectangle encircles toolbar item"
---

## Syntax

`long GetItemRect(int index, TARect rect)`

## Description {{< permerlink >}} {#abt_GetItemRect_toolbar__section.desc} 

Retrieve the bounding rectangle of the specified toolbar item.

## Parameters

-   **index**

    Integer index specifying the item. Note that index numbering begins with 1.

-   ***rect***

    Returned [TARect](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abt-object-classes/tarect) object indicating the bounding rectangle of the item.


## Return Value

Return 0 if the call is successful; otherwise, -1..




