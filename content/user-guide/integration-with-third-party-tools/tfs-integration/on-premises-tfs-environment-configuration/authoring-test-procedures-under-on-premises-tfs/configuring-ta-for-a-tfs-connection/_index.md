--- 
title: "Configuring TestArchitect for a Team Foundation Server® connection"
linktitle: "Configuring TA for a TFS connection"
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_MTM_connecting_TFS.html
---

Use the TestArchitect external tool to set up a repository for integration with a Team Foundation Server \(TFS\) server.

1.  Log in to a TestArchitect repository.

2.  Under the appropriate repository node of the TestArchitect explorer tree, expand the subtree **Administration** \> **Tool Profiles** \> **External Tool** \> **Test Management**.

    **Note:** Only TestArchitect users belonging to the administrator group are able to view and modify the **Administration** node in the explorer tree.

3.  In the expanded list of options, double-click **Team Foundation Server**.

4.  In the TEST MANAGEMENT window, select the **Active** check box to enable the Team Foundation Server connection.

5.  In the **Available options** box, type server= \[Full web access URL of your TFS server\]. For example, server=http://lgvn13388:8080/tfs

    **Tip:** You can find the **Web Access URL** in the **Application Tier** node from the Team Foundation Server Administration Console dialog box. \([Learn more.](http://msdn.microsoft.com/en-us/library/vstudio/dd273718(v=vs.110).aspx)\)

    ![](/images//Images/Get_URL_from_TFSAC.png)

6.  Select **Uploading Method**, TestArchitect supports two types of uploading methods:

    -   TFS Helper - All version of Team Foundation Server \(Default\) \([Learn more](/TA_Help/Topics/ug_MTM_upload_result_automatic.html#)\)
    -   Rest API - Team Foundation Server 2015 Update 4 \([Learn more](/TA_Help/Topics/ug_MTM_upload_result_automatic.html#)\)

        **Note:** Rest API - Team Foundation Server 2015 Update 4 option only support for Automatically uploading results to TFS.

        ![](/images//Images/TFS_upload_method.png)

7.  Next to **Test Result Status Mapping**, define the special mapping status between TestArchitect test results and TFS outcomes. \([Learn more](/TA_Help/Topics/ug_MTM_mapping_result_table.html).\)

    ![](/images//Images/ug_MTM_mapping_results.png)

8.  Click **Apply**.


CAUTION:

As a general rule, only one test management tool can be active at a time for a given TestArchitect repository. If you select the **Active** check box and click the **Apply** button, the new external tool becomes active and any other tool formerly in use is automatically rendered inactive. For example, activating the Quality Center external tool automatically deactivates the Team Foundation Server external tool.

**Parent topic:**[Authoring test procedures under Team Foundation Server](/TA_Help/Topics/ug_MTM_set_up_TA.html)

**Previous topic:**[Team Foundation Server-Microsoft Test Manager prerequisites for TestArchitect](/TA_Help/Topics/ug_MTM_test_development_prerequisites.html)

**Next topic:**[Mapping a TestArchitect project to a Team Foundation Server project](/TA_Help/Topics/Integration_MTM_map_proj.html)

