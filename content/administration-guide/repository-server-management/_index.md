--- 
title: "Repository Server Management"
linktitle: "Repository Server Management"
description: "The repository server handles read and write requests from TestArchitect Client, TestArchitect Controller, and third party applications."
weight: 1
aliases: 
    - /TA_Administration/Topics/Repo_server_management.html
keywords: "repository server management, repository server"
---

The repository server handles read and write requests from TestArchitect Client, TestArchitect Controller, and third party applications.

In Windows it is a service, in Linux and Unix-based systems it is a daemon. \(For the sake of conciseness, the term *service* is used for both cases from here on.\) The TA Repository Server service is responsible for managing the TestArchitect repositories residing on its host machine. It handles repository-related read and write requests from TestArchitect Client and TestArchitect Controller applications on the same machine. It can also handle requests from third party applications that need access to repository data, such as HP Quality Center. It can be managed and monitored with the user program Repository Server Control Panel.

{{<important>}} Hardware and software in computers are prone to power outage or surge. There is a chance that the power supply fails as you are carrying out actions on TA repositories. It might result in corruption of repositories. Recovering them is laborious and sometimes impossible. Thus it is recommended you provide steady power supply for your machine.

1.  [Launching the Repository Server Control Panel](/administration-guide/repository-server-management/launching-the-repository-server-control-panel)  
How to start the TestArchitect Repository Server Control Panel on different operating systems.
2.  [Repository Server Control Panel user interface](/administration-guide/repository-server-management/repository-server-control-panel-user-interface)  
The Repository Server Control Panel provides you with repository server information and repository lists; it is the "central command" from which you control the repository and the repository services.
3.  [Starting and stopping the repository server](/administration-guide/repository-server-management/starting-and-stopping-the-repository-server/)  
The repository server can be started or stopped from the TestArchitect Repository Server Control Panel. This server normally runs when your system is running but can be stopped when needed.
4.  [Closing the Repository Server Control Panel](/administration-guide/repository-server-management/closing-the-repository-server-control-panel)  
Closing the Repository Server Control Panel does not change the running status of the repository service nor the TA Repository Server service.
5.  [Terminating the Repository Server service](/administration-guide/repository-server-management/terminating-the-repository-server-service)  
Terminating the OS-level TA Repository Server service stops the repository service and shuts down the Repository Server Control Panel.
6.  [Adding a repository](/administration-guide/repository-server-management/adding-a-repository)  
A new repository can be added from the Repository Server Control Panel or from within TestArchitect Client.
7.  [Setting a password requirement](/administration-guide/repository-server-management/setting-a-password-requirement)  
Setting a password requirement limits the ability of users, remote or local, to create repositories on your local machine. Only authenticated users are allowed to add or modify repositories.
8.  [Exporting/Importing repositories](/administration-guide/repository-server-management/exporting-importing-repositories/)  
How to manage export and import repository operations in TestArchitect.
9.  [Backing up repositories](/administration-guide/repository-server-management/backing-up-repositories)  
A TestArchitect repository is the central storage location for all your work on test modules, actions, interfaces, data, and test results. It is essential that you back up repositories in case of data loss or corruption.
10. [Changing repository server port number](/administration-guide/repository-server-management/changing-repository-server-port-number)  
Rather than accept the default, you can manually change the port number of a repository server if necessary.
11. [Configuring connection backlog size for a repository server](/administration-guide/repository-server-management/configuring-connection-backlog-size-for-a-repository-server)  
TestArchitect enables you to specify the maximum size of the queue used for holding pending connections to a repository server
12. [Replication repositories](/administration-guide/repository-server-management/replication-repositories/)  
Primary and replication repository relationships, associated configurations, and the synchronization process.
13. [Setting Java heap size](/administration-guide/repository-server-management/setting-java-heap-size)  
The Java Virtual Machine requires enough heap memory to prevent out-of-memory conditions.
14. [Changing user account to start the repository server](/administration-guide/repository-server-management/changing-user-account-to-start-the-repository-server/)  
The repository server requires user accounts with granted permission to be started.
15. [TestArchitect Utility Server](/administration-guide/repository-server-management/testarchitect-utility-server)  
 The TestArchitect Utility Server is used to manage both the Lab Manager and Dashboard applications and to provide access to project information.
16. [Upgrading the repository database for name change propagation](/administration-guide/repository-server-management/upgrading-the-repository-database-for-name-change-propagation/)  
Legacy databases must be upgraded so that necessary referencing information can be generated to enable name change propagation.
17. [Upgrading the repository database for time-traveling execution](/administration-guide/repository-server-management/upgrading-the-repository-database-for-time-traveling-execution)  
Upgrading of legacy databases is required to enable time-traveling execution to function correctly.
18. [Clearing hit list periodically](/administration-guide/repository-server-management/clearing-hit-list-periodically)  
Hit list clearance should be scheduled periodically to avoid performance issues for repositories and for TestArchitect automation.
19. [Deleting a repository](/administration-guide/repository-server-management/deleting-a-repository)  
You can delete a repository using the Repository Server Control Panel
20. [Repository Version](/administration-guide/repository-server-management/repository-version)  
From 8.5 Update 1 onward, all versions of TestArchitect Client 8.5 and Repository Server 8.5 will be compatible with each other.



