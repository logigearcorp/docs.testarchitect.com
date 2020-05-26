--- 
title: "Creating a build definition and queuing a build"
linktitle: "Creating a build definition and queuing a build"
weight: 1
aliases: 
    - /TA_Help/Topics/TFS_web_creating_and_queuing_build.html
---
# Creating a build definition and queuing a build {#TFS2018_create_and_queue_build .task}

This topic gives you a basic guide on creating a build definition and queuing it in the TFS web portal.

-   You are familiar with the TFS web portal, particularly in build definition, release definition and test run.
-   You have a TA-TFS plug-in based solution to execute tests in your repository.

1.  In the TFS web portal, open the desired project.

2.  Select **Build and Release** and then **Builds** in the Navigation bar. Click the **+New** button to create a build definition.

3.  On the **Select your repository** page, select the preferred repository type and **Continue**.

    ![](../Images/TFS2018_build_def_select_source.png)

4.  On the **Choose a template** page, select the **Empty** template.

    ![](../Images/TFS2018_build_def_empty_template.png)

5.  On the **Tasks** tab, add the **Visual Studio Build** and **Publish Build Artifacts** tasks to the phase.

    ![](../Images/TFS2018_build_def_add_tasks.png)

6.  As you configure the **Visual Studio Build** task, in the **Solution** box, browse to the location of the TA-TFS plugin based solution.

    ![](../Images/TFS2018_build_solution.png)

7.  Save to finish creating a build defintion.

8.  Queue the build


**Parent topic:**[Team Foundation Server's web portal](../../TA_Help/Topics/TFS_web_automated_testing.html)

**Next topic:**[Creating a release definition](../../TA_Help/Topics/TFS_web_creating_release_def.html)

