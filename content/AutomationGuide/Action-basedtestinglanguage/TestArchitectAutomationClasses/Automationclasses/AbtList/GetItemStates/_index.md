--- 
title: "GetItemStates"
linktitle: "GetItemStates"
weight: 13
aliases: 
    - /TA_Automation/Topics/abt_GetItemStates_4.html
---
# GetItemStates {#abt_GetItemStatesString .reference}

## Syntax

`TAItemState GetItemStates(int index)`

## Description {#section.desc .section}

Retrieve the current state\(s\) of an item in the list control.

## Parameters {#section.params .section}

index
:   Integer index of item in the list control. Note that index numbering begins with 1.

## Return Value {#section.return .section}

TAItemState object specifying a comma-delimited list of all of the current states of the item. Possible listed values are:

-   CHECKED or UNCHECKED or DIMMED
-   SELECTED or UNSELECTED

## Notes { .section}

-   This method is applicable to both ListBox and ListView controls.

**Parent topic:**[AbtList](../../TA_Automation/Topics/abt_AbtList.html)

**Previous topic:**[GetItemRectByText](../../TA_Automation/Topics/abt_GetItemRect_4.html)

**Next topic:**[GetSelectedItems](../../TA_Automation/Topics/abt_GetSelectedItems_3.html)

