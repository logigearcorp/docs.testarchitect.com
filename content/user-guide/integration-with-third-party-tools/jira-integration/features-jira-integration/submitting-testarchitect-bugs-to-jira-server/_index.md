--- 
title: "Submitting TestArchitect bugs to JIRA server"
linktitle: "Submitting TestArchitect bugs to JIRA server"
weight: 3
aliases: 
    - /TA_Help/Topics/JIRA_submitting_bug.html
---

Submitting a bug from TestArchitect directly to a JIRA server creates a new JIRA bug on the server.

Ensure that the following requirements are met:

-   Your TestArchitect test machine has [registered the JIRA server](JIRA_registering.html).
-   You are granted permission to submit bugs to a JIRA project.

**Note:**

-   At present, TestArchitect-JIRA integration supports versions 5 and 6 of JIRA.

To submit a bug from a TestArchitect test result to a JIRA project, do the following steps:

1.  In the TestArchitect explorer tree, double-click a local or repository test result node to open it.

2.  On the main panel's toolbar, click the **Submit Bug to Bug Tracking System** ![](/images//Images/Submit_bug_to_JIRA_icon.png) icon.

3.  In the Submit Bug to JIRA dialog box, establish a connection to an appropriate project on the JIRA server by providing the following information within the JIRA System Information panel:

    -   **Server**: \(read-only\) URL of the JIRA server. This URL is configured in [Registering the JIRA server](JIRA_registering.html#step_wxv_tc5_2m).
    -   **Username**: Default JIRA user name to log on with.
    -   **Password**: JIRA password associated with the given user name.
    -   **Project Key**: JIRA project name to establish the connection with.
    **Tip:** At your option, you may override the default user name and password with your own credentials for an existing account on the JIRA server.

    ![](/images//Images/Submit_bug_to_JIRA_dlg.png)

4.  Click the **Connect** button.

5.  After the connection is established successfully, provide details for the submitted bug:

    -   **Priority**: Importance of the issue
    -   **Assigned To**: Person to whom the bug is assigned.
    -   **Summary**: A brief one-line summary of the bug.
    -   **Description**: A detailed description of the bug.
    ![](/images//Images/Submit_bug_to_JIRA_dlg_General_Bug_Information.png)

6.  By default, the **Submit TestArchitect HTML test result as attachment** check box is selected, to attach the HTML test result to the JIRA bug. Clear this check box if you don't want the HTML test result attached to the JIRA bug.

7.  Click **OK**.

    TestArchitect creates a JIRA issue whose issue type is Bug,

8.  In the notification message, click **Yes** to continue.

    ![](/images//Images/Submit_bug_to_JIRA_confirmation.png)


Once the bug has been successfully created on the JIRA server, it is automatically opened in your default web browser.

**Parent topic:**[Features - JIRA integration](/TA_Help/Topics/JIRA_features.html)

**Previous topic:**[Working with JIRA attachments](/TA_Help/Topics/Bug_working_attachments.html)

**Next topic:**[Adding JIRA-support fields to TestArchitect](/TA_Help/Topics/Bugs_defined_field_TA.html)

