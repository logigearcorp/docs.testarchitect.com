--- 
title: "Data-driven testing overview"
linktitle: "Data-driven testing overview"
description: "With data-driven testing, a test sequence is executed repeatedly using values from a data source. For each test cycle, a different row of data is applied."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Data_driven_testing_overview.html
keywords: "data-driven tests, overview"
---

With data-driven testing, a test sequence is executed repeatedly using values from a data source. For each test cycle, a different row of data is applied.

The data-driven testing feature of TestArchitect allows you to separate data from your test. This is particularly useful when a consistent sequence of operations and checks must be performed repeatedly using different sets of data values. Such values may be input values or expected outcomes, or a combination of the two.

The test sequence is executed multiple times using values from rows of a data source. For each cycle of the test sequence, another row of data is applied. This data source may take one of the two following forms:

-   a data set, which is a named TestArchitect project item residing under the **Data** node of the TestArchitect explorer tree
-   a tab-delimited text file residing in a location accessible to the host operating system.

Execution of a data-driven sequence may be repeated for all rows of the data source. Alternatively, one or more filters may be applied, which select the data rows to be used, based on criteria applied to their contents.



