--- 
title: "InsertRow"
linktitle: "InsertRow"
description: "Syntax int InsertRow( AbtDataRow row, int index) Description Insert a row object into the data set. Parameters row AbtDataRow object specifying the data row to insert. index Integer value specifying ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/abt_InsertRow.html
keywords: "methods of abt, InsertRow, InsertRow (AbtDataSet), AbtDataSet, insertrow, abtdataset insertrow, insert row into dataset, add row at given index"
---

## Syntax

`int InsertRow([AbtDataRow](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatarow/) row, int index)`

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




