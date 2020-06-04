--- 
title: "-"
linktitle: "GetItemStates"
weight: 4
aliases: 
    - /TA_Automation/Topics/abt_GetItemStates_15.html
---
keyword: [getitemstates, abttoolbar getitemstates, get current states of specified item on toolbar, obtain current states of given toolbar item]
---

# GetItemStates

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

**Parent topic:**[AbtToolBar](/TA_Automation/Topics/abt_AbtToolBar.html)

**Previous topic:**[GetItemRect](/TA_Automation/Topics/abt_GetItemRect_15.html)

**Next topic:**[GetSelectedIndex](/TA_Automation/Topics/abt_GetSelectedIndex_15.html)

