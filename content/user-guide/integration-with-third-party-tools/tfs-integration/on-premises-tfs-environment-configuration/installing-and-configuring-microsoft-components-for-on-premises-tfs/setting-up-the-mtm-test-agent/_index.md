--- 
title: "Configuring and registering an MTM test agent"
linktitle: "Setting up the MTM test agent"
description: "A test agent must be installed on each machine on which you intend to deploy your automated test, and on each machine to be used to collect test data. This section describes how to install a test agent and register it with a test controller."
weight: 6
aliases: 
    - /TA_Help/Topics/Integrate_MTM_Config_TestAgent.html
keywords: "Microsoft Test Manager, configuring Test Agent, attended mode, MTM, configuring Test Agent, attended mode, Team Foundation Server, integration, configuring Test Agent, attended mode"
---

A test agent must be installed on each machine on which you intend to deploy your automated test, and on each machine to be used to collect test data. This section describes how to install a test agent and register it with a test controller.

Ensure that you have installed the supported components on your computer. \([Learn more](/TA_Help/Topics/ug_MTM_VS_components.html).\)

1.  Please refer to Microsoft's instructions on configuring and registering a test agent:

    -   Test agent for Microsoft Visual Studio 2017, 2015 \([learn more](https://msdn.microsoft.com/en-us/library/hh546459(v=vs.140).aspx)\).
    -   Test agent for Microsoft Visual Studio [2013](http://msdn.microsoft.com/en-us/library/hh546459(v=vs.120).aspx#agent).
2.  Keep in mind the following specific settings:

    -   When presented with the Configure Test Agent dialog box in Visual Studio, choose to run the test agent as an Interactive process.

        ![](/images/TA_Help/Images/MTM_TA_interactive_process.png)

    Upon conclusion of a successful configuration, you can expect to see a Configuration summary dialog box resembling the following:

    ![](/images/TA_Help/Images/config_summary_dlg_test_agent.png)

3.  Click **Close** to close the dialog box.


With a test agent installed, an icon ![](/images/TA_Help/Images/MTM_agent_icon.png) appears in the Windows notification area. Open it to display the status of the test agent.

![](/images/TA_Help/Images/agent_systray.png)




