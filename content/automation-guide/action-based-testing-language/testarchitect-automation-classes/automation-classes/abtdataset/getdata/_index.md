--- 
title: "GetData"
linktitle: "GetData"
description: "Syntax List &lt; AbtDataRow &gt; GetData(string filterCriteria) Description Retrieve from the data set object the list of data rows that satisfy the specified filter criteria. Parameters filterCriteria ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/abt_GetData.html
keywords: "methods of abt, GetData, GetData (AbtDataSet), AbtDataSet, get data rows based on criteria, filter data"
---

## Syntax

`List <[AbtDataRow](/TA_Automation/Topics/abt_AbtDataRow.html)> GetData(string filterCriteria)`

## Description

Retrieve from the data set object the list of data rows that satisfy the specified filter criteria.

## Parameters

-   **filterCriteria**

    String value specifying the filter criteria. \(For format, see the criterion argument of [filter](/TA_Automation/Topics/bia_filter.html) built-in action\).


## Return Value

Array of AbtDataRow objects. If the call is unsuccessful, returnnull.

## Notes

-   This method is currently supported only by the C\# harness.




