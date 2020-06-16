--- 
title: "InsertColumn"
linktitle: "InsertColumn"
description: "Syntax int InsertColumn(int index, string colName) Description Insert a new column into the data set. Parameters index Integer value specifying the column before which the insertion is to be made. ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/abt_InsertColumn.html
keywords: "methods of abt, InsertColumn, InsertColumn (AbtDataSet), AbtDataSet, insertcolumn, abtdataset insertcolumn, insert column into data set, add column at given index"
---

## Syntax

`int InsertColumn(int index, string colName)`

## Description

Insert a new column into the data set.

## Parameters

-   **index**

    Integer value specifying the column before which the insertion is to be made. Column indexes start from zero, proceeding from left to right.

-   **colName**

    String value specifying the column header text.


## Return Value

Return 0 if theexecutionis successful; otherwise, -1.

## Notes

-   This method is currently supported only by the C\# harness.




