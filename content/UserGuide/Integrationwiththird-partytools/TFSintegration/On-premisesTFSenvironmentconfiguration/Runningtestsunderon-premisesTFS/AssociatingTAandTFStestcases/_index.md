--- 
title: "Associating TestArchitect and Team Foundation Server test cases in Visual Studio"
linktitle: "Associating TA and TFS test cases"
weight: 6
aliases: 
    - /TA_Help/Topics/ug_MTM_associate.html
---
# Associating TestArchitect and Team Foundation Server test cases in Visual Studio {#task_erl_3kg_sq .task}

To execute TestArchitect test cases from MTM or the Test Hub, an association between TestArchitect tests and Team Foundation Server tests must be created in the related Visual Studio project.

Ensure that you have already taken the following step\(s\):

-   [Created](Integration_MTM_creating_vs_project.html) TA-TFS integration project.

Running TA tests from MTM requires two types of associations:

-   the mappings of TA and TFS test cases in the two respective systems, discussed elsewhere; and
-   a process of association in the related Visual Studio project. This process automatically generates C\# code snippets in Microsoft Visual Studio to link the TA and TFS test cases.

1.  Start Visual Studio.

2.  Right-click a project, and then select **Associate**.

    **Fastpath:** Alternatively, click the **Associate** ![](../Images/MTM_generate_and_associate_test_method_from_testArchitect_btn.png) button on the Visual Studio toolbar.

    **Note:** If the **Associate** button is not visible on the Visual Studio toolbar, enable the button by right-clicking on the toolbar and selecting **TestArchitect** from the context menu.

3.  In the Connect to Team Foundation Server dialog box, select the server to connect to from the **Team Foundation Server** drop-down box, and then choose the correct team project values for **Team Project Collections** and **Team Projects**. Click **Connect** to establish an association between TFS and TestArchitect.

    ![](../Images/Connect_to_TFS_from_VS.png)

4.  In the Select Test Plan dialog box, choose a test plan, then click **Select plan** to proceed.

    ![](../Images/select_test_plan_VS.png)

5.  In the Associate Tests dialog box, select the test suites and test cases to associate with the tests. Tests which have been associated previously are selected automatically. After you finish selecting the desired tests, click **Associate**.

    ![](../Images/VS_select_test_to_associate.png)

    **Tip:**

    -   TFS test cases that have not been associated are indicated in GREEN. Whereas, TFS test cases that have been associated are indicated in BLUE. Note that, if you select associated TFS test cases, they will be re-associated.
    -   Filtering TFS test cases:
        -   In the Associate Tests dialog box, you can select the **Filter** button to narrow down the list of test cases displayed based on the selected conditions.

            ![](../Images/TFS_association_filters.png)

        -   In the Advanced filter dialog box, by defining one or more clauses, you can filter from work items to return the set of work items that interest you. For more information about query fields, operators, and macros, see [here](https://docs.microsoft.com/en-us/vsts/work/track/query-operators-variables).
        -   To temporarily disable the specified filtering conditions, in the Associate Tests dialog box, clear the check box as follows.

            ![](../Images/TA_TFS_association_filtering.png)

        -   To remove totally the specified filtering conditions, in the Associate Tests dialog box, click **X** as follows.

            ![](../Images/TA_TFS_association_filtering_remove.png)

    -   If the test association fails due to some reasons, you will see the following error dialog box. Click **View Log File** to troubleshoot, if needed.

        ![](../Images/TA_TFS_association_failed.png)

    -   If the test association succeeds, a confirmation dialog box appears.

        ![](../Images/TA_MTM_association_dlg.png)

6.  Click **OK** to exit the confirmation dialog box.

    -   Under the **TestArchitect\_Generated** folder, test methods are generated in the project as follows:

        ![](../Images/VS_project_after_associate.png)

    -   In MTM, information on the association is added into test cases as follows:

        ![](../Images/MTM_association_added_toTC.png)

7.  [Check in](https://docs.microsoft.com/en-us/vsts/tfvc/check-your-work-team-codebase?view=vsts#choose-the-files-you-want-to-check-in) your test method on the TFS server.

    **Remember:** For TFS 2017, you are required to explicitly check in the following DLL LogiGear.TestArchitect.TAIntegrationLoader.dll

    ![](../Images/check_in_TA_dll.png)


Microsoft Visual Studio automatically generates C\# code snippets which associate the TestArchitect test cases with the TFS test cases. You normally do not need to edit the generated snippets. However, you should verify that the test case IDs for each test method match the associated IDs.

![](../Images/MTM_generated_code.png)

In the above example, four C\# test methods have been generated \(one method for each test case\) for the four TestArchitect test cases \(TC01, TC02, TC03, and TC04\). Each method consists of a call to RunTestCase, which starts the execution of the TestArchitect test case whose source field maps to the TFS test cases with identifiers 703, 704, 705, and 706 respectively.

**Important:** This task is one that must often be repeated, especially when you have modified mapped TFS test cases. \(For example, you remove or add test cases, or change the order of a test case run.\) When you do so, the association between TFS test cases and Visual Studio test methods/TestArchitect test cases is compromised. Hence, it is necessary that you perform the following steps again:

1.  Re-[associate](ug_MTM_associate.html) TestArchitect test cases with TFS test cases.
2.  Check in your project.
3.  [Queue](ug_MTM_queue_build.html) the build.

**Parent topic:**[Running automated tests under on-premises Team Foundation Server](../../TA_Help/Topics/ug_MTM_test_execution.html)

**Previous topic:**[Creating TestArchitect-Team Foundation Server projects in Visual Studio](../../TA_Help/Topics/Integration_MTM_creating_vs_project.html)

**Next topic:**[Creating and queueing team builds in TFS-MTM](../../TA_Help/Topics/ug_MTM_test_execution_creating_team_builds.html)

