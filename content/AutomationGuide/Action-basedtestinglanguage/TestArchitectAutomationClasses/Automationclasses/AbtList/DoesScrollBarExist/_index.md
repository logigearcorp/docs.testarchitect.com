--- 
title: "DoesScrollBarExist"
linktitle: "DoesScrollBarExist"
weight: 4
aliases: 
    - /TA_Automation/Topics/abt_DoesScrollBarExist_3.html
---
# DoesScrollBarExist {#abt_DoesScrollBarExist_list .reference}

## Syntax

`Boolean DoesScrollBarExist(TAScrollBarType scrollbarType)`

## Description {#section.desc .section}

Determine whether a scroll bar of the specified type exists.

## Parameters {#section.params .section}

scrollbarType
:   TAScrollBarType object specifying the scroll bar type.

:   Allowable values are:

    -   HORIZONTAL
    -   VERTICAL

## Return Value {#section.return .section}

Return TRUE ifthe scroll bar exists; otherwise, FALSE.

## Notes { .section}

-   This method is applicable to both ListBox and ListView controls.

**Parent topic:**[AbtList](../../TA_Automation/Topics/abt_AbtList.html)

**Previous topic:**[DoesItemExistByText](../../TA_Automation/Topics/abt_DoesItemExist_3.html)

**Next topic:**[GetColumnCount](../../TA_Automation/Topics/abt_GetColumnCount_3.html)

