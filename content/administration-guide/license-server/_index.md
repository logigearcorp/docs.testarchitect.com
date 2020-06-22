--- 
title: "License server for TestArchitect"
linktitle: "License server for TestArchitect"
description: "TestArchitect is sold on a node-locked or floating license basis. You must license your copy of TestArchitect before you can use it."
weight: 5
aliases: 
    - /TA_Administration/Topics/LS_TA_License_server.html
keywords: "license server, TestArchitect, servers, licensing"
---

TestArchitect is sold on a node-locked or floating license basis. You must license your copy of TestArchitect before you can use it.

## Licensing in TestArchitect

Licensing is handled through a License Server. Each time you start up TestArchitect, a License Server validates your license and grants usage rights. You need only register your license with a License Server one time. This is done by submitting a LogiGear-supplied key to a license server.

The License Server you use can reside either on your local machine, or on a remote system. The License Server you use for registration is the same server that will validate your license each time you use TestArchitect, so make certain that your License Server is installed on a machine that is always available. This is especially true in the case of multi-user licenses, where you want the active License Server to be available on your network to all valid users.

{{<important>}} In this document, the client machine refers to the machine running the TestArchitect Client or TestArchitect Controller.

1.  [What's new in TestArchitect License Server 8.5.1](/TA_ReleaseNotes/DITA_source/Whats_New_LS.html)  
Following are the new features and enhancements introduced in the latest version of TestArchitect License Server.
2.  [Version history](/TA_ReleaseNotes/DITA_source/Version_History_LS.html)  
This topic describes the changes made in previous versions of TestArchitect License Server.
3.  [License administration configurations](/TA_Administration/Topics/LS_TA_admin_config.html)  
A TestArchitect license server can be configured as a single server, one of multiple licensing servers, or as a redundant server.
4.  [License Server installation guide](/TA_InstallationGuide/DITA_source/Topics/inst_LS.html)  
This guide provides you with step-by-step instructions on how to install the TestArchitect License Server on Windows and Linux operating systems.
5.  [License server interface](/TA_Administration/Topics/LS_TA_interface.html)  
The License Server Control Panel allows you to add and edit licenses in the license pool, change license types, and display license information and status.
6.  [Obtaining a TestArchitect license](/TA_Administration/Topics/LS_TA_obtaining_license.html)  
Obtaining a TestArchitect license, or adding a license, is a two-step process which involves submitting a request to LogiGear for a license key and using the authorized key to add the license.
7.  [Managing the license server](/TA_Administration/Topics/LS_TA_managing_license_server.html)  
How to start and stop the license server, change the server port, and create a redundant license server.
8.  [Managing licenses](/TA_Administration/Topics/LS_TA_managing_licenses.html)  
The processes of license conversion, reclaiming, redirecting, and removing.
9.  [License log file](/TA_Administration/Topics/adm_License_server_log_file.html)  
The license log file tracks license requests submitted to the license server. It can be helpful in interpreting events and problems.
10. [Troubleshooting the TestArchitect License Server](/TA_Administration/Topics/adm_LS_troubleshooting.html)  
This section describes possible errors that you might encounter with the TestArchitect License Server, their common causes and possible solutions.




