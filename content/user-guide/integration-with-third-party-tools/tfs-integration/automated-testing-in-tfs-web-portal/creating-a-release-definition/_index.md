--- 
title: "Creating a release definition"
linktitle: "Creating a release definition"
description: "This topic gives you a basic guide on creating a release definition in the TFS web portal."
weight: 2
aliases: 
    - /TA_Help/Topics/TFS_web_creating_release_def.html
keywords: "create, release definition"
---

This topic gives you a basic guide on creating a release definition in the TFS web portal.

-   You are familiar with the TFS web portal, particularly in build definition, release definition and test run.
-   You have a TA-TFS plug-in based solution to execute tests in your repository.

1.  In the TFS web portal, open the desired project.

2.  Select **Build and Release** and then **Releases** in the Navigation bar.

3.  Click the plus sign \(**+**\) dropdown button, and select **Create release definition**.

4.  In the **Pipeline** tab, add an artifact:

    ![](/images/TA_Help/Images/TFS2018_release_def_add_artifact.png)

    1.  Under **Source type**, select **Build**

    2.  Select the TA-TFS plug-in based build artifact from the **Source \(Build Definition\)** dropdown list.

5.  Add an environment

    1.  Under **Select a Template**, choose the **Empty** template

        ![](/images/TA_Help/Images/TFS2018_release_def_select_template.png)

    2.  Click the link showing the number of phases and tasks under the environment name.

        ![](/images/TA_Help/Images/TFS2018_release_def_env.png)

    3.  On the **Tasks** tab, configure **Agent phase**: select the agent queue to run tests

        **Note:** In order to run Visual Studio Test, an agent queue needs to have VSTest.Console.exe.

        -   You can acquire VSTest.Console.exe by installing Visual Studio.
        -   If VSTest.Console.exe already exists on the agent queue, you can custom the VS Test parameter in **Agent Queues**
    4.  Add the **Visual Studio Test** task to the phase and configure it.

        1.  Select Test run from the **Select test using** dropdown list.
        2.  Browse to the location of the TA-TFS plug-in based artifact in the **Search folder** box.
        ![](/images/TA_Help/Images/TFS2018_release_def_add_tasks_to_env.png)

6.  Once you have set all parameters, click the **Save** button.


An environment has been created.




