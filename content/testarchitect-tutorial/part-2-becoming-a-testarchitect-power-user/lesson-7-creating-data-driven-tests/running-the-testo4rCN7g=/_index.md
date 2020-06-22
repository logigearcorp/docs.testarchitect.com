--- 
title: "Running the test"
linktitle: "Running the test"
description: "Execute a test with multiple records (rows) of data supplied by an external data file."
weight: 10
aliases: 
    - /TA_Tutorials/Topics/Running_the_test_5.html
keywords: "executing tests, external data file"
---

Execute a test with multiple records \(rows\) of data supplied by an external data file.

Once you have created a data set and a test that makes use of the data set, you may execute the test.

1.  Execute Test Case 02 of your test.

    With your test displayed in the editor, do the following:

    1.  Click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

        The Execute Test dialog box appears.

    2.  In the **Test Modules** panel, expand the tree.

    3.  Ensure that only the check box for test caseTC 02is selected.

    4.  Click **Execute**.

    The status bar \(at the bottom left of the TestArchitect window\) indicates the stages of the test as it progresses.

2.  Examine the results to ensure that the test was driven by the external data file.

    The results display a report line \(Quantity n of model...\) for each execution of the use data set/repeat data set loop, corresponding to each data row in RentedCars.tsv:

    ![](/images/TA_Tutorials/Images/tut.Data_Sets.Test02_Results.png)


The results appear identical, or nearly identical, to those of Test Case TC 01. Note that if you altered any of the data after copying from the first data set to the text file \(for instance, Prius -\> Thunderbird\), the change is reflected in the results, confirming that the source of the data is the external file.




