--- 
title: "Mapped items between TestArchitect and Quality Center"
linktitle: "Mapped items between TestArchitect and Quality Center"
description: "This topic describes how TestArchitect test module and test case information is mapped to the corresponding Quality Center test fields."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_QC_mapped_items.html
keywords: "integration, Quality Center, mapped items, mapped items"
---

This topic describes how TestArchitect test module and test case information is mapped to the corresponding Quality Center test fields.

TestArchitect items are uploaded to Quality Center as follows:

-   Uploading a test module to Quality Center also uploads that module's test cases.
-   Each TestArchitect test case's **Title** and **ID** fields are combined and joined by an underscore to become a Quality Center **test case name**.
-   Each TestArchitect test module/test case description \(found on the **Information** tab of the item\) is copied to the corresponding Quality Center test case, where it may be found in the **Description** subtab under the test plan's **Detail** tab.

    ![](/images/TA_Help/Images/Integration_QC_description.png)

-   Each TestArchitect **test objective** is copied to the corresponding Quality Center test case or test module. However, for this to take effect, you must have created a **Memo** user field in Quality Center, naming it test objective, prior to the upload. The textual objective is located in the Quality Center's **test objective** tab within the test plan's **Detail** tab.

    ![](/images/TA_Help/Images/Integration_QC_test_objective.png)

-   If you declare the option `title in comment=yes` in the [Registering the Quality Center server](/TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_1.html#cmd_qjl_z23_tm) step, each TestArchitect test case's title is transferred to the corresponding Quality Center test case. This textual title is located in Quality Center's **Comments** tab within the test plan's **Detail** tab.![](/images/TA_Help/Images/Integration_QC_TC_title.png)


-   Detailed step levels for both test module and test cases are uploaded to Quality Center. You can view the detailed step-by-step execution results in Quality Center from its Test Lab's **Execution Grid** tab. Select a test module or test case on the **Execution Grid** tab to view its step-by-step results in the **Last Run Report** tab as illustrated below:

    ![](/images/TA_Help/Images/Integration_QC_step_levels.png)



