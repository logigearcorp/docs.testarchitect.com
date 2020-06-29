--- 
title: "Accessing external data from the test"
linktitle: "Accessing external data from the test"
description: "Setting up a data-driven test to accept data from an external text file."
weight: 9
aliases: 
    - /TA_Tutorials/Topics/Accessing_external_data_from_the_test.html
keywords: "external data, accessing"
---

Setting up a data-driven test to accept data from an external text file.

You will now adapt the same test performed in the previous lesson to allow an external text file to serve as the data source.

1.  In theMy data-driven teststest module you created previously, create a new test case:

    1.  Place your cell pointer on a line somewhere below the existing set of action lines \(but before the `FINAL` section, if any\).

    2.  Click **Create New Test Case** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestCase.png) on the toolbar.

        A test case line similar to the following is inserted.

        ![](/images/TA_Tutorials/Images/misc.TAC.Test_case_02_line.png)

    3.  In the second column of the new line, assign the test case an ID ofTC 02\(if not already set to that value\).

    4.  Press Tab to advance to the next column, and provide a description for your test case, such asReport data from an external source.

2.  Select the three action lines from the previous test case \(TC 01\), and copy them. Do not include the [test case](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/test-case) line.

3.  Place your cursor in the first column, five or more lines below your new test case line, and paste the text.

4.  Now you will modify this sequence of action lines to switch data sources:

    1.  In the space between the test case heading and the [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) action line, enter the action [refill data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/refill-data-set). This is the action that connects with the data file.

    2.  With the cell pointer in the adjacent cell \(data set\), press the Spacebar and select /Rented Cars file link, the dummy data set you created earlier.

    3.  The next cell, text file, is where you specify the location and name of the text file that will serve as the data source.

        {{<tip>}} Note that, if you are working on a Windows system, you have the option of using either forward or backward slashes \( / or \\ \) as folder/subfolder delimiters.

    4.  Finally, modify the name argument of the next action line so that [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) also points to the /Rented Cars file link data set.


You have completed the steps required to have a data-driven test change its data source from a data set to external text file. Your test sequence for this example should appear similar to the following:

![](/images/TA_Tutorials/Images/tut.Data_Sets.Test02.png)

Next, you will run the test and confirm that the data from the external file is properly read.




