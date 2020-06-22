--- 
title: "GetItemStates"
linktitle: "GetItemStates"
description: "Syntax TAItemState GetItemStates(string itemPath) Description Retrieve the current state(s) of a menu item in the menu bar. Parameters itemPath String specifying the path to the menu item. (Use arrow ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_GetItemState_6.html
keywords: "methods of abt, GetItemStates, GetItemStates (AbtMenuBar), AbtMenuBar, getitemstates, abtmenubar getitemstates, current states of menu item, menu item states"
---

## Syntax

`TAItemState GetItemStates(string itemPath)`

## Description

Retrieve the current state\(s\) of a menu item in the menu bar.

## Parameters

-   **itemPath**

    String specifying the path to the menu item. \(Use arrow symbols \( -\> \) as delimiters between menu items.\)


## Return Value

TAItemState object specifying a comma-delimited list of all of the current states of the item. Possible listed values are:

-   ENABLED or DISABLED
-   SELECTED or UNSELECTED



