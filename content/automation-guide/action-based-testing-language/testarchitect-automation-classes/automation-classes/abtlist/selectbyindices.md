--- 
title: "SelectByIndices"
linktitle: "SelectByIndices"
description: "Syntax long SelectByIndices (int[] items) Description Select multiple items in the list control, as specified by their indexes. Parameters items Array of integers, each specifying the index of an item ..."
weight: 17
aliases: 
    - /TA_Automation/Topics/abt_Select_3.html
keywords: "methods of abt, SelectByIndices, SelectByIndices (AbtList), AbtList, selectbyindices, abtlist selectbyindices, select multiple items in list by indices, pick up more than one items in list by indexes"
---

## Syntax

`long SelectByIndices (int[] items)`

## Description {{< permerlink >}} {#abt_SelectByIndecies_list__section.desc} 

Select multiple items in the list control, as specified by their indexes.

## Parameters {{< permerlink >}} {#abt_SelectByIndecies_list__section.params} 

-   **items**

    Array of integers, each specifying the index of an item in the list control. Note that index numbering begins with 1.


## Return Value {{< permerlink >}} {#abt_SelectByIndecies_list__section.return} 

Return 0 if the call is successful; otherwise, -1..

## Notes

-   This method is applicable to both ListBox and ListView controls.




