--- 
title: "TestArchitect Utility Server"
linktitle: "TestArchitect Utility Server"
description: "The TestArchitect Utility Server is used to manage both the Lab Manager and Dashboard applications and to provide access to project information."
weight: 15
aliases: 
    - /TA_Administration/Topics/TA_Utility_Server.html
keywords: "Utility Server, TestArchitect Utility Server, TestArchitect Utility Server Information window, Lab Manager, managed by TestArchitect Utility Server"
---

The TestArchitect Utility Server is used to manage both the Lab Manager and Dashboard applications and to provide access to project information.

TestArchitect's Utility Server runs in the background. It can be started, stopped, and managed from the TestArchitect Repository Server Control Panel.

1.  If not already running, start the [Repository Server Control Panel](/TA_Administration/Topics/Repo_server_management_launching.html).

2.  In the dialog box, select **Tools** \> **TestArchitect Utility Server Information**.

{{<note>}} The **TestArchitect Utility Server Information** command is enabled only when the repository server is [started](/TA_Administration/Topics/Starting_repository_server.html).

    The TestArchitect Utility Server Information dialog box appears.

    ![](/images/TA_Administration/Images/DB_2.png)

    The fields/controls displayed are:

    -   **URL**: The TestArchitect Utility Server’s IP address. \(This is a read-only field.\)
    -   **Port**: The communication port for the utility server. To change the port of TestArchitect Utility Server, stop the server, change the value, then start the server again.
    -   The **Start** button: Start the utility server.
    -   The **Stop** button: Stop the utility server.
3.  Click the **Start** button to start the utility server.


Once started, you may access the Dashboard or Lab Manager applications.




**Related information**  


[Lab Manager](/TA_Help/Topics/Lab_manager.html)

[Dashboard](/TA_Help/Topics/Dashboard.html)

[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

