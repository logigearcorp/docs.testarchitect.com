--- 
title: "InsertRow"
linktitle: "InsertRow"
aliases: 
    - /TA_Automation/Topics/abt_InsertRow.html
---
# InsertRow {#reference_t2g_3bw_gq .reference}

## Syntax

`int InsertRow([AbtDataRow](abt_AbtDataRow.html) row, int index)`

## Description {#section.desc .section}

Insert a row object into the data set.

## Parameters {#section.params .section}

row
:   AbtDataRow object specifying the data row to insert.

index
:   Integer value specifying the row before which the insertion is to be made. Row indexes start from zero, proceeding from top to bottom.

## Return Value {#section.return .section}

Return 0 if theexecutionis successful; otherwise, -1.

## Notes { .section}

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSet](../../TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[InsertColumn](../../TA_Automation/Topics/abt_InsertColumn.html)

**Next topic:**[ReFillData](../../TA_Automation/Topics/abt_ReFillData.html)

