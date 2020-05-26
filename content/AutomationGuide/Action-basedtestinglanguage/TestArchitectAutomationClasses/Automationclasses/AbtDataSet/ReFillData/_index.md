--- 
title: "ReFillData"
linktitle: "ReFillData"
weight: 11
aliases: 
    - /TA_Automation/Topics/abt_ReFillData.html
---
# ReFillData {#reference_vwy_3bw_gq .reference}

## Syntax

`int ReFillData(string fileName)`

## Description {#section.desc .section}

Refill the data set with data from an external file.

## Parameters {#section.params .section}

fileName
:   Full file system path to an external text file on the test controller. File must contain the data rows in tab-delimited format.

## Return Value {#section.return .section}

Return 0 if theexecutionis successful; otherwise, -1.

## Notes { .section}

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSet](../../TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[InsertRow](../../TA_Automation/Topics/abt_InsertRow.html)

**Next topic:**[RemoveColumnByIndex](../../TA_Automation/Topics/abt_RemoveColumnByIndex.html)

