--- 
title: "GetDataSet"
linktitle: "GetDataSet"
aliases: 
    - /TA_Automation/Topics/abt_GetDataSet.html
---
# GetDataSet {#abt_GetDataSet_dataset .reference}

## Syntax {#section.syntax .section}

`AbtDataSet GetDataSet(String path)`

## Description {#section.desc .section}

Retrieve data set content in the current project or supplier project. If variations of the data set exist, the returned variation is that which satisfies the runtime variation specification.

## Parameters {#section.params .section}

path
:   String specifying a data set path.

## Return Value {#section.return .section}

If the specified data set is found, an [AbtDataSet](abt_AbtDataSet.html) object with the contents of the data set; otherwise, null.

## Notes { .section}

-   path parameter:
    -   dedicated data set: The full TA explorer path from the **Data** node must be specified, with forward slashes \(/\) delimiting each level of the hierarchy. For example: /Customer info/Customers
    -   inline data set: Only the name \(no path\) of the data set is necessary. For example: Customers.
-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDataSetManagement](../../TA_Automation/Topics/abt_AbtDataSetManagement.html)

**Previous topic:**[DoesDataSetExist](../../TA_Automation/Topics/abt_DoesDataSetExist.html)

