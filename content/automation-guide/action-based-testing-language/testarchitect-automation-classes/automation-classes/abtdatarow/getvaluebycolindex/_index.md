--- 
title: "GetValueByColIndex"
linktitle: "GetValueByColIndex"
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_GetValueByColIndex.html
keywords: "getvaluebycolindex, abtdatarow getvaluebycolindex, value of cell in selected row by column index, value of cell at intersection of selected row and column at given index"
---

## Syntax

`String GetValueByColIndex(int index)`

## Description

Retrieve contents of a cell in the data set row; the cell is specified by its column index.

## Parameters

-   **index**

    Integer index of the column. Column indexes start from zero, proceeding from left to right.


## Return Value

String indicating the value of the specified data set cell. If the call is unsuccessful, returnnull..

**Parent topic:**[AbtDataRow](/TA_Automation/Topics/abt_AbtDataRow.html)

**Next topic:**[GetValueByColName](/TA_Automation/Topics/abt_GetValueByColName.html)

