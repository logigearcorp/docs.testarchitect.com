--- 
title: "Supported versions"
linktitle: "Supported versions"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_supported_platforms.html
---
# Supported versions {#concept_mvb_g22_rq .concept}

Contains information of supported Microsoft technologies.

Currently, TFS integration supports the Microsoft technologies listed below:

-   Team Foundation Server:

    -   Visual Studio Team Foundation Server 2018, 2017 Update 2, 2017 Update 1, 2015, 2015 Update 1 \([learn more](https://www.visualstudio.com/en-us/docs/setup-admin/tfs/install/get-started)\).

        **Note:** If you use TFS 2018, be aware of its substantial changes:

        -   XAML Build has been deprecated. Furthermore, Microsoft Test Manager \(MTM\) no longer supports XAML builds
        -   Using Test Center/Lab Center in MTM for automated testing is no longer supported by TFS, starting with TFS 2018.
        Accordingly Build vNext and the Test Hub in the [TFS web portal](TFS_web_automated_testing.html) are ideal replacements for respective XAML Build and MTM.\(See also: [Team Foundation Server 2018 Release Notes](https://docs.microsoft.com/en-us/visualstudio/releasenotes/tfs2018-relnotes)\)

    -   Visual Studio Team Foundation Server [2013](http://msdn.microsoft.com/en-us/library/dd631902(v=vs.120).aspx).
    **Note:** Both [on-premises](ug_MTM_setting_up_environment.html) and [Azure DevOps](Azure_DevOps_running_automated_tests.html) \(the formerly known as Visual Studio Team Services\) are supported.

-   Microsoft Visual Studio, including Microsoft Test Manager:
    -   Microsoft Visual Studio [2017 Update 2](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2), [2017 Update 1](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update1) \(Enterprise and Professional editions\)
    -   Microsoft Visual Studio [2015](https://msdn.microsoft.com/en-us/library/dd831853(v=vs.140).aspx), 2015 Update 1 \(Enterprise, Professional and Test Professional editions\).
    -   Microsoft Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd831853(v=vs.120).aspx) \(Ultimate, Premium, Professional and Test Professional editions\).
-   Microsoft Test Controller for Visual Studio:
    -   Test controller for Visual Studio [2015](https://msdn.microsoft.com/en-us/library/hh546459(v=vs.140).aspx#controller), 2015 Update 1.

        **Note:** Choose to download and install [Agents for Microsoft Visual Studio 2013 Update 5](https://www.visualstudio.com/vs/older-downloads/). This package includes installation of both test controllers and test agents.

    -   Test controller for Visual Studio [2013](http://msdn.microsoft.com/en-us/library/hh546459(v=vs.120).aspx#controller).
-   Microsoft Agents for Visual Studio:
    -   Test agent for Visual Studio [2015](https://msdn.microsoft.com/en-us/library/hh546459(v=vs.140).aspx#agent), 2015 Update 1.

        **Note:** Choose to download and install [Agents for Microsoft Visual Studio 2013 Update 5](https://www.visualstudio.com/vs/older-downloads/). This package includes installation of both test controllers and test agents.

    -   Test agent for Visual Studio [2013](http://msdn.microsoft.com/en-us/library/hh546459(v=vs.120).aspx#agent).
-   TFS test suites: types of TFS test suites supported in Team Foundation Server-Microsoft Test Manager integration are as follows \([learn more](https://msdn.microsoft.com/library/dd286738(v=vs.110).aspx)\):
    -   static test suites
    -   requirements-based suites.

**Important:**

-   For test scenarios using Visual Studio 2015 or Team Foundation Server 2015, whether on-premise or cloud-based, support for launching automated tests is limited to Microsoft Test Manager 2015 with Microsoft test controller and Microsoft test agent for Visual Studio 2013 Update 5 \(Note that these are Microsoft-imposed constraints\).
-   Running automated tests from Team Foundation Server’s web portal for Microsoft Visual Studio is currently not supported.

**Parent topic:**[Team Foundation Server integration](../../TA_Help/Topics/ug_MTM_def.html)

**Previous topic:**[Microsoft ecosystem](../../TA_Help/Topics/ug_microsoft_eco_system.html)

**Next topic:**[Setting up the integration environment for on-premises Team Foundation Server](../../TA_Help/Topics/ug_MTM_setting_up_environment.html)

