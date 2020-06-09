--- 
title: "DoesDataSetExist"
linktitle: "DoesDataSetExist"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_DoesDataSetExist.html
---
keyword: [doesdatasetexist, abtdatasetmanagement doesdatasetexist, data set exist, existence of data set, check if data set exists]
---

# DoesDataSetExist

## Syntax

`int DoesDataSetExist(string path)`

## Description

Check whether a data set exists.

## Parameters

-   **path**

    String specifying a data set path \(see the name argument of the [use data set](use_data_set.html) built-in action\).


## Return Value

Return 0 if thedata set exists; otherwise, -1.

## Notes

-   If the data set you want to check against is created by harness code, only the name \(no path\) of it is necessary for path.
-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSetManagement](/TA_Automation/Topics/abt_AbtDataSetManagement.html)

**Previous topic:**[CreateDataSet](/TA_Automation/Topics/abt_CreateDataSet.html)

**Next topic:**[GetDataSet](/TA_Automation/Topics/abt_GetDataSet.html)

