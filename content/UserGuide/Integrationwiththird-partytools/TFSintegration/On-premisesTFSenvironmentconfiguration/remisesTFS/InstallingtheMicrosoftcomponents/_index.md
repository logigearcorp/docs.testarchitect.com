--- 
title: "Installing the Microsoft components"
linktitle: "Installing the Microsoft components"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_VS_components.html
---
# Installing the Microsoft components {#concept_thh_df2_rq .concept}

A fully functional TA-TFS integrated system requires that a number of components of Microsoft's Application Lifecycle Management \(ALM\) environment be installed and configured.

**Important:**

-   For test scenarios using Visual Studio 2015 or Team Foundation Server 2015, whether on-premise or cloud-based, support for launching automated tests is limited to Microsoft Test Manager 2015 with Microsoft test controller and Microsoft test agent for Visual Studio 2013 Update 5 \(Note that these are Microsoft-imposed constraints\).
-   Running automated tests from Team Foundation Server’s web portal for Microsoft Visual Studio is currently not supported.

TA-TFS integration requires installation of the following software components of the Microsoft ALM. Please refer to the appropriate Microsoft resources for information on the installation and configuration of these items:

**Note:**

-   Unless you use MTM, you do not have to install it, Test Controller and Test Agent.
-   TestArchitect Client and Microsoft Test Agent must be installed on the same machine.
-   For the TA-TFS plug-in,
    -   If you use MTM, the plug-in and Visual Studio must be installed on the same machine.

    -   If you use the Test hub, it is unnecessary to access the Test hub on the machine where Visual Studio is installed.
-   In order to import TFS test cases or tests suites into TA, or upload TA test modules/test cases/test results to TFS, the TFS Object Model must exist on the machine hosting your TA repository server. This package can be installed once you install Visual Studio; alternatively, it may be installed as a stand-alone package.

-   Microsoft Agents for Visual Studio:
    -   Test agent for Visual Studio [2015](https://msdn.microsoft.com/en-us/library/hh546459(v=vs.140).aspx#agent), 2015 Update 1.

        **Note:** Choose to download and install [Agents for Microsoft Visual Studio 2013 Update 5](https://www.visualstudio.com/vs/older-downloads/). This package includes installation of both test controllers and test agents.

    -   Test agent for Visual Studio [2013](http://msdn.microsoft.com/en-us/library/hh546459(v=vs.120).aspx#agent).
-   TFS Object Model:
    -   TFS Object Model [Installer](https://marketplace.visualstudio.com/items?itemName=VSCSReleases.TeamFoundationServer2013Update5ObjectModelInstalle).

**Parent topic:**[Installing and configuring Microsoft components for on-premises Team Foundation Server](../../TA_Help/Topics/ug_MTM_configuration.html)

**Next topic:**[Deploying and configuring a build server for TFS-MTM integration](../../TA_Help/Topics/ug_MTM_config_build_server.html)

