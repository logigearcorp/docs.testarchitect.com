--- 
title: "InsertColumn"
linktitle: "InsertColumn"
aliases: 
    - /TA_Automation/Topics/abt_InsertColumn.html
---
# InsertColumn {#reference_hsk_hbw_gq .reference}

## Syntax

`int InsertColumn(int index, string colName)`

## Description {#section.desc .section}

Insert a new column into the data set.

## Parameters {#section.params .section}

index
:   Integer value specifying the column before which the insertion is to be made. Column indexes start from zero, proceeding from left to right.

colName
:   String value specifying the column header text.

## Return Value {#section.return .section}

Return 0 if theexecutionis successful; otherwise, -1.

## Notes { .section}

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSet](../../TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[GetData](../../TA_Automation/Topics/abt_GetData.html)

**Next topic:**[InsertRow](../../TA_Automation/Topics/abt_InsertRow.html)

