--- 
title: "Using filters"
linktitle: "Using filters"
description: "You can apply filters to your data set to limit the sets of data applied to your test."
weight: 11
aliases: 
    - /TA_Tutorials/Topics/Data_set_filters.html
keywords: "filters, for data sets, data sets, using filters"
---

You can apply filters to your data set to limit the sets of data applied to your test.

Data sets may often contain more data than you actually need applied to your test at a given time. Sometimes it is helpful to be able to specify, based on some data-related criteria, which vectors of a given data set you actually want used in the test. You can achieve this with data filters.

The action [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) accepts two arguments: name, discussed in the previous topic, and filter, an optional argument. It is in the filter argument that you would place a boolean expression specifying the vectors to be included in the retrieved data. The expression may reference one or more of the data set variables. It is evaluated for each vector, and a result of TRUE allows the values from that vector to be used in the next iteration of the loop, while a value of FALSE causes it to be skipped over, or filtered out.

The figure below shows how a test would limit the data from the previous data set to just those vectors with a pickup state of Arizona:

![](/images/TA4VS_Help/Images/TA4VS.Data_Sets.Test01_filter01.png)




