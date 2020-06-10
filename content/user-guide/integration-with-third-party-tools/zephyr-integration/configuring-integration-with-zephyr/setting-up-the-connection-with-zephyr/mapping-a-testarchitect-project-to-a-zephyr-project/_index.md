--- 
title: "Mapping a TestArchitect project to a Zephyr project"
linktitle: "Mapping a TestArchitect project to a Zephyr project"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_Zephyr_mapping_projects.html
---

Mapping a TestArchitect project to a project in Zephyr allows for tests to be transferred bidirectionally between the two projects.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

Before proceeding, ensure that your TestArchitect test machine has [registered the Zephyr server](/TA_Help/Topics/ug_Zephyr_registering_server.html), as described above.

To map a TestArchitect project to a Zephyr project:

1.  Double-click the TestArchitect project that is to be mapped to Zephyr.

    The **Project** tab appears in the editor.

2.  In the **Source** field, specify the ID of the Zephyr project to map to.

    **Important:** You can only map a given TestArchitect project to a single Zephyr project at a time.

    ![](/images//Images/Zephyr_mapping_projects_6.1.png)

3.  Click **Apply**.

4.  In the Zephyr Authentication dialog box, enter the Zephyr user name and password, then click **OK**.

    ![](/images//Images/Zephyr_authentication_6.1.png)

    If authentication succeeds, a confirmation dialog box to that effect is displayed.

    ![](/images//Images/Zephyr_authentication_succeed_6.1.png)

5.  Click **OK** to close the confirmation dialog box.


**Parent topic:**[Setting up the connection with Zephyr](/TA_Help/Topics/ug_Zephyr_setting_up_connection.html)

**Previous topic:**[Registering the Zephyr server](/TA_Help/Topics/ug_Zephyr_registering_server.html)

**Next topic:**[Configuring ZBots and installing ZIPs](/TA_Help/Topics/ug_Zephyr_ZBot.html)

