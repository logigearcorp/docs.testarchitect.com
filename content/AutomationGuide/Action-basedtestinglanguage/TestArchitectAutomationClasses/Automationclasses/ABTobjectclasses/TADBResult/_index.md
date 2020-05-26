--- 
title: "TADBResult"
linktitle: "TADBResult"
weight: 2
aliases: 
    - /TA_Automation/Topics/abt_TADBResult.html
---
# TADBResult {#abt_TADBResult .reference}

## Description { .section}

Object that may contain a single string value or a dataset. Typically created by the [ExecSqlCommand](abt_Execute_Sql_Command.html) method.

## Methods

int GetType\(\)
:   Get type of TADBResult. Return TABLE\_TYPE\(=2\) constant if returned is table type; otherwise SINGLE\_TYPE\(=1\) constant.

string GetSingleResult\(\)
:   Return result as string. If any error happens, return null.

[AbtDataset](abt_AbtDataSet.html) GetDataSetResult\(\)
:   Return result as [TADataset](abt_AbtDataSet.html). If any error happens, return null

## Notes { .section}

-   This class and its associated methods are currently supported only by the C\# harness.

**Parent topic:**[ABT object classes](../../TA_Automation/Topics/abt_constant.html)

**Previous topic:**[TACheckState](../../TA_Automation/Topics/abt_TACheckState.html)

**Next topic:**[TAItemState](../../TA_Automation/Topics/abt_TAItemState.html)

