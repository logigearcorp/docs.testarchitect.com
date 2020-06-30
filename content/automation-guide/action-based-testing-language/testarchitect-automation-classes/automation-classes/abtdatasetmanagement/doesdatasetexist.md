--- 
title: "DoesDataSetExist"
linktitle: "DoesDataSetExist"
description: "Syntax int DoesDataSetExist(string path) Description Check whether a data set exists. Parameters path String specifying a data set path (see the name argument of the use data set built-in action). ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_DoesDataSetExist.html
keywords: "methods of abt, DoesDataSetExist, DoesDataSetExist (AbtDataSetManagement), AbtDataSetManagement, doesdatasetexist, abtdatasetmanagement doesdatasetexist, data set exist, existence of data set, check if data set exists"
---

## Syntax

`int DoesDataSetExist(string path)`

## Description

Check whether a data set exists.

## Parameters

-   **path**

    String specifying a data set path \(see the name argument of the [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) built-in action\).


## Return Value

Return 0 if thedata set exists; otherwise, -1.

## Notes

-   If the data set you want to check against is created by harness code, only the name \(no path\) of it is necessary for path.
-   This method is currently supported only by the C\# harness.




