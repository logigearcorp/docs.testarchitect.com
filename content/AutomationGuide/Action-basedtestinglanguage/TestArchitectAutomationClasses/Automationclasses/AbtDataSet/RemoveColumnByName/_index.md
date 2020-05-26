--- 
title: "RemoveColumnByName"
linktitle: "RemoveColumnByName"
weight: 13
aliases: 
    - /TA_Automation/Topics/abt_RemoveColumnByName.html
---
# RemoveColumnByName {#reference_msh_kbw_gq .reference}

## Syntax

`int RemoveColumnByName(string colName)`

## Description {#section.desc .section}

Remove a column, specified by its header name, from the data set object.

## Parameters {#section.params .section}

colName
:   String value specifying the column header text.

## Return Value {#section.return .section}

Return 0 if theexecutionis successful; otherwise, -1.

## Notes { .section}

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSet](../../TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[RemoveColumnByIndex](../../TA_Automation/Topics/abt_RemoveColumnByIndex.html)

**Next topic:**[RemoveRowAt](../../TA_Automation/Topics/abt_RemoveRowAt.html)

