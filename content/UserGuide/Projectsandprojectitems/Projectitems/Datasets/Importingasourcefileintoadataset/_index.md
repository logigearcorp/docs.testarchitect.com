--- 
title: "Importing a source file into a data set"
linktitle: "Importing a source file into a data set"
weight: 6
aliases: 
    - /TA_Help/Topics/Projects_and_tests_dataset_importing.html
---
# Importing a source file into a data set {#Projects_and_tests_dataset_importing_from_source_file .task}

How to import data from a single external source file into a TestArchitect data set.

1.  In the TestArchitect explorer tree, right-click the **Data** node in your project, and then select **New Data Set**.

    **Fastpath:** Ctrl + N

2.  In the New Data Set dialog box, enter the details for the data set:

    -   **Name**: Name to be assigned to the data set.
    -   **Description**: \(Optional\) Short description for the data set .
    -   **Data source file**: Click ![](../Images/btn.browse-ellipsis.01.png) to browse to the external source file to import its data into the data set.
    1.  Select an external source file in the Select dialog box.

        **Note:**

        -   You must have full read permissions for the external source file.
        -   TestArchitect only supports the import of two file types: .csv and .txt files. The files must contain tab-delimited text lines.

            ![](../Images/tab_delimited_text_file.png)

    2.  Click **Select**.

3.  Click **Create**.


A new data set with data imported from the specified external source file appears as a node beneath the **Data** node. The [row](../../TA_Automation/Topics/bia_row.html) actions are also automatically generated in the first column of the imported data.

![](../Images/import_external_data_source.png)

**Parent topic:**[Data sets](../../TA_Help/Topics/Projects_and_tests_dataset.html)

**Previous topic:**[Dynamically refilling a data set](../../TA_Help/Topics/Projects_and_tests_dataset_refilling.html)

**Next topic:**[Importing a data folder into a data set folder](../../TA_Help/Topics/Projects_and_tests_dataset_importing_data_folder.html)

