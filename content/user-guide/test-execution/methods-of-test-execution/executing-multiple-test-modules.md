--- 
title: "Executing multiple test modules"
linktitle: "Executing multiple test modules"
description: "There are several means of running multiple test modules sequentially within a test run."
weight: 3
aliases: 
    - /TA_Help/Topics/Test_exec_multiple_TM.html
keywords: "serial test run, execution, serial, of multiple test modules, of test folders, of test suites, test modules, executing multiple"
---

There are several means of running multiple test modules sequentially within a test run.

You can choose among the following methods to execute multiple test modules at once.

-   Option \#1: Add test modules to the Execute Test dialog box.

    Since test modules are executed in sequence, this is known as a serial test run.

    1.  In the TestArchitect explorer tree, expand **<Project Name** \> **Tests**.

    2.  Select first test module to be executed, and then invoke the Execute Test dialog box by doing one of the following:

        -   Right-click the selection, and then select **Execute Test**.
        -   Alternatively, click the **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) button on the toolbar.
    3.  Drag other test modules to be executed node from the TestArchitect explorer tree, and then drop them into the Test Modules panel in the Execute Test dialog box.

        ![](/images/TA_Help/Images/ug_testexecution1.png)

        {{<note>}}

        -   If the dragged-and-dropped test module is a [variation](/user-guide/tests/creating-a-test-module-variation), the **Keyword** and/or **AUT version** boxes are automatically filled in.

            ![](/images/TA_Help/Images/ug_testexecution1_tm_var.png)

        -   If the first-selected test module is a [variation](/user-guide/tests/creating-a-test-module-variation), the dragged-and-dropped is too. However, these two variations both belong to a same [default variation](/user-guide/variations/default-variations). The latter replaces the former in the Execute Test dialog box, and its **Keyword** and/or **AUT Version**'s information.
    4.  In the Execute Test dialog box, click the **Execute** button.

-   Option \#2: Execute a [test folder](/user-guide/tests/creating-a-test-folder).

    This has the same effect as Option \#1, in that multiple test modules are loaded into the Execute Test dialog box. Hence this is just another means of initiating a serial test run.

    1.  In the TestArchitect explorer tree, expand **<Project Name** \> **Tests**.

    2.  Select a test folder, and then invoke the Execute Test dialog box by doing one of the following:

        -   Right-click the selection, and then select **Execute Test**.
        -   Alternatively, click the **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) button on the toolbar.
        {{<note>}} If the selected test folder contains a [default test module](/user-guide/variations/default-variations) and its respective [variations](/user-guide/tests/creating-a-test-module-variation). You will see the following warning message. Since at a time, only one variation of a given test module can be executed.

        ![](/images/TA_Help/Images/execution_test_folder_variation.png)

        After clicking **OK**, the variation located at the last position in the TestArchitect explorer tree is automatically picked up and displayed on the Test Modules panel.

        ![](/images/TA_Help/Images/Execute_test_dlg_TM_variation.png)

    3.  In the Execute Test dialog box, click the **Execute** button.

-   Option \#3: Executing a [test suite](/user-guide/projects-and-project-items/project-items/test-suites/).

    This again is another means of achieving a serial test run.

    1.  In the TestArchitect explorer tree, expand **<Project Name** \> **Test Suites**.

    2.  Select a test suite or a test suite folder, and then invoke the Execute Test dialog box by doing one of the following:

        -   Right-click the selection, and then select **Execute Test**.
        -   Alternatively, click the **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) button on the toolbar.
        ![](/images/TA_Help/Images/execution_test_suite.png)

    3.  In the Execute Test dialog box, click the **Execute** button.

    {{<tip>}} In the cases of Options \#1 through \#3, when the Execute Test dialog appears, you have the option to pick and choose which test modules and test cases are to be executed during the test.

-   Option \#4: Using the [run test](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/run-test) built-in action.

    This method allows a test module to spawn the execution of other test modules during the course of its execution. In this case, the spawned tests are regarded as subtests.

    1.  In the TestArchitect explorer tree, expand **<Project Name** \> **Tests**.

    2.  Double-click a test module to open it on the test editor.

        This module is used to launch other test modules during its execution.

    3.  Drag other test modules to be executed from the TestArchitect explorer tree into the open test editor.

        TestArchitect automatically inserts a run test action line for each of the dropped-in test modules.

        ![](/images/TA_Help/Images/ug_testexecution2.png)

        {{<important>}} If the dragged-and-dropped test module is a [variation](/user-guide/tests/creating-a-test-module-variation), the test module's name in the name argument of run test is just a default, not a variation.

    4.  In the TestArchitect explorer tree, select the test module node.

    5.  Invoke the Execute Test dialog box by doing one of the following:

        -   Right-click the selection, and then select **Execute Test**.
        -   Alternatively, click the **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) button on the toolbar.
    6.  In the Execute Test dialog box, click the **Execute** button.





