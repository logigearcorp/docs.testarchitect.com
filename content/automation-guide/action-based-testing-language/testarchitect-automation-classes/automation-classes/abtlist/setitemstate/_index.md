--- 
title: "SetItemState"
linktitle: "SetItemState"
description: "Syntax long SetItemState(int index, TAItemState status) Description Set the state of a specified item or its check box control, if any, in a list control. Parameters index Integer value specifying the ..."
weight: 21
aliases: 
    - /TA_Automation/Topics/abt_SetItemState_3.html
keywords: "methods of abt, SetItemState, SetItemState (AbtList), AbtList, setitemstate, abtlist setitemstate, set state of item in list, assign property value to list item"
---

## Syntax

`long SetItemState(int index, TAItemState status)`

## Description

Set the state of a specified item or its check box control, if any, in a list control.

## Parameters

-   **index**

    Integer value specifying the index of the item within thelist control. Note that index numbering begins with 1.

-   **status**

    [TAItemState](/reuse/../TA_Automation/Topics/abt_TAItemState.html) value specifying the item state to set.

    Allowable values are:

    -   CHECKED
    -   UNCHECKED
    -   DIMMED
    -   SELECTED
    -   UNSELECTED

## Return Value

Return 0 if the call is successful; otherwise, -1..

## Notes

-   This method is applicable to both ListBox and ListView controls.



