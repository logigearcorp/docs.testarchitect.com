--- 
title: "Deploying and configuring a build controller for TFS-MTM integration"
linktitle: "Deploying and configuring a build controller for TFS-MTM integration"
description: "To use Team Foundation Build (TFBuild), you must have at least one build controller, which pools and manages the services of one or more build agents. It distributes processor-intensive work: for example, compiling code or running tests, etc., to the build agents. Each build controller is dedicated to a single team project collection."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_MTM_config_build_controller.html
keywords: "Team Foundation Server, configuring a build controller, TFS, configuring a build controller, integration, configuring a build controller"
---

To use Team Foundation Build \(TFBuild\), you must have at least one build controller, which pools and manages the services of one or more build agents. It distributes processor-intensive work: for example, compiling code or running tests, etc., to the build agents. Each build controller is dedicated to a single team project collection.

Ensure that the following requirements are met:

-   Installed the supported components on your computer. \([Learn more](/TA_Help/Topics/ug_MTM_VS_components.html).\)
-   Configured and deployed [a build server](/TA_Help/Topics/ug_MTM_config_build_server.html).

Please refer to Microsoft's instructions on creating a build controller:

-   Visual Studio Team Foundation Server 2017, 2015 \([learn more](https://www.visualstudio.com/en-us/docs/build/concepts/agents/agents)\).
-   Visual Studio Team Foundation Server [2013](https://msdn.microsoft.com/en-us/library/ee330987(v=vs.120).aspx).

Your build controller information should resemble the following once you have completed the configuration:

![](/images/TA_Help/Images/MTM_build_controller.png)




