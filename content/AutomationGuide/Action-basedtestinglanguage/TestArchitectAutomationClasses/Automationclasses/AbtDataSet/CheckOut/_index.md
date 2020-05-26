--- 
title: "CheckOut"
linktitle: "CheckOut"
weight: 2
aliases: 
    - /TA_Automation/Topics/abt_CheckOut.html
---
# CheckOut {#abt_CheckOut_dataset .reference}

## Syntax {#section.syntax .section}

`integer CheckOut()`

## Description {#section.desc .section}

Check out a data set.

## Return Value {#section.return .section}

Return 0 if the data set is checked out successfully; otherwise, return an error code \(see Notes\).

## Notes { .section}

-   This method is currently supported only by the C\# harness.
-   Possible errors returned:

    |Error code|Description|
    |----------|-----------|
    |0x80010031L|Data set is already checked in.|
    |0x80010033L|Data set is currently checked out by another user.|
    |0x80010035L|Current user account does not have sufficient privileges.|
    |0x80010036L|Unknown error encountered.|


**Parent topic:**[AbtDataSet](../../TA_Automation/Topics/abt_AbtDataSet.html)

**Previous topic:**[CheckIn](../../TA_Automation/Topics/abt_CheckIn.html)

**Next topic:**[AddColumn](../../TA_Automation/Topics/abt_AddColumn.html)

