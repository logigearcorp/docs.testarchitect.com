--- 
title: "DoesScrollBarExist"
linktitle: "DoesScrollBarExist"
description: "Syntax Boolean DoesScrollBarExist(TAScrollBarType scrollbarType) Description Determine whether a scroll bar of the specified type exists. Parameters scrollbarType TAScrollBarType object specifying the ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/abt_DoesScrollBarExist_3.html
keywords: "methods of abt, DoesScrollBarExist, DoesScrollBarExist (AbtList), AbtList, doesscrollbarexist, abtlist doesscrollbarexist, scroll bar exists in list, list has scroll bar"
---

## Syntax

`Boolean DoesScrollBarExist(TAScrollBarType scrollbarType)`

## Description

Determine whether a scroll bar of the specified type exists.

## Parameters

-   **scrollbarType**

    TAScrollBarType object specifying the scroll bar type.

    Allowable values are:

    -   HORIZONTAL
    -   VERTICAL

## Return Value

Return TRUE ifthe scroll bar exists; otherwise, FALSE.

## Notes

-   This method is applicable to both ListBox and ListView controls.




