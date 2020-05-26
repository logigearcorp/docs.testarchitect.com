--- 
title: "Registering the Zephyr server"
linktitle: "Registering the Zephyr server"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_Zephyr_registering_server.html
---
# Registering the Zephyr server {#task_h3d_hp3_jp .task}

Registering the Zephyr server is the first action you need to perform to prepare a TestArchitect-Zephyr integrated environment.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

Before registering the Zephyr server with TestArchitect, open TestArchitect Client and ensure that you have [administrator group](../../TA_Administration/Topics/User_administration.html) login privileges for the TestArchitect repository you will be using. Also make sure you have the following Zephyr server information:

-   URL of the Zephyr server, including the port number it is using.
-   Zephyr login credentials.
-   A valid Zephyr license key.

To register the Zephyr server with TestArchitect, carry out the following procedures:

1.  In TestArchitect Client, log in to the repository for your project.

2.  In the TestArchitect explorer tree, expand the **Administration** \> **Tool Profiles** \> **External Tool** \> **Test Management** node.

    **Note:** Only TestArchitect users belonging to the administrator group are able to view and modify the **Administration** node in the explorer tree.

3.  In the expanded list of options, double-click the **Zephyr** node.

    The **Test Management** tab appears in the editor window.

4.  Select the **Active** check box to enable the Zephyr connection.

5.  Enter the following information:

    -   **Available options**: URL of Zephyr server, including port number.

        **Note:** Both HTTP and HTTPS are supported.

        -   Syntax: `server=[Zephyr server]`
        -   Example: server=http://lgvn1434:81
    -   **Notes**: \(Optional\) Enter any notes.
    ![](../Images/Zephyr_registering_server.png)

6.  Click **Apply**.

    **Important:**

    -   If you have specified HTTPS and the Zephyr server's identity has not been verified by a trusted third-party, or the SSL certificate installed on your test machine has expired, a Verify Certificate security alert is displayed. To install the SSL certificate, click the **Accept** button.

        ![](../Images/Zephyr_verify_cert_dlg.02.png)

    -   As a general rule, only one test management tool can be active at a time for a given TestArchitect repository. If you select the **Active** check box and click the **Apply** button, the new external tool becomes active and any other tool formerly in use is automatically rendered inactive. For example, activating the Quality Center external tool automatically deactivates the Team Foundation Server external tool.

The connection between TestArchitect and Zephyr server is established.

**Parent topic:**[Setting up the connection with Zephyr](../../TA_Help/Topics/ug_Zephyr_setting_up_connection.html)

**Next topic:**[Mapping a TestArchitect project to a Zephyr project](../../TA_Help/Topics/ug_Zephyr_mapping_projects.html)

