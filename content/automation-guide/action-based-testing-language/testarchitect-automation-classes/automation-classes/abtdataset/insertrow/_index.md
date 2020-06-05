--- 
title: "InsertRow"
linktitle: "InsertRow"
weight: 10
aliases: 
    - /TA_Automation/Topics/abt_InsertRow.html
---
keyword: [insertrow, abtdataset insertrow, insert row into dataset, add row at given index]
---

# InsertRow

## Syntax

`int InsertRow([AbtDataRow](abt_AbtDataRow.html) row, int index)`

## Description

Insert a row object into the data set.

## Parameters

-   **row**

    AbtDataRow object specifying the data row to insert.

-   **index**

    Integer value specifying the row before which the insertion is to be made. Row indexes start from zero, proceeding from top to bottom.


## Return Value

Return 0 if theexecutionis successful; otherwise, -1.

## Notes

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSet](/TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[InsertColumn](/TA_Automation/Topics/abt_InsertColumn.html)

**Next topic:**[ReFillData](/TA_Automation/Topics/abt_ReFillData.html)

