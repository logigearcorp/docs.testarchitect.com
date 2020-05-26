--- 
title: "Running automated tests"
linktitle: "Running automated tests"
weight: 3
aliases: 
    - /TA_Help/Topics/TFS_web_runnning_automated_tests.html
---
# Running automated tests {#TFS2018_runnning_automated_tests .task}

-   You are familiar with the TFS web portal, particularly in build definition, release definition and test run.
-   You have a TA-TFS plug-in based solution to execute tests in your repository.

1.  In the TFS web portal, open the desired project.

2.  Select **Test** and then **Test Plans** in the Navigation bar

3.  Select the test\(s\) you want to run. Next, click the **Run** dropdown button and select **Run with options**.

    ![](../Images/TFS2018_run_tests.png)

4.  In the **Run with options** dialog box,

    ![](../Images/TFS2018_Run_with_options_dlg.png)

    1.  Select Automated tests using Release environment from the Test type and runner dropdown list.

    2.  Choose the appropriate build artifact, release and environment for the testing.

    3.  Click the **OK** button.


**See also**:

-   [Run automated tests from test plans](https://docs.microsoft.com/en-us/azure/devops/test/run-automated-tests-from-test-hub?view=vsts)

**Parent topic:**[Team Foundation Server's web portal](../../TA_Help/Topics/TFS_web_automated_testing.html)

**Previous topic:**[Creating a release definition](../../TA_Help/Topics/TFS_web_creating_release_def.html)

