--- 
title: "Deploying and configuring a build server for TFS-MTM integration"
linktitle: "Setting up a build server"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_config_build_server.html
---
# Deploying and configuring a build server for TFS-MTM integration {#task_ajr_x25_kr .task}

To use Team Foundation Build \(TFBuild\) with an on-premise TFS, you must deploy at least one build server. Each build server serves a single team project collection. Although you configure, modify, and manage a build server on the computer where Team Foundation Build Service is running, the configuration data is stored in the team project collection.

Ensure that you have installed the supported components on your computer. \([Learn more](ug_MTM_VS_components.html).\)

Please refer to Microsoft's instructions on configuring a build server:

-   Visual Studio Team Foundation Server 2017, 2015 \([learn more](https://www.visualstudio.com/en-us/docs/build/concepts/agents/agents)\).
-   Visual Studio Team Foundation Server [2013](https://msdn.microsoft.com/en-us/library/ms181712(v=vs.120).aspx).

Your build server information should resemble the following once you have completed the configuration:

![](../Images/MTM_build_service.png)

**Parent topic:**[Installing and configuring Microsoft components for on-premises Team Foundation Server](../../TA_Help/Topics/ug_MTM_configuration.html)

**Previous topic:**[Installing the Microsoft components](../../TA_Help/Topics/ug_MTM_VS_components.html)

**Next topic:**[Deploying and configuring a build controller for TFS-MTM integration](../../TA_Help/Topics/ug_MTM_config_build_controller.html)

