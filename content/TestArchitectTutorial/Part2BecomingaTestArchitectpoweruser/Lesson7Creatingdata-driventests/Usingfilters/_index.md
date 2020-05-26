--- 
title: "Using filters"
linktitle: "Using filters"
weight: 11
aliases: 
    - /TA_Tutorials/Topics/Data_set_filters.html
---
# Using filters {#using_filters .concept}

You can apply filters to your data set to limit the sets of data applied to your test.

Data sets may often contain more data than you actually need applied to your test at a given time. Sometimes it is helpful to be able to specify, based on some data-related criteria, which vectors of a given data set you actually want used in the test. You can achieve this with data filters.

The action [use data set](../../TA4VS_Help/Topics/../../TA_Automation/Topics/bia_use_data_set.html) accepts two arguments: name, discussed in the previous topic, and filter, an optional argument. It is in the filter argument that you would place a boolean expression specifying the vectors to be included in the retrieved data. The expression may reference one or more of the data set variables. It is evaluated for each vector, and a result of TRUE allows the values from that vector to be used in the next iteration of the loop, while a value of FALSE causes it to be skipped over, or filtered out.

The figure below shows how a test would limit the data from the previous data set to just those vectors with a pickup state of Arizona:

![](../../TA4VS_Help/Topics/../Images/TA4VS.Data_Sets.Test01_filter01.png)

**Parent topic:**[Lesson \#7: Creating data-driven tests](../../TA_Tutorials/Topics/Tutorial_Creating_data-driven_tests.html)

**Previous topic:**[Running the test](../../TA_Tutorials/Topics/Running_the_test_5.html)

**Next topic:**[Applying a data filter](../../TA_Tutorials/Topics/Applying_a_data_filter.html)

