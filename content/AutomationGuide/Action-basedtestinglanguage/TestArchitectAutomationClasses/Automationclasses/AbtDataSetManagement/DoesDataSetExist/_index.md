--- 
title: "DoesDataSetExist"
linktitle: "DoesDataSetExist"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_DoesDataSetExist.html
---
# DoesDataSetExist {#reference_zdm_2bw_gq .reference}

## Syntax {#section.syntax .section}

`int DoesDataSetExist(string path)`

## Description {#section.desc .section}

Check whether a data set exists.

## Parameters {#section.params .section}

path
:   String specifying a data set path \(see the name argument of the [use data set](bia_use_data_set.html) built-in action\).

## Return Value {#section.return .section}

Return 0 if thedata set exists; otherwise, -1.

## Notes { .section}

-   If the data set you want to check against is created by harness code, only the name \(no path\) of it is necessary for path.
-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSetManagement](../../TA_Automation/Topics/abt_AbtDataSetManagement.html)

**Previous topic:**[CreateDataSet](../../TA_Automation/Topics/abt_CreateDataSet.html)

**Next topic:**[GetDataSet](../../TA_Automation/Topics/abt_GetDataSet.html)

