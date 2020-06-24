--- 
title: "Configuring TestArchitect for a Team Foundation Server® connection"
linktitle: "Configuring TestArchitect for a Team Foundation Server® connection"
description: "Use the TestArchitect external tool to set up a repository for integration with a Team Foundation Server (TFS) server."
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_MTM_connecting_TFS.html
keywords: "Microsoft Test Manager, connecting Team Foundation Server, MTM, connecting Team Foundation Server, Team Foundation Server, connecting, Microsoft Test Manager, integration, connecting Team Foundation Server"
---

Use the TestArchitect external tool to set up a repository for integration with a Team Foundation Server \(TFS\) server.

1.  Log in to a TestArchitect repository.

2.  Under the appropriate repository node of the TestArchitect explorer tree, expand the subtree **Administration** \> **Tool Profiles** \> **External Tool** \> **Test Management**.

    {{<note>}} Only TestArchitect users belonging to the administrator group are able to view and modify the **Administration** node in the explorer tree.

3.  In the expanded list of options, double-click **Team Foundation Server**.

4.  In the TEST MANAGEMENT window, select the **Active** check box to enable the Team Foundation Server connection.

5.  In the **Available options** box, type server= \[Full web access URL of your TFS server\]. For example, server=http://lgvn13388:8080/tfs

    {{<tip>}} You can find the **Web Access URL** in the **Application Tier** node from the Team Foundation Server Administration Console dialog box. \([Learn more.](http://msdn.microsoft.com/en-us/library/vstudio/dd273718(v=vs.110).aspx)\)

    ![](/images/TA_Help/Images/Get_URL_from_TFSAC.png)

6.  Select **Uploading Method**, TestArchitect supports two types of uploading methods:

    -   TFS Helper - All version of Team Foundation Server \(Default\) \([Learn more](/TA_Help/Topics/ug_MTM_upload_result_automatic.html#)\)
    -   Rest API - Team Foundation Server 2015 Update 4 \([Learn more](/TA_Help/Topics/ug_MTM_upload_result_automatic.html#)\)

        {{<note>}} Rest API - Team Foundation Server 2015 Update 4 option only support for Automatically uploading results to TFS.

        ![](/images/TA_Help/Images/TFS_upload_method.png)

7.  Next to **Test Result Status Mapping**, define the special mapping status between TestArchitect test results and TFS outcomes. \([Learn more](/TA_Help/Topics/ug_MTM_mapping_result_table.html).\)

    ![](/images/TA_Help/Images/ug_MTM_mapping_results.png)

8.  Click **Apply**.


{{<caution>}}

As a general rule, only one test management tool can be active at a time for a given TestArchitect repository. If you select the **Active** check box and click the **Apply** button, the new external tool becomes active and any other tool formerly in use is automatically rendered inactive. For example, activating the Quality Center external tool automatically deactivates the Team Foundation Server external tool.




