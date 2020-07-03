--- 
title: "Deploying and configuring a build agent for TFS-MTM integration"
linktitle: "Setting up a build agent"
description: "With Team Foundation Build (TFBuild), you can create and manage build processes that automatically compile and test your applications, and perform other important functions. You can use your build system to support a strategy of continuous integration or put even more rigorous quality checks in place that prevent bad quality code from breaking the build."
weight: 4
aliases: 
    - /TA_Help/Topics/ug_MTM_build_agent.html
keywords: "TFS, configuring a build agent, Team Foundation Server, integration, Microsoft Test Manager, configuring a build agent"
---

With Team Foundation Build \(TFBuild\), you can create and manage build processes that automatically compile and test your applications, and perform other important functions. You can use your build system to support a strategy of continuous integration or put even more rigorous quality checks in place that prevent bad quality code from breaking the build.

{{<remember>}} When you specify the working directory, which the build agent uses to read from or write to files, please ensure the path to the working directory is not too long. Specifically, the specified working directory must not cause the build agent to produce any physical paths that are longer than 259 characters \([learn more](https://msdn.microsoft.com/en-us/library/bb399135(v=vs.120).aspx#work_dir)\). Otherwise, your builds might fail and log this error: TF10128: The path <PhysicalPath\> contains more than the allowed 259 characters. Type or select a shorter path. When you encounter this issue, names of TestArchitect test results which are [uploaded](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/) to TFS are shortened \([learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/automatically-uploading-testarchitect-test-results-to-tfs#note.truncated_uploaded_TA_results)\).

-   **[Deploying build agent - XAML builds](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-agent/deploying-build-agent-xaml-builds)**  
To use TFBuild, you must have at least one build agent. A build agent does the processor-intensive work of your build, which includes getting files from version control, provisioning the workspace, compiling the code, running tests, and merging files back into version control. Each build agent is dedicated to a single build controller.
-   **[Deploying a Windows build agent - TFBuild](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-agent/deploying-a-windows-build-agent-tfbuild)**  
For TFBuild build definitions, to build Visual Studio solutions, you'll need at least one Windows build agent.




