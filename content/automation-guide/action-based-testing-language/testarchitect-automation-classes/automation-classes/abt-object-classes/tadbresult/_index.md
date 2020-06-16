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

Object that may contain a single string value or a dataset. Typically created by the [ExecSqlCommand](/TA_Automation/Topics/abt_Execute_Sql_Command.html) method.

## Methods

-   **int GetType\(\)**

    Get type of TADBResult. Return TABLE\_TYPE\(=2\) constant if returned is table type; otherwise SINGLE\_TYPE\(=1\) constant.

-   **string GetSingleResult\(\)**

    Return result as string. If any error happens, return null.

-   **[AbtDataset](/TA_Automation/Topics/abt_AbtDataSet.html) GetDataSetResult\(\)**

    Return result as [TADataset](/TA_Automation/Topics/abt_AbtDataSet.html). If any error happens, return null


## Notes

-   This class and its associated methods are currently supported only by the C\# harness.




