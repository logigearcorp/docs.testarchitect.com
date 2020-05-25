--- 
title: "Defining your process for TFBuild"
linktitle: "Defining your process for TFBuild"
aliases: 
    - /TA_Help/Topics/ug_MTM_specify_build_steps.html
---
# Defining your process for TFBuild {#task_qxj_rvj_4v .task}

This topic describes how to define a process for TFBuild, also known as Build VNext. This new build is web- and script-based and highly customizable, providing those groups of steps that allow you to build your applications without needing to be concerned with tools or languages.

There are numerous ways to define the process to suit your organization's needs. This guide describes the simplest way to create a build definition that, when [queued](ug_MTM_queue_BuildVNext.html), ensures that your test cases are automatically executed upon completion of the build. \([Learn more](https://msdn.microsoft.com/en-us/library/vs/alm/build/define/create).\)

1.  Create a [**Visual Studio Build**](https://docs.microsoft.com/en-us/vsts/build-release/tasks/build/visual-studio-build?view=vsts).

    ![](../Images/create_VS_build.png)

2.  Add steps to specify what you want to build, which tests to run, and all those other steps needed to complete the process.\([Learn more](https://msdn.microsoft.com/en-us/library/vs/alm/build/steps/index)\)

    The following scenario offers a simplified example of the setup needed for a successful build defintion that allows for automatic testing of the completed build. Refer to the [Microsoft documentation](https://www.visualstudio.com/docs/build/define/build) for a complete description of all involved parameters.

    ![](../Images/ug_MTM_build_steps.png)

    1.  Build:
        -   Visual Studio Build: Build with MSBuild and set the Visual Studio version property \([Learn more](https://msdn.microsoft.com/library/vs/alm/build/steps/build/visual-studio-build).\)

            -   Solution: Select the solution to be built.
            ![](../Images/ug_MTM_build_steps_VS_build.png)

    2.  Test:
        -   Visual Studio Test: Run tests with the Visual Studio test runner. \([Learn more](https://msdn.microsoft.com/library/vs/alm/build/steps/test/visual-studio-test).\)

            -   Test Assembly: Set the appropriate filepath for the Test Assembly argument, according to your project. Example:
            ![](../Images/ug_MTM_build_steps_VS_test.png)

    3.  Utility:
        -   Copy and Publish Build Artifacts: Copy build artifacts and the AUT, to a staging folder and then publish them to the server or a file share. \([Learn more](https://msdn.microsoft.com/library/vs/alm/build/steps/utility/copy-and-publish-build-artifacts).\)

            -   Copy Root: Folder that contains the AUT files you want to copy.
            -   **Contents**: Specify \*\*\\bin to copy AUT files in any sub-folder named bin.
            -   Artifact name: Specify the name of the artifact, e.g., AUTDrop.
            -   Artifact Type: A dropdown list offers you options of where to have the artifact copied. Let's select "File share" to have it copied to a file share.
            -   Path: As we've chosen to use a file share, we here specify the UNC file path to the share. Using variables, you can uniquely name the folder for each build. For example \\\\lgvn14253-w10\\Drop fodler\\$\(Build.DefinitionName\)\\$\(Build.BuildNumber\).
            ![](../Images/ug_MTM_build_steps_copy.png)

    4.  Deploy:
        -   Windows Machine File Copy: Copy files to remote machine\(s\) \([Learn more](https://msdn.microsoft.com/library/vs/alm/build/steps/deploy/windows-machine-file-copy).\)

            -   Source: The source of the .dll files
            -   Machines: Name of the resource group specifying the Windows machines used to run remotely.
            -   Destination Folder: Filepath specifying the folder in each of the Windows machines to which the .dll files will be copied. Note that the folder must exist \(i.e., you must create it manually\). The build process will not create it.
            ![](../Images/ug_MTM_build_steps_windows_machine_copy.png)

    5.  **Test**:
        1.  Visual Studio Test Agent Deployment: Deploy and configure the test agent to run tests remotely on a set of machines. \([Learn more](https://msdn.microsoft.com/library/vs/alm/build/steps/test/visual-studio-test-agent-deployment).\)

            -   Test Machine Group/Azure Resource Group: A list of the machines on which the test agent is to be deployed. In this example, we specify the name of a Machine Group. \(Read [here](https://msdn.microsoft.com/library/vs/alm/build/steps/test/visual-studio-test-agent-deployment#machgroup) to configure a Machine Group for testing.\)
            -   Username: The username that the test agent will use.
            -   Password: The password for Username.
            -   Interactive Process: This box should be checked. This is required for interacting with UI elements or starting applications during testing.
            -   Update Test Agent: If checked, and the test agent is already installed on the test machines, the task will check whether a new version of the test agent is available and, if so, install it.
            ![](../Images/ug_MTM_build_steps_VS_test_agent_deployment.png)

        2.  Run Functional Tests: Run Coded UI/Selenium/Functional tests on a set of machines using the test agent. \([Learn more](https://msdn.microsoft.com/library/vs/alm/build/steps/test/run-functional-tests).\)

            **Remember:** This task must be preceded by a [Visual Studio Test Agent Deployment](ug_MTM_specify_build_steps.md#li.VS_test_agent_deployment) task.

            -   Test Machine Group/Azure Resource Group: A list of the machines on which the test agent is to be deployed. In this example, we specify the name of a Machine Group. \(Read [here](https://msdn.microsoft.com/library/vs/alm/build/steps/test/run-functional-tests#machgroup) to configure a Machine Group for testing.\)
            -   Test Drop Location: The location on the test machine\(s\) where the test binaries can be found, having been written there during the [Windows Machine File Copy](ug_MTM_specify_build_steps.md#li.Windows_machine_file_copy) phase.
            ![](../Images/ug_MTM_build_steps_functional_test.png)


**Tip:** You can also create a vNext build definition in the [TFS web portal](TFS_web_creating_and_queuing_build.html).

**Parent topic:**[Creating and configuring a build definition](../../TA_Help/Topics/ug_MTM_build_definition.html)

