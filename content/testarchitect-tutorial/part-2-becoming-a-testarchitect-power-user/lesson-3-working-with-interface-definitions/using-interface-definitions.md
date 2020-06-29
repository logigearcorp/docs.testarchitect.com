--- 
title: "Using interface definitions"
linktitle: "Using interface definitions"
description: "Write and execute a test that makes use of the interface definitions you have created."
weight: 5
aliases: 
    - /TA_Tutorials/Topics/Using_interface_definitions.html
keywords: "definitions, using interfaces, test cases, creating, interfaces, using definitions"
---

Write and execute a test that makes use of the interface definitions you have created.

**Before proceeding:** Ensure that you have created the interface entity my login as described in the preceding lesson.

In this exercise you will write a simple test case that uses your interface definitions for the Login window to enter text into the **User name** and **Password** fields. To do this you will create the following:

-   A test case action line with descriptive information.
-   A use interface action that directs TestArchitect to use interface named Car Rental.
-   An enter action, to enter text into the **User name** field. This action needs to be provided a window, , a control residing in that window, and the text to be entered into that control. Hence, you will specify:
    -   The Car Rental-Login window. You do this by assigning the TA name **my login** – the name of the interface entity you created earlier - to the action’s window argument.
    -   The **User name** text box. You do this by assigning TA name **my user name** – defined in one of your interface element actions – to the action’s controlargument.
    -   The text to be entered into the **User name** field.
-   Another enter action to supply the password. In a similar manner as before, you will specify TA names for the window \(same window\) and the **Password** field, as well as text \(the password\).

1.  In the TestArchitect explorer tree, select any item within the current project, then click **Create new test module** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestModule.png) in the toolbar.

    The New Test Module dialog box appears.

2.  In the **Name** field, type My login test and click **Create**.

3.  {{<note>}} The new test module appears in the editor with a default template containing suggested basic components for a well-designed test. For this lesson, you only need the TEST CASE section.

    In the editor, delete all content except for the TEST CASE line. Optionally, you can also delete any blank lines above the TEST CASE line.

    You are now ready to begin writing your action lines.

4.  Enter the actions and arguments as described above:

    ![](/images/TA_Tutorials/Images/tut.Interface_Defs.Login_Test01.png)

5.  Run your test against the Car Rental's Login window:
6.  If you have not already done so, start the Car Rental application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.

    The login window appears.

    ![](/images/TA_Tutorials/Images/app.Car_Rental.Login.unmodified.png)

7.  Click **Clear**.

    This clears the text fields so that you can better see the effect of your test's actions.

8.  With your test module displayed in the TestArchitect editor, click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

9.  Click **Execute**.

    The status bar indicates the stages of the test as it progresses. Upon test completion, the newly generated results page is displayed showing that the test case passed \(only because no actual test was performed\), and the login screen of the Car Rental application displays the text entered by your test:

    ![](/images/TA_Tutorials/Images/tut.Interface_Defs.Login_Test01_Effect.png)





**Related information**  


[Interface definitions](/user-guide/introduction-to-action-based-testing/action-based-testing/interface-definitions)

[Interface definitions](/user-guide/interface-definitions/)

[Capturing interface definitions](/user-guide/interface-definitions/the-interface-viewer/capturing-interface-definitions)

