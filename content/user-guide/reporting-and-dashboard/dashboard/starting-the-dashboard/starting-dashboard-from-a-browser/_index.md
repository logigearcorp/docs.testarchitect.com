--- 
title: "Starting Dashboard from a browser"
linktitle: "Starting Dashboard from a browser"
description: "You can start the Dashboard from any browser running on a machine with a network connection to the TestArchitect Utility Server."
weight: 3
aliases: 
    - /TA_Help/Topics/Dashboard_starting_from_browser.html
keywords: "Dashboard, starting from a browser, starting, from a browser"
---

You can start the Dashboard from any browser running on a machine with a network connection to the TestArchitect Utility Server.

To start the TestArchitect Dashboard, follow these steps:

1.  If the TestArchitect Utility Server has not been started, carry out the following steps:

    1.  Open the TestArchitect Repository Server - Control Panel by double-clicking on the TestArchitect Repository Server icon on Windows’ notification area.

    2.  On the TestArchitect Repository Server - Control Panel main menu, select **Tools** \> **TestArchitect Utility Server Information**.

        ![](/images/TA_Help/Images/DB_1.png)

{{<note>}} The TestArchitect Utility Server Information command is enabled only after the Repository Server has been started.

        The server information window opens:

        ![](/images/TA_Help/Images/TA_utility_server_start.png)

    3.  If the **Start** button in the TestArchitect Utility Server Information dialog box is enabled, click it.

2.  Start a browser on a machine with network access to the TestArchitect Utility Server and enter the Dashboard's URL using the follow syntax:

    **http://**<IP of the TestArchitect Utility Server Information\>**:**<Port number of the TestArchitect Utility Server Information\>**/TADashboard**

    http://192.168.167.160:54000/TADashboard

    If you are not yet logged in to the Sample Repository, the Dashboard main login page opens in your default browser.

    ![](/images/TA_Help/Images/DB_5.png)

3.  In the TestArchitect Dashboard Login page, select the repository containing the data you are interested in from the **Repository Name** drop-down box. Enter the username and password for that repository, and then click **Login** to launch the Dashboard instance.


A Dashboard page appears showing the saved panels for the logged-in user. Depending on your user permission level, you can add, modify, and delete panels on the Dashboard.



**Related information**  


[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

[Repository Server Control Panel user interface](/TA_Administration/Topics/Repo_server_management_control_panel.html)

[Dashboard permissions](/TA_Help/Topics/Dashboard_authentication_permissions.html)

