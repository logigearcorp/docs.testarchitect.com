--- 
title: "TADBResult"
linktitle: "TADBResult"
description: "Description Object that may contain a single string value or a dataset. Typically created by the ExecSqlCommand method. Methods int GetType() Get type of TADBResult. Return TABLE_TYPE(=2) constant if ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/abt_TADBResult.html
keywords: "constants of abt, TADBResult, TADBResult (constants), tadbresult, get result returned from execsqlcommand, retrieve query result"
---

## Description

Object that may contain a single string value or a dataset. Typically created by the [ExecSqlCommand](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatabase/execsqlcommand) method.

## Methods

-   **int GetType\(\)**

    Get type of TADBResult. Return TABLE\_TYPE\(=2\) constant if returned is table type; otherwise SINGLE\_TYPE\(=1\) constant.

-   **string GetSingleResult\(\)**

    Return result as string. If any error happens, return null.

-   **[AbtDataset](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdataset/) GetDataSetResult\(\)**

    Return result as [TADataset](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdataset/). If any error happens, return null


## Notes

-   This class and its associated methods are currently supported only by the C\# harness.




