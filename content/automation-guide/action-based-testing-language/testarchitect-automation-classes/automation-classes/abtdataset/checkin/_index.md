--- 
title: "CheckIn"
linktitle: "CheckIn"
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_CheckIn.html
---
keyword: [checkin, abtdataset checkin, check in data set, check in data set to repository]
---

# CheckIn

## Syntax

`integer CheckIn(String path, Boolean keepCheckedOut, String comment)`

## Description

Check in a given data set to the repository.

## Parameters

-   **path**

    String specifying a data set path.

-   **keepCheckedOut**

    Boolean value indicating whether to keep the data set checked out after checking in.

-   **comment**

    A brief note allowing the user to explain the changes made to the item before checking it in.


## Return Value

Return 0 if the data set is successfully checked in; otherwise, return an error code \(see Notes\).

## Notes

-   This method is currently supported only by the C\# harness.
-   Possible errors returned:

    |Error code|Description|
    |----------|-----------|
    |0x80010031L|Data set does not exist.|
    |0x8001000DL|Required argument\(s\) are empty.|
    |0x80010032L|Data set is already checked in.|
    |0x80010033L|Data set is currently checked out by another user.|
    |0x80010034L|Path of data set does not exist.|
    |0x80010035L|Current user account does not have sufficient privileges.|
    |0x80010036L|Unknown error encountered.|


**Parent topic:**[AbtDataSet](/TA_Automation/Topics/abt_AbtDataSet.html)

**Next topic:**[CheckOut](/TA_Automation/Topics/abt_CheckOut.html)

