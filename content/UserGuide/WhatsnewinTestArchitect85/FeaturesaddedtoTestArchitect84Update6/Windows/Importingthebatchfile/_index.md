--- 
title: "Importing the batch file"
linktitle: "Importing the batch file"
aliases: 
    - /TA_Help/Topics/Integration_Jenkins_import.html
---
# Importing the batch file {#Integration_Jenkins_import .task}

You need to import the newly-generated batch file into the Jenkins master machine so that it is able to monitor and control its jobs related to executing test modules.

1.  On the Jenkins dashboard, select **New Job** ![](../Images/Jenkins_add_job.png).

2.  Enter a **Job name** and select a project category.

    ![](../Images/Jenkins_add_job_name.png)

3.  Click **OK**.

    The Config page appears.

4.  In the **Build** section, click**Add build step**.

5.  In the drop-down list, select **Execute Windows batch command**.

6.  Enter the path to the batch file in the **Command** text box.

    ![](../Images/Jenkins_config_build.png)

    **Note:** The batch file must be stored on the Jenkins master machine. You must copy the generated batch files on the Jenkins slave machines and paste them into the Jenkins master machine.

7.  In the **Post-Build Actions** section, click **Add post-build action**.

8.  In the drop-down list, select **Publish JUnit test result report**.

9.  Enter \*.xml into the **Test report XMLs** text box to specify that all XML files related to executing test modules are to be selected.

    ![](../Images/Jenkins_config2_build.png)

10. Click **Save**.


**Parent topic:**[Jenkins](../../TA_Help/Topics/Integration_Jenkins.html)

**Previous topic:**[Creating a batch file](../../TA_Help/Topics/Integration_Jenkins_create_batch_file.html)

