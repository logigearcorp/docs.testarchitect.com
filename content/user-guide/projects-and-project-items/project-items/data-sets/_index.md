--- 
title: "Data sets"
linktitle: "Data sets"
description: "Data sets contain rows of values that can be executed retrieved by a test and acted on sequentially."
weight: 2
aliases: 
    - /TA_Help/Topics/Projects_and_tests_dataset.html
keywords: "data sets"
---

Data sets contain rows of values that can be executed retrieved by a test and acted on sequentially.

The data-driven testing capability of TestArchitect allows you to separate data from your test, which is particularly useful when an identical series of operations and checks needs to be performed using different sets of data values. Such values can be input values and/or expected outcomes.

A sequence of action lines can be executed repeatedly using values from rows in a data set. For each cycle of such a sequence of action lines, another row, or record, of the data set is applied. The execution of the action lines can either be repeated for all records of the data set, or a filter can be applied to select those records that are to be used.

Data sets are stored in the **Data** subtree of the TestArchitect explorer tree, and can be organized into folders and subfolders.

![](/images/TA_Help/Images/ug_dataset_tree.png)

A data set worksheet typically resembles this:

![](/images/TA_Help/Images/ug_datasetsheet.png)

The [row](/TA_Automation/Topics/bia_row.html) lines form the records of the data set. Each iteration of a loop of action lines using this data set works on one such row at a time. The column header names of a data set are visible as variables to those action lines that use the data set; for each iteration, the variables take on the values taken from the record currently being processed.

A data set can also contain one or more named [filter](/TA_Automation/Topics/bia_filter.html) definitions. When using a data set, these names can be used to select the records that are to be processed by the action lines. Filter definitions look like this:

![](/images/TA_Help/Images/Data_Set_filters.png)

A filter expression is similar to expressions that may appear in action line arguments, except that no pound \(\#\) symbol is needed to precede them. The variable names in the expressions refer to the column headers in the data section of the data set. The logical operators and and or can be used to apply multiple criteria. A header name \(variable\) containing a space can generally be used without an issue. However, to enhance readability, and to avoid conflicts with the operator names and and or, it makes sense to place single quotes around them.

{{<tip>}} For flexibility, you are able to copy data either from other applications \(for example, Microsoft Excel, Microsoft Word, or Notepad\) or from TestArchitect itself, and then paste the it into the data area of the data set grid. If you copy data and paste it as a data set value, [row](/TA_Automation/Topics/bia_row.html) actions are automatically generated in the corresponding rows of the first column.

1.  [Creating a new data set](/TA_Help/Topics/Projects_and_tests_dataset_creation.html)  
You can create a data set using the New Data Setdialog box.
2.  [Using data sets](/TA_Help/Topics/Projects_and_tests_dataset_usage.html)  
Data sets are used to provide values for a sequence of action lines. To start such a sequence from within a test, use the use data set action.
3.  [Exporting a data set](/TA_Help/Topics/Projects_and_tests_dataset_export.html)  
Data sets can be exported to archive files \(.ZIP format\), which can be used as a backup or for re-importing.
4.  [Importing a data set](/TA_Help/Topics/Projects_and_tests_dataset_import.html)  
TestArchitect lets you easily import a data set archive file \(.ZIP format\) into a TestArchitect data set.
5.  [Dynamically refilling a data set](/TA_Help/Topics/Projects_and_tests_dataset_refilling.html)  
In some cases you may want to use values from an external data source to supply your action lines with data vectors.
6.  [Importing a source file into a data set](/TA_Help/Topics/Projects_and_tests_dataset_importing.html)  
How to import data from a single external source file into a TestArchitect data set.
7.  [Importing a data folder into a data set folder](/TA_Help/Topics/Projects_and_tests_dataset_importing_data_folder.html)  
How to import data from an external data folder into a TestArchitect data set folder.
8.  [Copying and pasting data set values](/TA_Help/Topics/Projects_and_tests_dataset_copy_paste.html)  
One means of contributing data values to a data set is by pasting them in, using the traditional copy-and-paste technique. The source of such values can be another application \(for example, Microsoft Excel™, MS Word™, or Notepad\) or another item in the TestArchitect editor itself. The copied data may be pasted into the grid of data set items as either raw data or data set values.




