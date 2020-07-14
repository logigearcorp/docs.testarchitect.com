--- 
title: "Importing the batch file"
linktitle: "Importing the batch file"
description: "You need to import the newly-generated batch file into the Jenkins master machine so that it is able to monitor and control its jobs related to executing test modules."
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_Jenkins_import.html
keywords: "Jenkins, importing batch files"
---

You need to import the newly-generated batch file into the Jenkins master machine so that it is able to monitor and control its jobs related to executing test modules.

1.  On the Jenkins dashboard, select **New Job** ![](/images/TA_Help/Images/Jenkins_add_job.png).

2.  Enter a **Job name** and select a project category.

    ![](/images/TA_Help/Images/Jenkins_add_job_name.png)

3.  Click **OK**.

    The Config page appears.

4.  In the **Build** section, click**Add build step**.

5.  In the drop-down list, select **Execute Windows batch command**.

6.  Enter the path to the batch file in the **Command** text box.

    ![](/images/TA_Help/Images/Jenkins_config_build.png)

    {{<note>}} The batch file must be stored on the Jenkins master machine. You must copy the generated batch files on the Jenkins slave machines and paste them into the Jenkins master machine.

7.  In the **Post-Build Actions** section, click **Add post-build action**.

8.  In the drop-down list, select **Publish JUnit test result report**.

9.  Enter \*.xml into the **Test report XMLs** text box to specify that all XML files related to executing test modules are to be selected.

    ![](/images/TA_Help/Images/Jenkins_config2_build.png)

10. Click **Save**.




