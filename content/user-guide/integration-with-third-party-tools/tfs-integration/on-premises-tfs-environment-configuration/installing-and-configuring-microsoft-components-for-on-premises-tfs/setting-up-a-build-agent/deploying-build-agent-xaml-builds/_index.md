--- 
title: "Deploying build agent - XAML builds"
linktitle: "Deploying build agent - XAML builds"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_config_build_agent.html
---

To use TFBuild, you must have at least one build agent. A build agent does the processor-intensive work of your build, which includes getting files from version control, provisioning the workspace, compiling the code, running tests, and merging files back into version control. Each build agent is dedicated to a single build controller.

Ensure that you have completed the following tasks:

-   Installed the supported components on your computer. \([Learn more](ug_MTM_VS_components.html).\)
-   [Configured a build server](ug_MTM_config_build_server.html).
-   [Configured a build controller](ug_MTM_config_build_controller.html).

**Note:** If you use TFS 2018, be aware of its substantial changes:

-   XAML Build has been deprecated. Furthermore, Microsoft Test Manager \(MTM\) no longer supports XAML builds
-   Using Test Center/Lab Center in MTM for automated testing is no longer supported by TFS, starting with TFS 2018.

Accordingly Build vNext and the Test Hub in the [TFS web portal](TFS_web_automated_testing.html) are ideal replacements for respective XAML Build and MTM.\(See also: [Team Foundation Server 2018 Release Notes](https://docs.microsoft.com/en-us/visualstudio/releasenotes/tfs2018-relnotes)\)

Please refer to Microsoft's instructions on creating a build agent. \([Learn more.](https://msdn.microsoft.com/en-us/library/bb399135(v=vs.120).aspx)\)

Your build agent information should resemble the following once you have completed the configuration:

![](/images//Images/MTM_build_agent.png)

**Parent topic:**[Deploying and configuring a build agent for TFS-MTM integration](/TA_Help/Topics/ug_MTM_build_agent.html)

