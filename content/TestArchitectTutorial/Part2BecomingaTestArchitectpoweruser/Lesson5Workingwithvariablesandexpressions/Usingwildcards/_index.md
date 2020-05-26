--- 
title: "Using wildcards"
linktitle: "Using wildcards"
weight: 9
aliases: 
    - /TA_Tutorials/Topics/Using_wildcards.html
---
# Using wildcards {#Using_wildcards .task}

Use a wildcard to allow a check action to match a range of dates.

1.  In theMy expressionstest module you created previously, create a new test case:

    1.  Place your cell pointer on a line somewhere below the existing set of action lines \(but before the `FINAL` section, if any\).

    2.  Click **Create New Test Case** ![](../../reuse/../TA_Tutorials/Images/btn.TAC_toolbar.CreateTestCase.png) on the toolbar.

        A test case line similar to the following is inserted.

        ![](../../reuse/../TA_Tutorials/Images/misc.TAC.Test_case_05_line.png)

    3.  In the second column of the new line, assign the test case an ID ofTC 05\(if not already set to that value\).

    4.  Press Tab to advance to the next column, and provide a description for your test case, such asusing wildcards.

2.  Next, write an action line with the check control property action, which will access the **pickup date** control of Car Rental's **date and location** window, and check its value property against an expected value:

    ```
    
                              window                control        property    expected  
    check control property    date and location     pickup date    value       {06/.*/2019}                 
    ```

    The value property of the **pickup date** control in the Car Rental program holds a text string representing a date, in the format of MM/DD/YYYY. In the expected argument of this action line, a wildcard `(.*)` represents the DD \(day of month\) portion of the date. Hence the search string matches all dates in the range of 06/01/2019 to 06/30/2019.

    Your test case should now resemble this:

    ![](../Images/tut.Vars_and_Exps.Wildcards_01.Test.png)

3.  If you have not already done so, start the Car Rental application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.

    The login window appears.

    ![](../../reuse/../TA_Tutorials/Images/app.Car_Rental.Login.unmodified.png)

4.  Log in to the application, and on the Welcome screen, click **New Order**.

    The Car Rental - Select Date and Location window is opened.

5.  Edit the **Pickup Date** field to specify any date from June 1 to June 30, of the year 2019:

    ![](../Images/app.Car_Rental.Sel_Date_and_Loc.mod_Pick_Up_Date.png)

6.  Execute Test Case 05 of your test.

    With your test displayed in the editor, do the following:

    1.  Click **Execute** ![](../../reuse/../TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

        The Execute Test dialog box appears.

    2.  In the **Test Modules** panel, expand the tree.

    3.  Ensure that only the check box for test caseTC 05is selected.

    4.  Click **Execute**.

    The status bar \(at the bottom left of the TestArchitect window\) indicates the stages of the test as it progresses.


The check control property action verifies that the specified property of a given control matches an expected value. In the test result, you can see that the check control property action has passed. The expected result of `.*` was a match for the recorded day-of-the-month value 28. Although the expected and recorded results were not identical, the portions of the search string preceding and following the wildcard \(06/ and /2019\) match the beginning and ending portions of the value property's contents.

![](../Images/tut.Vars_and_Exps.Wildcards_01.Results.png)

**Parent topic:**[Lesson \#5: Working with variables and expressions](../../TA_Tutorials/Topics/Tutorial_Working_with_variables_and_expressions.html)

**Previous topic:**[Wildcards](../../TA_Tutorials/Topics/Wildcards.html)

**Next topic:**[Summary: What you learned](../../TA_Tutorials/Topics/Summary_Working_with_variables_expressions.html)

