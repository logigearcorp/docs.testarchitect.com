--- 
title: "Team Foundation Server overview"
linktitle: "TFS overview"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_TFS_overview.html
---

Team Foundation Server \(TFS\) is a Microsoft product which provides source code management, reporting, requirements management, project management, automated builds, lab management, testing and release management capabilities.

![](/images//Images/TFS_Overview.png "TFS's four major operational parts")

Team Foundation Server \(TFS\) offers both web-based and client-based solutions for test management:

-   The Test hub in the TFS web portal, as a web-based solution, can work across all platforms and with all browsers.
-   Microsoft Test Manager, as a client-solution, requires Build System, Test Controller and Test Agent to communicate with TFS.

**Note:** If you use TFS 2018, be aware of its substantial changes:

-   XAML Build has been deprecated. Furthermore, Microsoft Test Manager \(MTM\) no longer supports XAML builds
-   Using Test Center/Lab Center in MTM for automated testing is no longer supported by TFS, starting with TFS 2018.

Accordingly Build vNext and the Test Hub in the [TFS web portal](TFS_web_automated_testing.html) are ideal replacements for respective XAML Build and MTM.\(See also: [Team Foundation Server 2018 Release Notes](https://docs.microsoft.com/en-us/visualstudio/releasenotes/tfs2018-relnotes)\)

## Build System

-   [Build Definition](ug_MTM_config_build_server.html): A build definition contains the information and the logic needed to execute the build. \(Refer to [Creating a build definition](MTM_create_build_definition.html) for details.\)
-   Build Controller:
    -   a Windows service that handles initialization of the build, and allocates build agents;
    -   may be installed in the same machine with TFS server, or in a separate machine;
    -   can be associated with TFS server. \(Refer to [Deploying and configuring build controller](ug_MTM_config_build_controller.html) for details.\)
-   Build Agent:
    -   a Windows Service that executes such tasks as getting files needed for execution;
    -   can be associated with a build controller. \(Refer to [Deploying and configuring build agent](ug_MTM_build_agent.html) for details.\)

## Test Controller

It is a Windows Service that

-   receives execution commands from TFS and locates Test Agent.
-   distributes automated tests to multiple machines.
-   runs test and collects test data remotely. \(Refer to [Configuring and registering test controller](Integrate_MTM_Config_TestController.html) for details.\)

**Remember:** When you install and configure Test Controller, use the full domain namefor your test controller.

## Test Agent

It is a Windows Service. It executes test cases in a test machine and collects results. These results are then collected and published to Microsoft Test Controller. \(Refer to [Configuring and registering test agent](Integrate_MTM_Config_TestAgent.html) for details.\)

**Remember:**

-   To run Coded UI tests, install Test Agent as an interactive process.
-   When you install and configure Test Agent, use full domain name for your Test Agent.
-   Installing Test Agent on the test machine is required.

**Parent topic:**[Microsoft ecosystem](/TA_Help/Topics/ug_microsoft_eco_system.html)

**Next topic:**[Microsoft CI system](/TA_Help/Topics/ug_Microsoft_CI_system.html)

**Related information**  


[https://docs.microsoft.com/en-us/visualstudio/releasenotes/tfs2018-relnotes](https://docs.microsoft.com/en-us/visualstudio/releasenotes/tfs2018-relnotes)

