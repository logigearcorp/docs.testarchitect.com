--- 
title: "Running the test"
linktitle: "Running the test"
aliases: 
    - /TA_Tutorials/Topics/Running_the_test.html
---
# Running the test {#Running_the_test .task}

Execute your test to have TestArchitect perform the actions you defined in your test module.

**Before proceeding:**If you haven't done so already, start the Car Rental sample application to display the Login dialog box: Select **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.

**Note:** Note that you are doing this so as to keep the test as simple as possible. In future exercises, your test modules will contain lines in the INITIALIZATION section that handle the launching of the AUT automatically.

1.  In the AUT, clear the **User name** field in the Login dialog box so that you can observe how TestArchitect automation fills in the field automatically.

2.  Click **Execute** on the TestArchitect Clienttoolbar.

    The Execution dialog box appears.

3.  Click **Execute** on the dialog box to start the test.

    TestArchitect now performs each of the actions you defined in the Login Test test module.

    The Car Rental-Welcome window appears, confirming that you have completed your first user interface test.


At the conclusion of the test, TestArchitect Client displays the results in a tab: **Summary**.

![](../Images/tut.Interfacing_with_a_GUI.Test_results_Summary.png "Summary tab")

To view detailed test lines, click on the **View detailed results per test line** hyperlink. The **Results Details** tab is open on a web browser.

![](../Images/tut.Interfacing_with_a_GUI.Test_results_Summary.details.png "Result Details tab")

Congratulations, you have completed all of the exercises in this lesson of the Tutorial Guide. In the next lesson you'll learn more about interface definitions and how they are used to map windows and controls to TA names.

**Parent topic:**[Lesson \#2: Interfacing with a GUI](../../TA_Tutorials/Topics/Tutorial_Interfacing_with_a_GUI.html)

**Previous topic:**[Creating the test](../../TA_Tutorials/Topics/Creating_the_test.html)

**Next topic:**[Summary: What you learned](../../TA_Tutorials/Topics/Summary_Interfacing_with_a_GUI.html)

**Related information**  


[Running a test and viewing the results](../../TA_Tutorials/Topics/Running_a_test.html)

