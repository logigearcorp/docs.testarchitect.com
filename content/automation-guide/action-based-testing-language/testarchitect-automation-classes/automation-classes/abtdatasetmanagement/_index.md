--- 
title: "AbtDataSetManagement"
linktitle: "AbtDataSetManagement"
description: "This class is the central point for interacting with data set's information."
weight: 11
aliases: 
    - /TA_Automation/Topics/abt_AbtDataSetManagement.html
keywords: "methods of abt, AbtDataSetManagement, AbtDataSetManagement (methods)"
---

This class is the central point for interacting with data set's information.

{{<note>}} This class and its associated methods are currently supported only by the C\# harness.

## Workflow Implementation

In general, a basic workflow involves the following steps:

1.  Initialize a new [AbtDataSetManagement](/TA_Automation/Topics/abt_AbtDataSetManagement.html) object.
2.  Use methods of [AbtDataSetManagement](/TA_Automation/Topics/abt_AbtDataSetManagement.html) to create a new [AbtDataSet](/TA_Automation/Topics/abt_AbtDataSet.html) and/or [AbtDataRow](/TA_Automation/Topics/abt_AbtDataRow.html) object.
3.  Depending on your needs, apply various methods of
    1.  [AbtDataSet](/TA_Automation/Topics/abt_AbtDataSet.html) to continue processing the returned data set, or
    2.  [AbtDataRow](/TA_Automation/Topics/abt_AbtDataRow.html) to continue processing the returned data set row.

## Example

Suppose that you'd like to get the total number of columns in a given [dedicated data set](/TA_Glossary/Topics/glossaryDedicatedDataSet.html).

Your snippet of code might resemble the following:

```
//Initialize AbtDataSetManagement object
AbtDataSetManagement mgn = new AbtDataSetManagement();

//Retrieve a data set, "Car Rental"
AbtDataSet dataset = mgn.[GetDataSet](/TA_Automation/Topics/abt_GetDataSet.html)("/Car Rental");

//Retrieve the total number of columns
int count = dataset.[GetColumnCount](/TA_Automation/Topics/abt_GetColumnCount.html)();
```

1.  [CreateDataRow](/TA_Automation/Topics/abt_CreateDataRow.html)  

2.  [CreateDataSet](/TA_Automation/Topics/abt_CreateDataSet.html)  

3.  [DoesDataSetExist](/TA_Automation/Topics/abt_DoesDataSetExist.html)  

4.  [GetDataSet](/TA_Automation/Topics/abt_GetDataSet.html)  





