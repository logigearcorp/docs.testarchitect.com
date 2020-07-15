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

1.  Initialize a new [AbtDataSetManagement](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/) object.
2.  Use methods of [AbtDataSetManagement](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/) to create a new [AbtDataSet](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdataset/) and/or [AbtDataRow](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatarow/) object.
3.  Depending on your needs, apply various methods of
    1.  [AbtDataSet](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdataset/) to continue processing the returned data set, or
    2.  [AbtDataRow](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatarow/) to continue processing the returned data set row.

## Example  

Suppose that you'd like to get the total number of columns in a given [dedicated data set](/user-guide/support/glossary-of-terms/dedicated-data-set).

Your snippet of code might resemble the following:

```
//Initialize AbtDataSetManagement object
AbtDataSetManagement mgn = new AbtDataSetManagement();

//Retrieve a data set, "Car Rental"
AbtDataSet dataset = mgn.[GetDataSet](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/getdataset)("/Car Rental");

//Retrieve the total number of columns
int count = dataset.[GetColumnCount](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdataset/getcolumncount)();
```

1.  [CreateDataRow](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/createdatarow)  

2.  [CreateDataSet](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/createdataset)  

3.  [DoesDataSetExist](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/doesdatasetexist)  

4.  [GetDataSet](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/getdataset)  





