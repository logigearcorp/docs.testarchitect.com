--- 
title: "SetValueByColIndex"
linktitle: "SetValueByColIndex"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_SetValueByColIndex.html
---
# SetValueByColIndex {#reference_ofn_z1w_gq .reference}

## Syntax

`int SetValueByColIndex(int index, String value)`

## Description {#section.desc .section}

Set the value for a cell in the data set row; ; the cell is specified by its column index.

## Parameters {#section.params .section}

index
:   Integer index of the column. Column indexes start from zero, proceeding from left to right.

value
:   String value specifying the cell content to set.

## Return Value {#section.return .section}

Return 0 if theexecutionis successful; otherwise, -1.

**Parent topic:**[AbtDataRow](../../TA_Automation/Topics/abt_AbtDataRow.html)

**Previous topic:**[GetValueByColName](../../TA_Automation/Topics/abt_GetValueByColName.html)

**Next topic:**[SetValueByColName](../../TA_Automation/Topics/abt_SetValueByColName.html)

