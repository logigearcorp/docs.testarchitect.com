--- 
title: "Named filters"
linktitle: "Named filters"
description: "Named filters are established in a data set and may be referenced in your tests."
weight: 13
aliases: 
    - /TA_Tutorials/Topics/Named_data_set_filters.html
keywords: "filters, named, data sets, named filtering"
---

Named filters are established in a data set and may be referenced in your tests.

In some situations a data set may often need to be filtered by the same set of criteria, or by various sets of established criteria. In such cases, it is convenient to include the criteria specifiers \(that is, filters\) within the data set itself, thus making them available to any tests or actions which use the data set.

TestArchitect enables you to do this by providing for named filters to be created in data sets. A named filter, like the filter previously discussed, uses a boolean expression to determine whether or not a data vector meets the criteria for inclusion in a test. It is created in the data set with the [filter](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/filter) action, and is invoked within a test by reference to its name.

The [filter](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/filter) action accepts two arguments, both required: name and criterion. Use the name argument to provide an appropriate name for the filter, one by which the test will reference it; use criterion for the filtering expression. \(Note that, despite the name, it is possible to specify multiple criteria within a criterion field, as in the case of the last filter below\):

![](/images/TA_Tutorials/Images/TA7tut.data_set.Rented_Cars.with_named_filters.png)

In your test, you employ a named filter with the [use filter](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-filter) action:

![](/images/TA_Tutorials/Images/TA7tut.Data_Sets.Test01_named_filter01.png)

The results of the above action lines are identical to those of the previous example, in which the same filter was applied, but was created within the test itself.




