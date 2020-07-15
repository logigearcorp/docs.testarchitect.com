--- 
title: "ReFillData"
linktitle: "ReFillData"
description: "Syntax int ReFillData(string fileName) Description Refill the data set with data from an external file. Parameters fileName Full file system path to an external text file on the test controller. File ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/abt_ReFillData.html
keywords: "methods of abt, ReFillData, ReFillData (AbtDataSet), AbtDataSet, refilldata, abtdataset refilldata, refill dataset with external file"
---

## Syntax

`int ReFillData(string fileName)`

## Description  

Refill the data set with data from an external file.

## Parameters  

-   **fileName**

    Full file system path to an external text file on the test controller. File must contain the data rows in tab-delimited format.


## Return Value

Return 0 if theexecutionis successful; otherwise, -1.

## Notes

-   This method is currently supported only by the C\# harness.




