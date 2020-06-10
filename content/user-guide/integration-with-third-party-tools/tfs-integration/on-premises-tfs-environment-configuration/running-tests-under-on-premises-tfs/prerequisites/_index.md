--- 
title: "Prerequisites for running tests under TFS-MTM"
linktitle: "Prerequisites"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_test_execution_prerequisites.html
---

This topic describes the requirements that must be met by the systems involved in running tests under TFS-MTM.

## Requirements for each system

## Computer hosting the TestArchitect repository server

-   The TFS Object Model must exist. This package can be installed once you install Visual Studio; alternatively, it may be installed as a stand-alone package. Note that, if you decide to install the TFS Object Model as a stand-alone package, you must ensure that it is of the same version as your installed TFS. And also restart your repository server after installing the TFS Object Model.

## TestArchitect Client computer on which you create and configure tests

-   TestArchitect Client.
-   The TA-TFS plug-in. \([Learn more](/TA_Help/Topics/ug_MTM_installing_TA_plugin.html).\)
-   Microsoft Visual Studio, including Microsoft Test Manager:
    -   Microsoft Visual Studio [2017 Update 2](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2), [2017 Update 1](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update1) \(Enterprise and Professional editions\)
    -   Microsoft Visual Studio [2015](https://msdn.microsoft.com/en-us/library/dd831853(v=vs.140).aspx), 2015 Update 1 \(Enterprise, Professional and Test Professional editions\).
    -   Microsoft Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd831853(v=vs.120).aspx) \(Ultimate, Premium, Professional and Test Professional editions\).

## Lab environment where tests run

-   Microsoft Test Controller for Visual Studio:
    -   Test controller for Visual Studio [2015](https://msdn.microsoft.com/en-us/library/hh546459(v=vs.140).aspx#controller), 2015 Update 1.

        **Note:** Choose to download and install [Agents for Microsoft Visual Studio 2013 Update 5](https://www.visualstudio.com/vs/older-downloads/). This package includes installation of both test controllers and test agents.

    -   Test controller for Visual Studio [2013](http://msdn.microsoft.com/en-us/library/hh546459(v=vs.120).aspx#controller).
-   Microsoft Agents for Visual Studio:
    -   Test agent for Visual Studio [2015](https://msdn.microsoft.com/en-us/library/hh546459(v=vs.140).aspx#agent), 2015 Update 1.

        **Note:** Choose to download and install [Agents for Microsoft Visual Studio 2013 Update 5](https://www.visualstudio.com/vs/older-downloads/). This package includes installation of both test controllers and test agents.

    -   Test agent for Visual Studio [2013](http://msdn.microsoft.com/en-us/library/hh546459(v=vs.120).aspx#agent).

**Remember:**


Additionally, it is required that you be familiar with how to automate test cases in MTM \([learn more](/TA_Help/Topics/ug_MTM_automating_TC.html)\), and that you have:

-   Deployed and configured:
    -   [build server](/TA_Help/Topics/ug_MTM_config_build_server.html),
    -   [build controller](/TA_Help/Topics/ug_MTM_config_build_controller.html), and
    -   [build agent](/TA_Help/Topics/ug_MTM_build_agent.html)
-   Configured and registered:
    -   [test controller](/TA_Help/Topics/Integrate_MTM_Config_TestController.html) and
    -   [test agent](/TA_Help/Topics/Integrate_MTM_Config_TestAgent.html).
-   Created and configured a TFS build definition. \([Learn more](/TA_Help/Topics/MTM_create_build_definition.html).\)
-   Queued the new build. \([Learn more](/TA_Help/Topics/MTM_queue_XAML_build.html).\)
-   Created a new environment in MTM Lab Center. \([Learn more](/TA_Help/Topics/ug_MTM_create_lab_environment.html).\)
-   Configured run settings. \([Learn more](/TA_Help/Topics/MTM_create_run_settings.html).\)

**Parent topic:**[Running automated tests under on-premises Team Foundation Server](/TA_Help/Topics/ug_MTM_test_execution.html)

**Next topic:**[Installing the TestArchitect plug-in](/TA_Help/Topics/ug_MTM_installing_TA_plugin.html)

