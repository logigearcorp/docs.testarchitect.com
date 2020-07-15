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

`List <{{<link title="AbtDataRow" link="/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatarow" >}}> GetData(string filterCriteria)`

## Description  

Retrieve from the data set object the list of data rows that satisfy the specified filter criteria.

## Parameters  

-   **filterCriteria**

    String value specifying the filter criteria. \(For format, see the criterion argument of [filter](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/filter) built-in action\).


## Return Value

Array of AbtDataRow objects. If the call is unsuccessful, returnnull.

## Notes

-   This method is currently supported only by the C\# harness.




