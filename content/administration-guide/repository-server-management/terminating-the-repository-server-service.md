--- 
title: "Terminating the Repository Server service"
linktitle: "Terminating the Repository Server service"
description: "Terminating the OS-level TA Repository Server service stops the repository service and shuts down the Repository Server Control Panel."
weight: 5
aliases: 
    - /TA_Administration/Topics/Repo_server_management_terminating.html
keywords: "Repository Server Service, terminating, Repository Server Control Panel, Terminate command"
---

Terminating the OS-level TA Repository Server service stops the repository service and shuts down the Repository Server Control Panel.

The **Terminate** command of the Repository Server Control Panel is used to shut down the TA Repository Server service. As a general rule, however, it should not be necessary to stop this OS-level service. The state of the TA Repository Server service is indicated by the presence \(running\) or absence \(stopped\) of the repository server icon in the Windows Notification area, Linux Notification area, or macOS Status menu..

{{<note>}} This is in contrast to the nature of the appearance of the **Repository Server** icon in the Windows notification area, Linux Notification area, or macOS Status menu. The two types \(with green arrow and red square\), as discussed earlier, indicate the on/off state of the repository server, not the OS-level service.

**Terminate** is available from the **File** menu of the Repository Server Control Panel.

{{<note>}}

-   This action not only stops the OS-level service, but also shuts down the Repository Server Control Panel \(if open\) and removes the **Repository Server** icon from the Windows Notification area, Linux Notification area, or macOS Status menu..
-   To restart the TA Repository Server service in Windows, Linux, or macOS, refer to [Launching the Repository Server Control Panel](/administration-guide/repository-server-management/launching-the-repository-server-control-panel).




**Related information**  


[Starting and stopping the repository server](/administration-guide/repository-server-management/starting-and-stopping-the-repository-server/)

