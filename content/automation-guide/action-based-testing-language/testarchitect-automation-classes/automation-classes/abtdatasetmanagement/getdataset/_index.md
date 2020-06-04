--- 
title: "-"
linktitle: "GetDataSet"
weight: 4
aliases: 
    - /TA_Automation/Topics/abt_GetDataSet.html
---
keyword: [getdataset, abtdatasetmanagement getdataset, data set content, obtain content of data set]
---

# GetDataSet

## Syntax

`AbtDataSet GetDataSet(String path)`

## Description

Retrieve data set content in the current project or supplier project. If variations of the data set exist, the returned variation is that which satisfies the runtime variation specification.

## Parameters

-   **path**

    String specifying a data set path.


## Return Value

If the specified data set is found, an [AbtDataSet](abt_AbtDataSet.html) object with the contents of the data set; otherwise, null.

## Notes

-   path parameter:
    -   dedicated data set: The full TA explorer path from the **Data** node must be specified, with forward slashes \(/\) delimiting each level of the hierarchy. For example: /Customer info/Customers
    -   inline data set: Only the name \(no path\) of the data set is necessary. For example: Customers.
-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSetManagement](/TA_Automation/Topics/abt_AbtDataSetManagement.html)

**Previous topic:**[DoesDataSetExist](/TA_Automation/Topics/abt_DoesDataSetExist.html)

