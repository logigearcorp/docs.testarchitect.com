--- 
title: "GetSelectedItems"
linktitle: "GetSelectedItems"
description: "Syntax string[] GetSelectedItems( string delim) Description Retrieve the text content of each of the the selected items in the list view. Parameters delim String value used within each returned string ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/abt_GetSelectedItems_3.html
keywords: "methods of abt, GetSelectedItems, GetSelectedItems (AbtList), AbtList, getselecteditems, abtlist getselecteditems, contents of selected items in list, obtain values of selected items in list"
---

## Syntax

`string[] GetSelectedItems( string delim)`

## Description {{< permerlink >}} {#abt_GetSelectedItems__section.desc} 

Retrieve the text content of each of the the selected items in the list view.

## Parameters {{< permerlink >}} {#abt_GetSelectedItems__section.params} 

-   **delim**

    String value used within each returned string array element to delimit the values of each field of the returned list item.


## Return Value {{< permerlink >}} {#abt_GetSelectedItems__section.return} 

Returns an array of strings, each containing the text content of a selected list item. Field values within each array element are separated by the specified delimiter.

## Notes

-   This method is applicable to both ListBox and ListView controls.




