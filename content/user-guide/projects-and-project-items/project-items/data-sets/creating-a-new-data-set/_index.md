--- 
title: "Creating a new data set"
linktitle: "Creating a new data set"
description: "You can create a data set using the New Data Set dialog box."
weight: 1
aliases: 
    - /TA_Help/Topics/Projects_and_tests_dataset_creation.html
keywords: "data set, creating, creating new data sets"
---

You can create a data set using the New Data Setdialog box.

1.  In the TestArchitect explorer tree, right-click the **Data** node in your project, and then select **New Data Set**.

    **Fastpath:** Ctrl + N

2.  In the New Data Set dialog box, enter the details for the data set:

    -   **Name**: Name to assign to the data set.
    -   **Description**: \(Optional\) Short description for the data set.
    -   **Data source file**: \(Optional\) Click ![](/images/TA_Help/Images/btn.browse-ellipsis.01.png) to browse to the external source file to import its data into the data set \(see [Importing a source file into a data set](/TA_Help/Topics/Projects_and_tests_dataset_importing.html) for details regarding importing a single external source file into a data set\).
3.  Click **Create**.

    A new data set appears as a node under the **Data** node, or the data set folder node, as the case may be. Additionally, a new data set opens in the test editor, ready for your input.

4.  In the editor, type the header values.

    Within the test, these headers are used as the variable names for the values coming from their respective columns.

5.  Enter the test data. Beginning with the leftmost column, enter a [row](/TA_Automation/Topics/bia_row.html) action, followed by the data values for that row.

    Your data set may resemble the following.

    ![](/images/TA_Help/Images/data_set_creation.png)




