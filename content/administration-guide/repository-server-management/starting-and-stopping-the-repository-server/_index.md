--- 
title: "Starting and stopping the repository server"
linktitle: "Starting and stopping the repository server"
description: "The repository server can be started or stopped from the TestArchitect Repository Server Control Panel. This server normally runs when your system is running but can be stopped when needed."
weight: 3
aliases: 
    - /TA_Administration/Topics/Repo_server_management_starting_stopping.html
keywords: "repository server, starting, stopping"
---

The repository server can be started or stopped from the TestArchitect Repository Server Control Panel. This server normally runs when your system is running but can be stopped when needed.

It should be noted that starting and stopping the repository server is not equivalent to starting and stopping the TA Repository Server service. The TA Repository Server service is the OS-level service \(or daemon\) that manages the TestArchitect repositories on the machine on which it runs. Normally, this service starts when your computer boots and remains in effect while your system is running. \(You may choose to terminate this service, but this is generally not necessary unless you are troubleshooting system problems.\) The on/off status of the repository server, by contrast, determines the state of availability of the local repositories used by the TestArchitect Client and Controller applications. You control that status with the **Start** and **Stop** commands of the Repository Server Control Panel, which tell the TA Repository Server service whether or not to make the repositories available. \(Hence, the repository server being in the started state effectively means that the TA Repository Server service is making the repositories available, with stopped meaning that the service has cut off their availability.\)

-   **[Starting the repository server](/TA_Administration/Topics/Starting_repository_server.html)**  
This section describes procedures for starting the repository server.
-   **[Stopping the repository server](/TA_Administration/Topics/Stopping_repository_server.html)**  
This section describes procedures for stopping the repository server.




**Related information**  


[Terminating the Repository Server service](/TA_Administration/Topics/Repo_server_management_terminating.html)

