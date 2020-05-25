--- 
title: "Starting Dashboard from TestArchitect"
linktitle: "Starting Dashboard from TestArchitect"
aliases: 
    - /TA_Help/Topics/Dashboard_starting_from_TA.html
---
# Starting Dashboard from TestArchitect {#Dashboard_starting_TA .task}

You can access a Dashboard instance from the context menu of the TestArchitect explorer tree in TestArchitect Client.

To launch a TestArchitect Dashboard, follow these steps:

1.  If the TestArchitect Utility Server has not been started, carry out the following steps:

    1.  Open the TestArchitect Repository Server - Control Panel by double-clicking on the TestArchitect Repository Server icon on Windows’ notification area.

    2.  On the TestArchitect Repository Server - Control Panel main menu, select **Tools** \> **TestArchitect Utility Server Information**.

        ![](../../reuse/../TA_Help/Images/DB_1.png)

        **Note:** The TestArchitect Utility Server Information command is enabled only after the Repository Server has been started.

        The server information window opens:

        ![](../../reuse/../TA_Help/Images/TA_utility_server_start.png)

    3.  If the **Start** button in the TestArchitect Utility Server Information dialog box is enabled, click it.

2.  In the TestArchitect explorer tree, right-click on the repository node that you want to manage with the Dashboard and click **Show Dashboard** from the context menu.

    ![](../Images/DB_23.PNG)

    Alternatively, from the **Repository** menu, click **Show Dashboard**.

    ![](../Images/DB_launching.png)

    If you are not yet logged in to the Sample Repository, the Dashboard main login page opens in your default browser.

    ![](../Images/DB_5.png)

3.  In the TestArchitect Dashboard Login page, select the repository containing the data you are interested in from the **Repository Name** drop-down box. Enter the username and password for that repository, and then click **Login** to launch the Dashboard instance.


A Dashboard page appears displaying the saved panels for the logged-in user. Depending on your user permission level, you can add, modify, and delete panels in the Dashboard window.

**Parent topic:**[Starting the Dashboard](../../TA_Help/Topics/Dashboard_starting.html)

**Next topic:**[Starting Dashboard from Lab Manager](../../TA_Help/Topics/Dashboard_starting_from_lab_manager.html)

**Related information**  


[Repository Server Control Panel user interface](../../TA_Administration/Topics/Repo_server_management_control_panel.html)

[Dashboard permissions](../../TA_Help/Topics/Dashboard_authentication_permissions.html)

