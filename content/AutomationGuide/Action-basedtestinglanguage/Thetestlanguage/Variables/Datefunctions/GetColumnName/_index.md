--- 
title: "GetColumnName"
linktitle: "GetColumnName"
aliases: 
    - /TA_Automation/Topics/abt_GetColumnName.html
---
# GetColumnName {#reference_acx_fbw_gq .reference}

## Syntax

`String GetColumnName(int index)`

## Description {#section.desc .section}

Retrieve the header name of the specified column of the object.

## Parameters {#section.params .section}

index
:   Integer index of the column. Column indexes start from zero, proceeding from left to right.

## Return Value {#section.return .section}

String value indicating the column name. If the call is unsuccessful, returnnull.

## Notes { .section}

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSet](../../TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[GetColumnCount](../../TA_Automation/Topics/abt_GetColumnCount.html)

**Next topic:**[GetData](../../TA_Automation/Topics/abt_GetData.html)

