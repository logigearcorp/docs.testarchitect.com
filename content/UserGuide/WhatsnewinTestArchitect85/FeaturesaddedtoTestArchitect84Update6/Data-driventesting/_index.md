--- 
title: "Data-driven testing"
linktitle: "Data-driven testing"
aliases: 
    - /TA_Help/Topics/ABT_data_driven_testing.html
---
# Data-driven testing {#ABT_data_driven_testing .concept}

In Action Based Testing, action-based tests can be applied to data sets.

A data set is a worksheet-like file containing rows of data values, to be provided sequentially to the test procedure. During test execution, a sequence of actions is repeated for each row in the data set. This way of testing is commonly referred to as [data-driven testing](Projects_and_tests_dataset.html). Each data row generally specifies input values, and can also specify expected outcomes.

To allow the test to loop through the sequential rows of data, the pair of actions [use data set](../../TA_Automation/Topics/bia_use_data_set.html) and [repeat for data set](../../TA_Automation/Topics/bia_repeat_for_data_set.html) is used. The block of action lines bookended by these two actions is repeated for each data row. The column headers in the data set can be used as variables in the test to obtain each column value in the currently processed row.

Data set functionality in TestArchitect also supports filters. Filters allow you to only apply to the test those rows in the data set that meet certain criteria.

From a point of view of test design, executing a block of action lines repetitively for each row of a data set is often not the recommended solution. It is generally preferable to define an action that handles the data for each row. For example, say we want to simulate a series of twenty customers, along with the products they buy, their credit card numbers, etc. Of course each row of the data set would represent a single customer. What we might also do is create an action, call it enter customer, sandwich it between the use data set and repeat for data set actions, and have it handle the processing of each customer/row. This is usually more readable than a loop with data set-based variables. And you get the added benefit of an action that can be reused as often as needed.

A variation of the data-driven approach is to let the data sets be populated from an outside source, for example the result of a database query. The test can then be repeated for each record \(that is, data row\) coming from such a query.

**Parent topic:**[ACTION BASED TESTING](../../TA_Help/Topics/ABT_TM.html)

**Previous topic:**[Interface definitions](../../TA_Help/Topics/ABT_interface_def.html)

