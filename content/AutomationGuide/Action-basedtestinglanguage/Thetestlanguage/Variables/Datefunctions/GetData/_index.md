--- 
title: "GetData"
linktitle: "GetData"
aliases: 
    - /TA_Automation/Topics/abt_GetData.html
---
# GetData {#reference_pmp_gbw_gq .reference}

## Syntax {#section.syntax .section}

`List <[AbtDataRow](abt_AbtDataRow.html)> GetData(string filterCriteria)`

## Description {#section.desc .section}

Retrieve from the data set object the list of data rows that satisfy the specified filter criteria.

## Parameters {#section.params .section}

filterCriteria
:   String value specifying the filter criteria. \(For format, see the criterion argument of [filter](bia_filter.html) built-in action\).

## Return Value {#section.return .section}

Array of AbtDataRow objects. If the call is unsuccessful, returnnull.

## Notes { .section}

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSet](../../TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[GetColumnName](../../TA_Automation/Topics/abt_GetColumnName.html)

**Next topic:**[InsertColumn](../../TA_Automation/Topics/abt_InsertColumn.html)

