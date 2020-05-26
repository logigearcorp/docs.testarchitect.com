--- 
title: "AbtDataSetManagement"
linktitle: "AbtDataSetManagement"
weight: 11
aliases: 
    - /TA_Automation/Topics/abt_AbtDataSetManagement.html
---
# AbtDataSetManagement {#abt_AbtDataSetManagement .reference}

This class is the central point for interacting with data set's information.

**Note:** This class and its associated methods are currently supported only by the C\# harness.

## Workflow Implementation {#section.Workflow .section}

In general, a basic workflow involves the following steps:

1.  Initialize a new [AbtDataSetManagement](abt_AbtDataSetManagement.html) object.
2.  Use methods of [AbtDataSetManagement](abt_AbtDataSetManagement.html) to create a new [AbtDataSet](abt_AbtDataSet.html) and/or [AbtDataRow](abt_AbtDataRow.html) object.
3.  Depending on your needs, apply various methods of
    1.  [AbtDataSet](abt_AbtDataSet.html) to continue processing the returned data set, or
    2.  [AbtDataRow](abt_AbtDataRow.html) to continue processing the returned data set row.

## Example {#section.Example .section}

Suppose that you'd like to get the total number of columns in a given [dedicated data set](../../TA_Glossary/Topics/glossaryDedicatedDataSet.html).

Your snippet of code might resemble the following:

```
//Initialize AbtDataSetManagement object
AbtDataSetManagement mgn = new AbtDataSetManagement();

//Retrieve a data set, "Car Rental"
AbtDataSet dataset = mgn.[GetDataSet](abt_GetDataSet.html)("/Car Rental");

//Retrieve the total number of columns
int count = dataset.[GetColumnCount](abt_GetColumnCount.html)();
```

1.  [CreateDataRow](../../TA_Automation/Topics/abt_CreateDataRow.html)  

2.  [CreateDataSet](../../TA_Automation/Topics/abt_CreateDataSet.html)  

3.  [DoesDataSetExist](../../TA_Automation/Topics/abt_DoesDataSetExist.html)  

4.  [GetDataSet](../../TA_Automation/Topics/abt_GetDataSet.html)  


**Parent topic:**[Automation classes](../../TA_Automation/Topics/abt_methods_abt.html)

**Previous topic:**[AbtDataSet](../../TA_Automation/Topics/abt_AbtDataSet.html)

**Next topic:**[AbtDevice](../../TA_Automation/Topics/abt_Device.html)

