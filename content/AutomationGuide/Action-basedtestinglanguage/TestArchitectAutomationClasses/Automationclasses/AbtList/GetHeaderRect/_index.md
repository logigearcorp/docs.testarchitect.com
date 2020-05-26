--- 
title: "GetHeaderRect"
linktitle: "GetHeaderRect"
weight: 7
aliases: 
    - /TA_Automation/Topics/abt_GetHeaderRect_3.html
---
# GetHeaderRect {#abt_GetHeaderRect .reference}

## Syntax

`long GetHeaderRect(int index, TARect rect)`

## Description {#section.desc .section}

Retrieve the bounding rectangle of the column header by its index.

## Parameters {#section.params .section}

index
:   Integer index of column in the object. Note that index numbering begins with 1.

*rect*
:   Returned TARect value specifying the bounding rectangle of the column header.

## Return Value {#section.return .section}

Return 0 if the call is successful; otherwise, -1..

## Notes { .section}

-   This method is applicable to ListView controls only.

**Parent topic:**[AbtList](../../TA_Automation/Topics/abt_AbtList.html)

**Previous topic:**[GetHeaderName](../../TA_Automation/Topics/abt_GetHeaderName_3.html)

**Next topic:**[GetItemText](../../TA_Automation/Topics/abt_GetItemText_3.html)

