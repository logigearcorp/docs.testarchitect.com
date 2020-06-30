--- 
title: "Creating a data-driven test"
linktitle: "Creating a data-driven test"
description: "Write a test that relies on an external data source (a data set, in this case) to simulate real-world user input."
weight: 4
aliases: 
    - /TA_Tutorials/Topics/Creating_a_data-driven_test.html
keywords: "data-driven tests, creating, built-in actions, use data set, repeat for data set"
---

Write a test that relies on an external data source \(a data set, in this case\) to simulate real-world user input.

Create a test that uses multiple data records from a data set. A data set is a data source that resides within the repository, but outside of the test module.

1.  In the TestArchitect explorer tree, select any item within the current project, then click **Create new test module** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestModule.png) in the toolbar.

    The New Test Module dialog box appears.

2.  In the **Name** field, type My data-driven tests, then click **Create**.

3.  {{<note>}} The new test module appears in the editor with a default template containing suggested basic components for a well-designed test. For this lesson, you only need the TEST CASE section.

    In the editor, delete all content except for the TEST CASE line. Optionally, you can also delete any blank lines above the TEST CASE line.

    You are now ready to begin writing your action lines.

4.  In the third column of the TEST CASE line, provide a useful description, such as Report data out of a data set.

5.  {{<note>}} The first step is to enter a use data set action line, but TestArchitect offers a shortcut for this:

    Click the **Rented Cars** node \(under the **Data** node in the TestArchitect explorer tree\), and drag it to the first column of the editor, a few lines below the TEST CASE line.

    The use data set action is automatically inserted where you released the mouse, with "/Rental Cars" in the next column specifying the path to the data set. \(In this case, because **Rental Cars** resides at the top of the **Data** subtree, the path is indicated by a simple slash.\) Also, because every use data set begins a loop that must have a closing action, a complementary repeat data set action is auto-inserted several lines below.

    The use data set action connects the test to a data set and, when executed, grabs a row of data from it. The repeat for data set action works with use data set to define the beginning and end of a loop. During execution, repeat for data set sends control back to use data set, which grabs a new record from the data set.

    {{<tip>}} Leave the filter argument of use data set blank. It is not required for this lesson.

6.  Write a report action to write out the contents of each data set record to the results:

    1.  Move your cell pointer to the leftmost column a few lines down.

    2.  Enter the action report, and press Enter.

    3.  Type the following into the text field:

        ```
        # "Quantity " & quantity rented & " of model " & model rented & " rented in " & pickup state & " in " & rental month
        ```

    Note that this line uses several variables \(quantity rented, pickup state, etc.\) that have not been explicitly defined anywhere in the test. This highlights another function of the use data set action: to associate values, as it pulls them in from a data set, with variable names. Those variable names come from the column headers of the data set.


Upon completion, your test should appear similar to the following:

![](/images/TA_Tutorials/Images/tut.Data_Sets.Test01.png)

Now you are ready to run your data-driven test.




