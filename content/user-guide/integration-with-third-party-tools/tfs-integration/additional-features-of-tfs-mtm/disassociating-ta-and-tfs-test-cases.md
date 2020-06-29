--- 
title: "Disassociating TestArchitect and Team Foundation Server test cases in Visual Studio"
linktitle: "Disassociating TestArchitect and Team Foundation Server test cases in Visual Studio"
description: "When you no longer want to keep the association, you can disassociate TestArchitect tests from TFS tests."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_disassociate.html
keywords: "integration, test disassociation, TFS, test disassociation, Microsoft Test Manager, test disassociation"
---

When you no longer want to keep the association, you can disassociate TestArchitect tests from TFS tests.

1.  Start Visual Studio.

2.  Right-click a project, and then select **Disassociate**.

    **Fastpath:** Alternatively, click the **Disassociate** ![](/images/TA_Help/Images/MTM_generate_and_disassociate_test_method_from_testArchitect_btn.png) button on the Visual Studio toolbar.

    {{<note>}} If the **Disassociate** button is not visible on the Visual Studio toolbar, enable the button by right-clicking on the toolbar and selecting **TestArchitect** from the context menu.

3.  In the Connect to Team Foundation Server dialog box, select the server to connect to from the **Team Foundation Server** drop-down box, and then choose the correct team project values for **Team Project Collections** and **Team Projects**. Click **Connect** to establish an association between TFS and TestArchitect.

    ![](/images/TA_Help/Images/Connect_to_TFS_from_VS.png)

4.  In the Select Test Plan dialog box, choose a test plan, then click **Select plan** to proceed.

    ![](/images/TA_Help/Images/select_test_plan_VS.png)

5.  In the Disassociate Tests dialog box, select the test suites and test cases to disassociate from the tests. After you finish selecting the desired tests, click **Disassociate**.

    ![](/images/TA_Help/Images/VS_select_test_to_disassociate.png)

    {{<tip>}} Filtering TFS test cases:

    -   In the Disassociate Tests dialog box, you can select the **Filter** button to narrow down the list of test cases displayed based on the selected conditions.

        ![](/images/TA_Help/Images/TFS_association_filters.png)

    -   In the Advanced filter dialog box, by defining one or more clauses, you can filter from work items to return the set of work items that interest you. For more information about query fields, operators, and macros, see [here](https://docs.microsoft.com/en-us/vsts/work/track/query-operators-variables).
    -   To temporarily disable the specified filtering conditions, in the Disassociate Tests dialog box, clear the check box as follows.

        ![](/images/TA_Help/Images/TA_TFS_association_filtering.png)

    -   To remove totally the specified filtering conditions, in the Disassociate Tests dialog box, click **X** as follows.

        ![](/images/TA_Help/Images/TA_TFS_association_filtering_remove.png)

    -   If the test disassociation fails due to some reasons, you will see the following error dialog box. Click **View Log File** to troubleshoot, if needed.

        ![](/images/TA_Help/Images/TA_TFS_disassociation_failed.png)

    -   If the test disassociation succeeds, a confirmation dialog box appears.

        ![](/images/TA_Help/Images/TA_MTM_disassociation_dlg.png)

6.  Click **OK** to exit the confirmation dialog box.

    Under the **TestArchitect\_Generated** folder, test methods, which have been previously generated during association process, is removed.

    ![](/images/TA_Help/Images/VS_project_after_disassociate.png)

7.  [Check in](https://docs.microsoft.com/en-us/vsts/tfvc/check-your-work-team-codebase?view=vsts#choose-the-files-you-want-to-check-in) your test method on the TFS server.

    {{<remember>}} For TFS 2017, you are required to explicitly check in the following DLL LogiGear.TestArchitect.TAIntegrationLoader.dll

    ![](/images/TA_Help/Images/check_in_TA_dll.png)




