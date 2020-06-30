--- 
title: "Launching Lab Manager from TestArchitect Client"
linktitle: "Launching Lab Manager from TestArchitect Client"
description: "Launching Lab Manager from within TestArchitect Client."
weight: 1
aliases: 
    - /TA_Help/Topics/Lab_manager_TA_client.html
keywords: "Lab Manager, launching from TestArchitect, launching, from TestArchitect"
---

Launching Lab Manager from within TestArchitect Client.

If you already have TestArchitect open, then this is the most convenient means of launching Lab Manager. You have two options here: Launch from the **Repository** menu, or launch from a context menu:

1.  Option 1:

    From the **Repository** menu, click **Show Lab Manager**.

    ![](/images/TA_Help/Images/ug_labmanager02.png)

    At this point, it is helpful to recall that Lab Manager requires that you be authenticated with your credentials from a repository \(one that you already have access rights to, of course\). TestArchitect Client enforces this rule by only allowing you to access this menu item when you have focus on a repository, or some item belonging to a repository. In other words, if you don't have some part of a repository selected when you go to the **Repository** menu, **Show Lab Manager** menu item is disabled.

2.  Option 2:

    In the TestArchitect explorer tree, right-click a repository, and then select **Show Lab Manager**.

    ![](/images/TA_Help/Images/ug_labmanager03.png)


In both of the above cases, if you are already logged in to the selected repository, you will be automatically logged in to the Lab Manager session.

{{<note>}} See the notice below if you receive a warning message when you attempt to access Lab Manager. If, on the other hand, you are not already logged in to the selected repository, Lab Manager presents you with a login page:

![](/images/TA_Help/Images/ug_labmanager04.png)

{{<tip>}} In this login screen you have the option of supplying your credentials not just for a local repository, but for any other repository accessible on the network by clicking the **Connect to other repository server** link.

{{<note>}} If you attempt to start Lab Manager from within TestArchitect Client and see this message:

![](/images/TA_Help/Images/ug_err_utility_server_unavailable.png)

then check to ensure that the utility server is up and running. \(If attempting to start Lab Manager from the browser, the message may be something to the effect of Unable to connect to web host, or Unable to access web page.\)

Starting and stopping the TestArchitect Utility Server is done via the Repository Server Control Panel of your machine. \(Or, if you are attempting to access the Lab Manager of a repository on a computer other than the one you are using, and its web server needs starting, you will need to open the Repository Server Control Panel of that machine.\)

1.  The Repository Server Control Panel may be accessed through its icon ![](/images/TA_Help/Images/admin_RS_icn_RSrunning.png) in the Windows notification area \(generally on the right side of the Windows taskbar\), or through the Windows Start menu \(**Start** \> **All Programs** \> **TestArchitect** \> **Repository Server**\).
2.  [Launch](/administration-guide/repository-server-management/launching-the-repository-server-control-panel) the Repository Server Control Panel.
3.  Within the Repository Server Control Panel, select **TestArchitect Utility Server Information** from the **Tools** menu:

    ![](/images/TA_Help/Images/DB_1.png)

    The TestArchitect Utility Server Information dialog box is displayed, allowing you to start or stop the server.

    ![](/images/TA_Help/Images/DB_2.png)

4.  If the **Start** button is enabled, click it.

Within a few seconds the server starts up; completion of the startup process is indicated by the **Start** button becoming disabled, and **Stop** enabled.

At this point, you should be able to start up Lab Manager. \(Feel free to close this dialog box, along with the Repository Server Control Panel.\)



