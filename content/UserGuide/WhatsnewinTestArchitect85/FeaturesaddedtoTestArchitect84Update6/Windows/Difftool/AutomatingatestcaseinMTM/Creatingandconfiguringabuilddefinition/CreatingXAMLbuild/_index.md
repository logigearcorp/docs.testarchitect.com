--- 
title: "Creating XAML build"
linktitle: "Creating XAML build"
aliases: 
    - /TA_Help/Topics/MTM_create_build_definition.html
---
# Creating XAML build {#task_w1h_kbg_sq .task}

To run automated tests in Microsoft Test Manager, create a team build including your test project and add the build to your test plan.

A Team Foundation Server \(TFS\) build definition \(XAML builds\), for your project contains specifications such as which code projects to compile, what actions trigger a build, and what tests to run. \([Learn more](https://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx).\)

To create and configure an XAML build, carry out the following steps:

1.  Share a folder on the build server’s hard drive.

    This folder will store build results.

2.  In Visual Studio, open the Team Explorer panel \(if it is hidden, select **View** \> **Team Explorer** from Visual Studio’s main menu to display the panel\) and connect to your team project.

3.  In the Team Explorer - Home window, choose Builds.

    ![](../Images/VS_create_build_definition.png)

4.  In the Team Explorer - Builds window, choose **New Build Definition**.

    ![](../Images/VS_new_build_definition.png)

    The Build Definition window appears.

5.  Refer to the following Microsoft instructions to learn the details of how to create a new TFS build definition. \([Learn more](https://msdn.microsoft.com/en-us/library/ms181716(v=vs.120).aspx).\)

    To create a new XAML build, only configurations for the **Build Default** tab mentioned in the following steps are required. The others are optional.

6.  Keep in mind the following specific settings:

    -   On the **Build Defaults** tab, in the **Build controller** list, specify the [build controller](ug_MTM_config_build_controller.html) that will be used to process the team build.
    -   Also in the Staging location section of the tab, specify the way the build process should store the output files and logs:
        -   Copy build output to the following drop folder: Choose this option to copy output files to a drop folder on a file share server. In the box, type the Universal Naming Convention \(UNC\) file path of the folder into which you want the build system to write the output files. Note that you must specify a folder that has been prepared for use as a drop folder.

            ![](../Images/VS_new_build_definition_config.png)

7.  When you finish working on the build definition, on the **File** menu, choose **Save <Name of Build Definition\>**.

    **Fastpath:** Alternatively, press Ctrl+S to save your new build definition.


The XAML build you created appears on the Builds page in **Team Explorer**.

After you create an XAML build, start it to create a team build instance to be associated with your test plan. \([Learn more](MTM_queue_XAML_build.html).\)

**Parent topic:**[Creating and configuring a build definition](../../TA_Help/Topics/ug_MTM_build_definition.html)

