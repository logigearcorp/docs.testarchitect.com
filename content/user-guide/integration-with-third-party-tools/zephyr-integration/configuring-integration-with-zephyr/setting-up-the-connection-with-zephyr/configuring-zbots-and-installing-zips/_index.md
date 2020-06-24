--- 
title: "Configuring ZBots and installing ZIPs"
linktitle: "Configuring ZBots and installing ZIPs"
description: "In order to execute TestArchitect test cases or test modules from Zephyr, a Zephyr Bot (ZBot) agent is required to form the link between the Zephyr server and the TestArchitect Client on your machine. Additionally, a custom TestArchitect ZIP project must be deployed on the TestArchitect Client machine."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_Zephyr_ZBot.html
keywords: "integration, Zephyr, configuring ZBots and ZIPs, configuring ZBots and ZIPs"
---

In order to execute TestArchitect test cases or test modules from Zephyr, a Zephyr Bot \(ZBot\) agent is required to form the link between the Zephyr server and the TestArchitect Client on your machine. Additionally, a custom TestArchitect ZIP project must be deployed on the TestArchitect Client machine.

{{<important>}} TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

To install a ZBot agent and deploy a custom TestArchitect ZIP project, carry out the following procedures:

1.  Install Zbot.

    1.  Check if your machine meets these [requirements](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements).

    2.  Follow these instructions to download and install Zbot. \([Learn more](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/279412763/Installation+and+Usage+of+ZBots+on+Windows).\)

        ![](/images/TA_Help/Images/Zephyr_automated_tools.png)

2.  In TestArchitect Client, select **Tools** \> **Plug-ins** \> **ZBot Configuration**.

3.  On the ZBot Configuration Plug-in dialog box, click and browse to ZBOT\_HOME\_DIR.

    For example: C:\\Program Files \(x86\)\\ZBot.

4.  In the ZBot Configuration Plug-in dialog box, click **OK** to install the plug-in.

    If one does not already exist, TestArchitect automatically creates a folder named plugin. This folder stores the plug-in and configurations needed to form a link between the Zephyr server and your TestArchitect Client.

5.  Start the ZBot service manually:

    1.  Go to ZBOT\_HOME\_DIR\\bin and double-click the Zbot.bat batch file.

    2.  A command line window appears indicating that ZBot started successfully.

        {{<remember>}} Leave the command line window open on your machine; otherwise, the ZBot process is terminated.


{{<note>}}

-   Prior to [running automated tests from Zephyr](/TA_Help/Topics/ug_Zephyr_executing_tests.html), it is required that you repeat step [5](/TA_Help/Topics/ug_Zephyr_ZBot.html#step_start_zbot) to start the ZBot service manually.
-   It is also recommended that on Windows you do not start ZBot through the standard Windows Services application. Otherwise, ZBot may not be launched properly.



