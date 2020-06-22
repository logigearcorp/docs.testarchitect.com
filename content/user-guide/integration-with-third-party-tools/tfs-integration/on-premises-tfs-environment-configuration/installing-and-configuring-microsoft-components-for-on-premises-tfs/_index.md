--- 
title: "Installing and configuring Microsoft components for on-premises Team Foundation Server"
linktitle: "Installing and configuring Microsoft components for on-premises Team Foundation Server"
description: "This section and its subtopics list out a number of components of Microsoft's Application Lifecycle Management (ALM) environment that need to be installed and configured for on-premises TFS."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_configuration.html
keywords: 
---

This section and its subtopics list out a number of components of Microsoft's Application Lifecycle Management \(ALM\) environment that need to be installed and configured for on-premises TFS.

{{<note>}} It is highly recommended that you review the following topics in order. This will ensure that you are able to successfully run automated TFS tests with Microsoft Test Manager \(MTM\) before integrating with TestArchitect.

1.  [Installing the Microsoft components](/TA_Help/Topics/ug_MTM_VS_components.html)  
A fully functional TA-TFS integrated system requires that a number of components of Microsoft's Application Lifecycle Management \(ALM\) environment be installed and configured.
2.  [Deploying and configuring a build server for TFS-MTM integration](/TA_Help/Topics/ug_MTM_config_build_server.html)  
To use Team Foundation Build \(TFBuild\) with an on-premise TFS, you must deploy at least one build server. Each build server serves a single team project collection. Although you configure, modify, and manage a build server on the computer where Team Foundation Build Service is running, the configuration data is stored in the team project collection.
3.  [Deploying and configuring a build controller for TFS-MTM integration](/TA_Help/Topics/ug_MTM_config_build_controller.html)  
To use Team Foundation Build \(TFBuild\), you must have at least one build controller, which pools and manages the services of one or more build agents. It distributes processor-intensive work: for example, compiling code or running tests, etc., to the build agents. Each build controller is dedicated to a single team project collection.
4.  [Deploying and configuring a build agent for TFS-MTM integration](/TA_Help/Topics/ug_MTM_build_agent.html)  
With Team Foundation Build \(TFBuild\), you can create and manage build processes that automatically compile and test your applications, and perform other important functions. You can use your build system to support a strategy of continuous integration or put even more rigorous quality checks in place that prevent bad quality code from breaking the build.
5.  [Configuring and registering an MTM test controller](/TA_Help/Topics/Integrate_MTM_Config_TestController.html)  
This topic describes how to install and configure a test controller. You must install and configure at least one test controller for your team project collection, before you create a lab environment in that team project collection. When you configure a test controller for a lab environment, you have to register it with your team project collection.
6.  [Configuring and registering an MTM test agent](/TA_Help/Topics/Integrate_MTM_Config_TestAgent.html)  
A test agent must be installed on each machine on which you intend to deploy your automated test, and on each machine to be used to collect test data. This section describes how to install a test agent and register it with a test controller.
7.  [Automating a test case in Microsoft Test Manager](/TA_Help/Topics/ug_MTM_automating_TC.html)  
To successfully automate a test case in Microsoft Test Manager \(MTM\), numerous steps must be taken. These include creating TFS test cases, creating UI tests, linking test cases to test methods, creating a lab environment and settings to run your tests, and more. Additionally, in this section, a simple coded UI test project is created to let you verify that the entire AUT, including its user interface, is functioning correctly.



