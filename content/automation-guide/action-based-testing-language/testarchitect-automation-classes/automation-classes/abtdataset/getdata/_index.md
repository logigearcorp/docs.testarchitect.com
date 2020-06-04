--- 
title: "-"
linktitle: "GetData"
weight: 8
aliases: 
    - /TA_Automation/Topics/abt_GetData.html
---
keyword: [get data rows based on criteria, filter data]
---

# GetData

## Syntax

`List <[AbtDataRow](abt_AbtDataRow.html)> GetData(string filterCriteria)`

## Description

Retrieve from the data set object the list of data rows that satisfy the specified filter criteria.

## Parameters

-   **filterCriteria**

    String value specifying the filter criteria. \(For format, see the criterion argument of [filter](bia_filter.html) built-in action\).


## Return Value

Array of AbtDataRow objects. If the call is unsuccessful, returnnull.

## Notes

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSet](/TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[GetColumnName](/TA_Automation/Topics/abt_GetColumnName.html)

**Next topic:**[InsertColumn](/TA_Automation/Topics/abt_InsertColumn.html)

