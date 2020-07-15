--- 
title: "CheckOut"
linktitle: "CheckOut"
description: "Syntax integer CheckOut() Description Check out a data set. Return Value Return 0 if the data set is checked out successfully; otherwise, return an error code (see Notes). Notes This method is ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/abt_CheckOut.html
keywords: "methods of abt, CheckOut, CheckOut (AbtDataSet), AbtDataSet, checkout, abtdataset checkout, check out data set from repository, check out data set"
---

## Syntax  

`integer CheckOut()`

## Description  

Check out a data set.

## Return Value

Return 0 if the data set is checked out successfully; otherwise, return an error code \(see Notes\).

## Notes

-   This method is currently supported only by the C\# harness.
-   Possible errors returned:

    |Error code|Description|
    |----------|-----------|
    |0x80010031L|Data set is already checked in.|
    |0x80010033L|Data set is currently checked out by another user.|
    |0x80010035L|Current user account does not have sufficient privileges.|
    |0x80010036L|Unknown error encountered.|





