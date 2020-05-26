--- 
title: "Installing the TestArchitect plug-in"
linktitle: "Installing the TA plug-in"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_installing_TA_plugin.html
---
# Installing the TestArchitect plug-in {#installing_TA_plugin .task}

Installing the TA plug-in for Microsoft Visual Studio adds a project option to Visual Studio for creating TA-TFS projects.

-   Option \#1: Install the plug-in using the TestArchitect **Tools** menu.

    1.  If currently running, close Microsoft Visual Studio.

    2.  In TestArchitect Client, select **Tools** \> **Plug-ins** \> **Team Foundation Server Plug-in**.

    3.  Follow the on-screen instructions to complete the plug-in installation.

-   Option \#2: Install the plug-in manually.

    1.  If currently running, close Microsoft Visual Studio.

    2.  Go to TA\_INSTALL\_DIR\\plugins.

    3.  Double-click the TATFSPlugin.exe file.

    4.  Follow the on-screen instructions to complete the plug-in installation.


-   Upon installation, in Visual Studio, the TestArchitect plug-in is now available from Visual Studio's **Tools** \> **Extensions and Updates** menu.

    ![](../Images/MTM_TA_plugin.png)

-   Additionally, a TA-TFS Integration Project option is now also available as a test project residing under the Visual C\# template in Visual Studio.

    ![](../Images/TA_TFS_projects.png)

-   If you happen to have more than one Visual Studio version residing side by side on your machine, the plug-in is installed automatically to all instances.

**Parent topic:**[Running automated tests under on-premises Team Foundation Server](../../TA_Help/Topics/ug_MTM_test_execution.html)

**Previous topic:**[Prerequisites for running tests under TFS-MTM](../../TA_Help/Topics/ug_MTM_test_execution_prerequisites.html)

**Next topic:**[Configuring TestArchitect for a Team Foundation Server® connection](../../TA_Help/Topics/Integration_MTM_connecting_TFS_COPY.html)

