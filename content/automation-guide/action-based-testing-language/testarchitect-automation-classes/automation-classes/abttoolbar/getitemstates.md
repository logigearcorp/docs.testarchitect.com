--- 
title: "GetItemStates"
linktitle: "GetItemStates"
description: "Syntax TAItemState GetItemStates(int index) Description Retrieve the current state(s) of an item in the toolbar. Parameters index Integer index of the item in the toolbar. Note that index numbering ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/abt_GetItemStates_15.html
keywords: "methods of abt, GetItemStates, GetItemStates (AbtToolBar), AbtToolBar, getitemstates, abttoolbar getitemstates, get current states of specified item on toolbar, obtain current states of given toolbar item"
---

## Syntax

`TAItemState GetItemStates(int index)`

## Description

Retrieve the current state\(s\) of an item in the toolbar.

## Parameters

-   **index**

    Integer index of the item in the toolbar. Note that index numbering begins with 1.


## Return Value

TAItemState object specifying a comma-delimited list of all of the current states of the item. Possible listed values are:

-   ENABLED or DISABLED
-   SELECTED or UNSELECTED




