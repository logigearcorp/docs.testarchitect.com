--- 
title: "Configuring the Quality Center connection"
linktitle: "Configuring the Quality Center connection"
description: "Configure a TestArchitect repository to allow it to connect to a Quality Center server."
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_1.html
keywords: "Quality Center, registering servers, HP Quality Center, servers, registering Quality Center, integration, registering servers"
---

Configure a TestArchitect repository to allow it to connect to a Quality Center server.

Ensure that, within the TestArchitect Client repository with which you are working, your account is a member of the [administrators group](/TA_Administration/Topics/User_administration.html). You should also have the URL of the Quality Center server, including the port number.

To set up the TestArchitect repository for integration with an HP Quality Center server:

1.  From a TestArchitect client session, log in to the repository for with an administrative account.

2.  Expand **Administration** \> **Tool Profiles** \> **External Tool** \> **Test Management** node on TestArchitect explorer tree.

    {{<note>}} Only TestArchitect users belonging to the administrator group are able to view and modify the **Administration** node in the explorer tree.

3.  In the expanded list of options, double-click the **Quality Center** node.

    The **Test Management** panel of the **Quality Center** tab appears. This is where you set up the parameters of your Quality Center connection.

4.  Select the **Active** check box to enable the Quality Center external tool.

5.  Enter the following information:

    -   **Available options:** list of options as described below, separated by semicolons.
        -   `server=[QC server url]` \(URL of Quality Center server, including port number, and a directory path, if applicable.\)

            {{<restriction>}} HTTPS is not supported.

        -   `machines={TestArchitect controller network names or IP addresses}` \(Optional. List of TestArchitect controller IP addresses, separated by commas.

            {{<note>}} These are the controllers that will be presented to you as test hosts when you execute tests from Quality Center. \(Note, however, that you will not be restricted to only using controllers from this list.\)

            \)

        -   `title in comment=yes` \(Optional; default = no. Upload TestArchitect test case titles to Quality Center as comments. The values of TestArchitect test case titles are loaded into Quality Center **Comment** fields. See [Mapped items between TestArchitect and Quality Center](/TA_Help/Topics/ug_QC_mapped_items.html#ph_zhz_cg3_tm) for further information\).
    -   **Notes**: \(optional\) Enter any notes.
    Example: server=http://lgvn12989:4040/qcbin; machines= 192.168.167.68,192.168.167.69; title in comment=yes

6.  Click **Apply**.

    {{<caution>}}

    As a general rule, only one test management tool can be active at a time for a given TestArchitect repository. If you select the **Active** check box and click the **Apply** button, the new external tool becomes active and any other tool formerly in use is automatically rendered inactive. For example, activating the Quality Center external tool automatically deactivates the Team Foundation Server external tool.

    Example setup:

    ![](/images/TA_Help/Images/QC_connection.png)

    {{<note>}} Be aware that clicking **Apply** only has the effect of saving the connection and configuration information for later use, as opposed to attempting a connection. It is only later, when direct communication between projects is attempted, that you will receive confirmation that your connection data is correct.


You are now ready to map your project to a project in Quality Center.




