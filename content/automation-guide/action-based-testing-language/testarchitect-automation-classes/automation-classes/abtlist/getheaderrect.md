--- 
title: "GetHeaderRect"
linktitle: "GetHeaderRect"
description: "Syntax long GetHeaderRect(int index, TARect rect) Description Retrieve the bounding rectangle of the column header by its index. Parameters index Integer index of column in the object. Note that index ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/abt_GetHeaderRect_3.html
keywords: "methods of abt, GetHeaderRect, GetHeaderRect (AbtList), AbtList, getheaderrect, abtlist getheaderrect, bounding rectangle of column header at index, rectangle covering column title based on index"
---

## Syntax

`long GetHeaderRect(int index, TARect rect)`

## Description

Retrieve the bounding rectangle of the column header by its index.

## Parameters

-   **index**

    Integer index of column in the object. Note that index numbering begins with 1.

-   ***rect***

    Returned TARect value specifying the bounding rectangle of the column header.


## Return Value

Return 0 if the call is successful; otherwise, -1..

## Notes

-   This method is applicable to ListView controls only.




