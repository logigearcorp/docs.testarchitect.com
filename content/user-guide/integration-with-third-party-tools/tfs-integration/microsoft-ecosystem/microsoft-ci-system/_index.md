--- 
title: "Microsoft CI system"
linktitle: "Microsoft CI system"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_Microsoft_CI_system.html
---

Continuous Integration \(CI\) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.

The following flowchart depicts Microsoft's CI system.

![](/images//Images/MS_CI.png "Microsoft CI system")

In general, the workflow is as follows:

1.  From Visual Studio, a build is triggered after the source code is checked in and sent to Team Foundation Server.
2.  From Team Foundation Server, a build command is sent to Build Server. Inside Build Server, Build Controller compiles the selected project and sends it to Build Agent.
3.  After finishing the build, Build Server sends the new build back to Team Foundation Server.
4.  Team Foundation Server submits the test information to the Microsoft Test Controller.
5.  Test Controller sends the test information to Microsoft Test Agent.
6.  After the execution completes, Test Controller collects the test results from Test Agent.
7.  Test Controller collects and publishes test results to Team Foundation Server.
8.  Team Foundation Server displays the test results to the client.

**Parent topic:**[Microsoft ecosystem](/TA_Help/Topics/ug_microsoft_eco_system.html)

**Previous topic:**[Team Foundation Server overview](/TA_Help/Topics/ug_TFS_overview.html)

