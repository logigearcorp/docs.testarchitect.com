--- 
title: "Configuring TA for an Azure DevOps connection"
linktitle: "Configuring TA for an Azure DevOps connection"
aliases: 
    - /TA_Help/Topics/Azure_DevOps_configuration.html
---
# Configuring TA for an Azure DevOps connection {#task_i3n_15s_4v .task}

Use the TestArchitect external tool to set up a repository for integration with an Azure DevOps account.

To configure TA for an integration with an Azure DevOps account, do the following:

1.  Log in to a TestArchitect repository.

2.  Under the appropriate repository node of the TestArchitect explorer tree, expand the subtree **Administration** \> **Tool Profiles** \> **External Tool** \> **Test Management**.

    **Note:** Only TestArchitect users belonging to the administrator group are able to view and modify the **Administration** node in the explorer tree.

3.  In the expanded list of options, double-click **Team Foundation Server**.

4.  In the TEST MANAGEMENT window, select the **Active** check box to enable the Team Foundation Server connection.

5.  In the **Available options** box, type server=https://dev.visualstudio.com/<organization\> or server=https://<organization\>.visualstudio.com

6.  Next to **Test Result Status Mapping**, define the special mapping status between TestArchitect test results and TFS outcomes. \([Learn more](ug_MTM_mapping_result_table.html).\)

    ![](../Images/ug_MTM_mapping_results.png)

7.  Click the **Apply** button


CAUTION:

As a general rule, only one test management tool can be active at a time for a given TestArchitect repository. If you select the **Active** check box and click the **Apply** button, the new external tool becomes active and any other tool formerly in use is automatically rendered inactive. For example, activating the Quality Center external tool automatically deactivates the Team Foundation Server external tool.

**Parent topic:**[Azure DevOps](../../TA_Help/Topics/Azure_DevOps_running_automated_tests.html)

**Next topic:**[Mapping a TA project to an Azure DevOps project](../../TA_Help/Topics/Azure_DevOps_project_mapping.html)

