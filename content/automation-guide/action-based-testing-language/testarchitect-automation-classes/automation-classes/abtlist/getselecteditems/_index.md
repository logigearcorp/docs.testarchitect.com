--- 
title: "GetSelectedItems"
linktitle: "GetSelectedItems"
weight: 14
aliases: 
    - /TA_Automation/Topics/abt_GetSelectedItems_3.html
---
keyword: [getselecteditems, abtlist getselecteditems, contents of selected items in list, obtain values of selected items in list]
---

# GetSelectedItems

## Syntax

`string[] GetSelectedItems( string delim)`

## Description

Retrieve the text content of each of the the selected items in the list view.

## Parameters

-   **delim**

    String value used within each returned string array element to delimit the values of each field of the returned list item.


## Return Value

Returns an array of strings, each containing the text content of a selected list item. Field values within each array element are separated by the specified delimiter.

## Notes

-   This method is applicable to both ListBox and ListView controls.

**Parent topic:**[AbtList](/TA_Automation/Topics/abt_AbtList.html)

**Previous topic:**[GetItemStates](/TA_Automation/Topics/abt_GetItemStates_4.html)

**Next topic:**[ScrollItemIntoViewByIndex](/TA_Automation/Topics/abt_ScrollItemIntoView_3.html)

