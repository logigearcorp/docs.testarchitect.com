--- 
title: "-"
linktitle: "SetValueByColIndex"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_SetValueByColIndex.html
---
keyword: [setvaluebycolindex, abtdatarow setvaluebycolindex, set value for cell in selected row by column index, assign value to cell in selected row by column index]
---

# SetValueByColIndex

## Syntax

`int SetValueByColIndex(int index, String value)`

## Description

Set the value for a cell in the data set row; ; the cell is specified by its column index.

## Parameters

-   **index**

    Integer index of the column. Column indexes start from zero, proceeding from left to right.

-   **value**

    String value specifying the cell content to set.


## Return Value

Return 0 if theexecutionis successful; otherwise, -1.

**Parent topic:**[AbtDataRow](/TA_Automation/Topics/abt_AbtDataRow.html)

**Previous topic:**[GetValueByColName](/TA_Automation/Topics/abt_GetValueByColName.html)

**Next topic:**[SetValueByColName](/TA_Automation/Topics/abt_SetValueByColName.html)

