--- 
title: "Mapping TestArchitect test cases to Quality Center tests"
linktitle: "Mapping TestArchitect test cases to Quality Center tests"
weight: 4
aliases: 
    - /TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_3.html
---
# Mapping TestArchitect test cases to Quality Center tests {#QC_connection_step3 .task}

Mapping TestArchitect test cases to Quality Center tests allows for the execution of those test cases to be directed from Quality Center.

Ensure that the machine hosting the TestArchitect repository server has the **HP ALM Connectivity Add-in** installed, to allow for integration and synchronization between TestArchitect and HP Quality Center.

Ensure that you have already taken the following steps:

-   [Registered the Quality Center server with TestArchitect](Integration_QC_connecting_repo_to_QC_server_step_1.html).
-   [Mapped the TestArchitect project](Integration_QC_connecting_repo_to_QC_server_step_2.html) containing the test cases of interest to the Quality Center project.

To map TestArchitect test cases to Quality Center tests:

1.  In the TestArchitect explorer tree, right-click the node of a test module \(either [default](Variations_default.html) or non-default [variation](ug_TM_create_variation.html)\) containing the test cases to be mapped, or a test folder, or the **Tests** node itself, and then click **External Tool** \> **HP ALM** \> **Map Test Cases**.

    As you may guess, the higher the level of the node you click, the "wider the net" you cast for eligible test cases.

    The Map Test Cases dialog box is launched, displaying a list of all TestArchitect test cases falling within scope of the clicked node.

2.  In the list of test cases, for each test case that you wish to have mapped to a Quality Center test, enter the Quality Center Test ID into the **Source** column.

    ![](../Images/QC_map_TC.png)

    **Important:**

    -   For each mapping, the Quality Center test must already exist, and must have its **Type** field set to the value VAPI-XP-TEST .
    -   Mappings between TestArchitect test cases and Quality Center tests are restricted to a 1-to-1 basis. \(That is, one-to-many mappings are not permitted.\)
3.  Click **OK**.

    **Note:** If your user name has not already been authenticated by Quality Center for the current session, you will be prompted to enter the password for the account.

    -   If any of the selected Quality Center tests are already mapped to other TestArchitect test cases, the dialog box remains in place, and the source IDs of those tests are displayed in red.

        ![](../Images/QC_mapTC_error_2_dlg.png)

        -   In order to see which TestArchitect test case is currently associated with a given Quality Center test, click the red source ID.
        -   In each case, enter a different Quality Center Test ID, then click **OK**.
    -   If any problems occur during the test case mappings, a dialog box appears listing the test cases that could not be mapped to Quality Center. Close it, try and resolve the problem, and try again.

        ![](../Images/QC_mapTC_error_dlg.png)


Successfully mapped test cases may be viewed in Quality Center.

**Parent topic:**[Setting up the connection with Quality Center](../../TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server.html)

**Previous topic:**[Mapping a TestArchitect project to a Quality Center project](../../TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_2.html)

