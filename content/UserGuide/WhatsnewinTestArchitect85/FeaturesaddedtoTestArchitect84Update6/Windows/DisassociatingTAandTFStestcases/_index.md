--- 
title: "Disassociating TestArchitect and Team Foundation Server test cases in Visual Studio"
linktitle: "Disassociating TA and TFS test cases"
aliases: 
    - /TA_Help/Topics/ug_MTM_disassociate.html
---
# Disassociating TestArchitect and Team Foundation Server test cases in Visual Studio {#task_zbj_ztb_wbb .task}

When you no longer want to keep the association, you can disassociate TestArchitect tests from TFS tests.

1.  Start Visual Studio.

2.  Right-click a project, and then select **Disassociate**.

    **Fastpath:** Alternatively, click the **Disassociate** ![](../Images/MTM_generate_and_disassociate_test_method_from_testArchitect_btn.png) button on the Visual Studio toolbar.

    **Note:** If the **Disassociate** button is not visible on the Visual Studio toolbar, enable the button by right-clicking on the toolbar and selecting **TestArchitect** from the context menu.

3.  In the Connect to Team Foundation Server dialog box, select the server to connect to from the **Team Foundation Server** drop-down box, and then choose the correct team project values for **Team Project Collections** and **Team Projects**. Click **Connect** to establish an association between TFS and TestArchitect.

    ![](../Images/Connect_to_TFS_from_VS.png)

4.  In the Select Test Plan dialog box, choose a test plan, then click **Select plan** to proceed.

    ![](../Images/select_test_plan_VS.png)

5.  In the Disassociate Tests dialog box, select the test suites and test cases to disassociate from the tests. After you finish selecting the desired tests, click **Disassociate**.

    ![](../Images/VS_select_test_to_disassociate.png)

    **Tip:** Filtering TFS test cases:

    -   In the Disassociate Tests dialog box, you can select the **Filter** button to narrow down the list of test cases displayed based on the selected conditions.

        ![](../Images/TFS_association_filters.png)

    -   In the Advanced filter dialog box, by defining one or more clauses, you can filter from work items to return the set of work items that interest you. For more information about query fields, operators, and macros, see [here](https://docs.microsoft.com/en-us/vsts/work/track/query-operators-variables).
    -   To temporarily disable the specified filtering conditions, in the Disassociate Tests dialog box, clear the check box as follows.

        ![](../Images/TA_TFS_association_filtering.png)

    -   To remove totally the specified filtering conditions, in the Disassociate Tests dialog box, click **X** as follows.

        ![](../Images/TA_TFS_association_filtering_remove.png)

    -   If the test disassociation fails due to some reasons, you will see the following error dialog box. Click **View Log File** to troubleshoot, if needed.

        ![](../Images/TA_TFS_disassociation_failed.png)

    -   If the test disassociation succeeds, a confirmation dialog box appears.

        ![](../Images/TA_MTM_disassociation_dlg.png)

6.  Click **OK** to exit the confirmation dialog box.

    Under the **TestArchitect\_Generated** folder, test methods, which have been previously generated during association process, is removed.

    ![](../Images/VS_project_after_disassociate.png)

7.  [Check in](https://docs.microsoft.com/en-us/vsts/tfvc/check-your-work-team-codebase?view=vsts#choose-the-files-you-want-to-check-in) your test method on the TFS server.

    **Remember:** For TFS 2017, you are required to explicitly check in the following DLL LogiGear.TestArchitect.TAIntegrationLoader.dll

    ![](../Images/check_in_TA_dll.png)


**Parent topic:**[Additional features of TFS-MTM](../../TA_Help/Topics/ug_MTM_features.html)

**Next topic:**[Creating matching custom fields in TestArchitect and Team Foundation Server](../../TA_Help/Topics/ug_MTM_matching_custom_fields.html)

