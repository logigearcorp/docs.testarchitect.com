--- 
title: "Using data sets"
linktitle: "Using data sets"
description: "Data sets are used to provide values for a sequence of action lines. To start such a sequence from within a test, use the use data set action."
weight: 2
aliases: 
    - /TA_Help/Topics/Projects_and_tests_dataset_usage.html
keywords: "data sets, using"
---

Data sets are used to provide values for a sequence of action lines. To start such a sequence from within a test, use the use data set action.

The [use data set](/TA_Automation/Topics/bia_use_data_set.html) action has two arguments:

1.  The name argument of the data set must contain the path of the data set, with the forward slash **\(/\)** as the path separator. This path always starts with the forward slash \(/\), which corresponds to the **Data** subfolder of the project.
    -   Example
        -   A data set, CRR, is located directly under the **Data** node, without folders. The path is: `/CRR`
        -   A data set, zipcodes, is located in the folder **address data** under the **Data** node. The path is: `/address data/zipcodes.`
2.  The filter argument can contain either a filter expression, or the name of a filter that has been defined \(or will be defined\) in the data set.

{{<tip>}} In any of the arguments of the action lines following use data set \(up until the first repeat for data set action\), you can use an expression with variables whose names are equivalent to the column headers of the data set. These variables are automatically declared within the scope of the use data set / repeat for data set block.

At the end of the sequence of action lines, use the action [repeat for data set](/TA_Automation/Topics/bia_repeat_for_data_set.html). During the test run, this action causes execution to loop back to the use data set line for as long as there are more vectors from the data set available to be used.

The following example demonstrates how a data set can be used to enter a series of reservations for rental cars. In this example, the various steps in the registration process are followed for each vector supplied from the data set. In this case the values are only used as input, but a data set can also contain expected values, for comparison with actual results.

![](/images/TA_Help/Images/ug_datasetuse.png)

To apply the long filter \(a filter named long, as specified in the data set from the earlier example\), place it as a value in the filter argument of use data set. Now only those vectors matching this filter's criteria are used for the test.

![](/images/TA_Help/Images/Data_Sets_use_with_filter.png)

Instead of using a filter by name, as defined in the data set file, you can also specify a filter expression directly within the filter argument.

![](/images/TA_Help/Images/Data_Sets_use_with_filter_formula.png)




