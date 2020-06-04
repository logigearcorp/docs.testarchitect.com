--- 
title: "Submitting TestArchitect bugs to Team Foundation Server"
linktitle: "Submitting TestArchitect bugs to Team Foundation Server"
weight: 3
aliases: 
    - /TA_Help/Topics/TFS_submitting_bug.html
---

Submitting a bug from TestArchitect directly to a TFS server creates a new TFS bug on the server.

Ensure that the following requirements are met:

-   Your TestArchitect test machine has [registered the TFS server](Integration_MTM_connecting_TFS.html#).
-   Your TestArchitect test machine has [actived the TFS bug tracker](ug_TFS_BugTracker_Registering_bugtracker.html#).
-   You are granted permission to submit bugs to a TFS project.

To submit a bug from a TestArchitect test result to a TFS project, do the following steps:

1.  In the TestArchitect explorer tree, double-click a local or repository test result node to open it.

2.  On the main panel's toolbar, click the **Submit Bug to Bug Tracking System** ![](/images//Images/Submit_bug_to_JIRA_icon.png) icon.

3.  In the Submit Bug to TFS dialog box, TestArchitect would automatically use the credential information user use for active TFS server and map project to establish a connection to an appropriate project on the TFS.

4.  After the connection is established successfully, provide details for the submitted bug:

    -   **Priority**: Importance of the issue.
    -   **Assigned To**: Person to whom the bug is assigned.
    -   **Severity**: Impact of the issue.
    -   **Summary**: A brief one-line summary of the bug.
    -   **Description**: A detailed description of the bug.
    ![](/images//Images/ug_submit_bug_TFS.png)

5.  By default, the **Submit TestArchitect HTML test result as attachment** check box is selected, to attach the HTML test result to the TFS bug. Clear this check box if you don't want the HTML test result attached to the TFS bug.

    **Optional**: By default **Automatically compress result\(s\) if file size \> KB** check box is un-selected and default value is 2048 KB, to upload the result as a compressed \(zipped\) HTML file if the file exceeds the specified size. Otherwise, upload the result as an uncompressed HTML file.

6.  Click **OK**

    TestArchitect creates a TFS issue whose issue type is Bug.

7.  In the notification message

    ![](/images//Images/Submit_bug_to_JIRA_confirmation.png)


Once the bug has been successfully created on the TFS server, it is automatically opened in your default web browser when user click **Yes**.

**Parent topic:**[Features - TFS Bug Tracker](/TA_Help/Topics/ug_TFS_BugTracker_features.html)

