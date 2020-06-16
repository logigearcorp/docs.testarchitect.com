--- 
title: "Creating a test module"
linktitle: "Creating a test module"
description: "Create a simple test module that outputs the text string hello world."
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Creating_a_test_module.html
keywords: "test modules, creating"
---

Create a simple test module that outputs the text string hello world.

**Before proceeding:**Start TestArchitect by going to **Start** \> **All Programs** \> **TestArchitect** \> **TestArchitect Client**.

TestArchitect, in support of the Action Based Testing model, is built around test modules. Test modules are essentially worksheets containing sequential steps.

1.  Double-click the SampleRepository node in the TestArchitect explorer tree to open the Log In dialog box.

    The first time you log in to a new repository, you see administrator as the **User Name**. For the purposes of this tutorial you can use this user name and leave the **Password** field empty.

2.  Click **OK** to log in.

    Once logged in, the TestArchitect explorer tree for this repository can be expanded.

3.  Expand the **Car Rental** project node in the TestArchitect explorer tree by clicking the **+** symbol next to the node.

4.  In the TestArchitect explorer tree, select any item within the current project, then click **Create new test module** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestModule.png) in the toolbar.

    The New Test Module dialog box appears.

5.  In the **Name** field, type Hello World.

6.  Click **Create**.

    Your new test module appears as a node in the TestArchitect explorer tree. At the same time, a worksheet opens in the main panel. This is the TestArchitect test editor. The editor contains numbered rows and lettered columns. A black border around one of the cells, the cell pointer, indicates the current position for text entry. Use your mouse or the keyboard's arrow keys to move the cell pointer.

    ![](/images/TA_Tutorials/Images/tut.Simple_Tests.creating01.png)

    Also note that the test module template, as described in the topic [The test module and template](/TA_Tutorials/Topics/The_test_module_template.html) has been inserted into the editor. The template contains various *test support* actions \(test case, test objective, `INITIAL`, etc.\) which are not executed at run time. These actions are both documentary, and serve as a means of partitioning the test module into parts that can be executed separately.

7.  A test module template is displayed in the editor. test case is on cell **A14** \(column A, row A14\).

    This action will not be executed during runtime. It serves as a means of partitioning the test module into parts that can be executed separately.

    Notice that as you type in the cell an autocomplete drop-down list box appears, showing available actions matching your text entry that are available for selection. As you highlight each action in the list, a description of that action appears below the list. If you misspell an action name, the entry appears in red text, alerting you to the fact that no such action has been defined.

    **Note:** Upon entry of the string the row turns gray. This behavior is unique to the test case action. The editor does this for readability, so that the beginning of each test case in a test module is easily identifiable.

8.  TO01 appears on cells B4 and B15 as the ID for the first test objective.

9.  TC01 appears on cell **B14** as the ID for this test case.

10. Select cell **C14** \(one cell to the right\) and enter Say hello to the world as the short description for this test case.

    ![](/images/TA_Tutorials/Images/tut.Simple_Tests.creating03.png)

11. Select cell **C4** and type Say hello as a short description for this test objective.

12. Write your first executable action. Select cell A18 and type report.

    **Note:** As you type, autocomplete displays a drop-down list box of matching action names.

13. In the autocomplete pop-up window, use the Up and Down arrow keys to navigate to report and press Enter.

14. Select cell **B18** and type hello world. Press Enter.

    During execution, the string hello world will be passed to the report action as an argument value.

    Your screen should now resemble the image below. You have created your first test module, which consists of a single executable action and you are ready to run your first test.

    ![](/images/TA_Tutorials/Images/tut.Simple_Tests.creating04.png)





**Related information**  


[Test Modules](/TA_Help/Topics/ABT_Test_module.html)

[Creating a test module](/TA_Help/Topics/Create_test_module.html)

