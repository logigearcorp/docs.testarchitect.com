--- 
title: "Importing test cases"
linktitle: "Importing test cases"
description: "Describes how you can import test cases from CSV files."
weight: 2
aliases: 
    - /TA_Help/Topics/Importing_from_CSV_test_cases.html
keywords: "test cases, importing from CSV, importing, from CSV: test cases, CSV"
---

Describes how you can import test cases from CSV files.

**Note:** The following rules hold when importing test cases from CSV files into a TestArchitect test module:

-   Only a CSV files containing a test case \(not test module\) may be imported into a test module.
-   The ID of the test case in the CSV file must not already exist in the destination test module prior to importing.
-   The test module must be [checked out](/TA_Help/Topics/Project_items_checkout.html) prior to importing a test case to it.

To import test cases into an existing checked out test module, do the following:

1.  Invoke the Select dialog box by doing one of the following:

    -   In the TestArchitect explorer tree, right-click the test module node to which the test case is to be added, and then select **Import**.
    -   Open the [test module list view](/TA_Help/Topics/Listview_TM.html). From the list view, right-click a test module, and then select **Import**.
2.  In the Select dialog box, browse to the location where the CSV files are stored, and then select one or more of them.

3.  Click the **Select** button.

4.  In the notification message dialog box, click **OK**.


The contents of the CSV file\(s\) are imported as new test case\(s\) to the designated test module.



