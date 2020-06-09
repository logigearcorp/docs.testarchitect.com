--- 
title: "GetItemStates"
linktitle: "GetItemStates"
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_GetItemState_6.html
keywords: "getitemstates, abtmenubar getitemstates, current states of menu item, menu item states"
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

**Parent topic:**[AbtMenuBar](/TA_Automation/Topics/abt_AbtMenuBar.html)

**Next topic:**[GetSelectedText](/TA_Automation/Topics/abt_GetSelectedText_6.html)

