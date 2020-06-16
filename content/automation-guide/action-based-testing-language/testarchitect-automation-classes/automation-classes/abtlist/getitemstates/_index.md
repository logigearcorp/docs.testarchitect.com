--- 
title: "GetItemStates"
linktitle: "GetItemStates"
description: "Syntax TAItemState GetItemStates(int index) Description Retrieve the current state(s) of an item in the list control. Parameters index Integer index of item in the list control. Note that index ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/abt_GetItemStates_4.html
keywords: "methods of abt, GetItemStates, GetItemStates (AbtList), AbtList, getitemstates, abtlist getitemstates, get states of item in list, obtain property values of item in list"
---

## Syntax

`TAItemState GetItemStates(int index)`

## Description

Retrieve the current state\(s\) of an item in the list control.

## Parameters

-   **index**

    Integer index of item in the list control. Note that index numbering begins with 1.


## Return Value

TAItemState object specifying a comma-delimited list of all of the current states of the item. Possible listed values are:

-   CHECKED or UNCHECKED or DIMMED
-   SELECTED or UNSELECTED

## Notes

-   This method is applicable to both ListBox and ListView controls.




