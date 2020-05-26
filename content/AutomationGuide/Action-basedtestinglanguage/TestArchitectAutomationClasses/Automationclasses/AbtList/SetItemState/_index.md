--- 
title: "SetItemState"
linktitle: "SetItemState"
weight: 21
aliases: 
    - /TA_Automation/Topics/abt_SetItemState_3.html
---
# SetItemState {#abt_SetItemState .reference}

## Syntax

`long SetItemState(int index, TAItemState status)`

## Description {#section.desc .section}

Set the state of a specified item or its check box control, if any, in a list control.

## Parameters {#section.params .section}

index
:   Integer value specifying the index of the item within thelist control. Note that index numbering begins with 1.

status
:   [TAItemState](../../reuse/../TA_Automation/Topics/abt_TAItemState.html) value specifying the item state to set.

:   Allowable values are:

    -   CHECKED
    -   UNCHECKED
    -   DIMMED
    -   SELECTED
    -   UNSELECTED

## Return Value {#section.return .section}

Return 0 if the call is successful; otherwise, -1..

## Notes { .section}

-   This method is applicable to both ListBox and ListView controls.

**Parent topic:**[AbtList](../../TA_Automation/Topics/abt_AbtList.html)

**Previous topic:**[SelectColumn](../../TA_Automation/Topics/abt_SelectColumn_3.html)

