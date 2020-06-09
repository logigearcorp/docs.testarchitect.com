--- 
title: "SelectByIndices"
linktitle: "SelectByIndices"
weight: 17
aliases: 
    - /TA_Automation/Topics/abt_Select_3.html
keywords: "selectbyindices, abtlist selectbyindices, select multiple items in list by indices, pick up more than one items in list by indexes"
---

## Syntax

`long SelectByIndices (int[] items)`

## Description

Select multiple items in the list control, as specified by their indexes.

## Parameters

-   **items**

    Array of integers, each specifying the index of an item in the list control. Note that index numbering begins with 1.


## Return Value

Return 0 if the call is successful; otherwise, -1..

## Notes

-   This method is applicable to both ListBox and ListView controls.

**Parent topic:**[AbtList](/TA_Automation/Topics/abt_AbtList.html)

**Previous topic:**[ScrollItemIntoViewByText](/TA_Automation/Topics/abt_ScrollItemIntoView_4.html)

**Next topic:**[Select](/TA_Automation/Topics/abt_Select_4.html)

