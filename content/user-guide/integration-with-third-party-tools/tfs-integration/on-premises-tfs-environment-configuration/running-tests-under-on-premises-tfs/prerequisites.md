--- 
title: "Prerequisites for running tests under TFS-MTM"
linktitle: "Prerequisites"
description: "This topic describes the requirements that must be met by the systems involved in running tests under TFS-MTM."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_test_execution_prerequisites.html
keywords: "Microsoft Test Manager, executing tests, prerequisites, MTM, executing tests, prerequisites, executing tests, MTM, prerequisites"
---

This topic describes the requirements that must be met by the systems involved in running tests under TFS-MTM.

## {{< expand >}} Requirements for each system

## Computer hosting the TestArchitect repository server

-   The TFS Object Model must exist. This package can be installed once you install Visual Studio; alternatively, it may be installed as a stand-alone package. Note that, if you decide to install the TFS Object Model as a stand-alone package, you must ensure that it is of the same version as your installed TFS. And also restart your repository server after installing the TFS Object Model.

## TestArchitect Client computer on which you create and configure tests

-   TestArchitect Client.
-   The TA-TFS plug-in. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/installing-the-ta-plug-in).\)
-   Microsoft Visual Studio, including Microsoft Test Manager:
    -   Microsoft Visual Studio [2017 Update 2](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2), [2017 Update 1](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update1) \(Enterprise and Professional editions\)
    -   Microsoft Visual Studio [2015](https://msdn.microsoft.com/en-us/library/dd831853(v=vs.140).aspx), 2015 Update 1 \(Enterprise, Professional and Test Professional editions\).
    -   Microsoft Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd831853(v=vs.120).aspx) \(Ultimate, Premium, Professional and Test Professional editions\).

## {{< expand >}} Lab environment where tests run

-   Microsoft Test Controller for Visual Studio:
    -   Test controller for Visual Studio [2015](https://msdn.microsoft.com/en-us/library/hh546459(v=vs.140).aspx#controller), 2015 Update 1.

        {{<note>}} Choose to download and install [Agents for Microsoft Visual Studio 2013 Update 5](https://www.visualstudio.com/vs/older-downloads/). This package includes installation of both test controllers and test agents.

    -   Test controller for Visual Studio [2013](http://msdn.microsoft.com/en-us/library/hh546459(v=vs.120).aspx#controller).
-   Microsoft Agents for Visual Studio:
    -   Test agent for Visual Studio [2015](https://msdn.microsoft.com/en-us/library/hh546459(v=vs.140).aspx#agent), 2015 Update 1.

        {{<note>}} Choose to download and install [Agents for Microsoft Visual Studio 2013 Update 5](https://www.visualstudio.com/vs/older-downloads/). This package includes installation of both test controllers and test agents.

    -   Test agent for Visual Studio [2013](http://msdn.microsoft.com/en-us/library/hh546459(v=vs.120).aspx#agent).

{{<remember>}}


Additionally, it is required that you be familiar with how to automate test cases in MTM \([learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/)\), and that you have:

-   Deployed and configured:
    -   [build server](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-server),
    -   [build controller](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-controller), and
    -   [build agent](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-agent/)
-   Configured and registered:
    -   [test controller](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-the-mtm-test-controller) and
    -   [test agent](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-the-mtm-test-agent).
-   Created and configured a TFS build definition. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/creating-and-configuring-a-build-definition/creating-xaml-build).\)
-   Queued the new build. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/queuing-a-new-build/queueing-a-new-xaml-build).\)
-   Created a new environment in MTM Lab Center. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/creating-new-environment-in-mtm-lab-center).\)
-   Configured run settings. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/configuring-run-settings).\)



