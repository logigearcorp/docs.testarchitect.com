--- 
title: "GetColumnName"
linktitle: "GetColumnName"
weight: 7
aliases: 
    - /TA_Automation/Topics/abt_GetColumnName.html
keywords: "getcolumnname, abtdataset getcolumnname, get column header, column name"
---

## Syntax

`String GetColumnName(int index)`

## Description

Retrieve the header name of the specified column of the object.

## Parameters

-   **index**

    Integer index of the column. Column indexes start from zero, proceeding from left to right.


## Return Value

String value indicating the column name. If the call is unsuccessful, returnnull.

## Notes

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSet](/TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[GetColumnCount](/TA_Automation/Topics/abt_GetColumnCount.html)

**Next topic:**[GetData](/TA_Automation/Topics/abt_GetData.html)

