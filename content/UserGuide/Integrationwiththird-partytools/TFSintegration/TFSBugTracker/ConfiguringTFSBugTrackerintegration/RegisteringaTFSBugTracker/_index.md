--- 
title: "Registering a TFS Bug Tracker"
linktitle: "Registering a TFS Bug Tracker"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_TFS_BugTracker_Registering_bugtracker.html
---
# Registering a TFS Bug Tracker {#ug_TFS_BugTracker_Registering_bugtracker .task}

Establishing a connection between your TestArchitect repository and the Team Foundation Server.

Ensure that the following requirements are met:

-   Your TestArchitect test machine has registered the [Team Foundation Server.](Integration_MTM_connecting_TFS.md#)
-   TFS login credentials.

    **Note:** TFS Bug Tracker will use the TFS server information user use for **Active** TFS server.


To register a TFS Bug Tracker with your TestArchitect reposiotry, do the following:

1.  [Active TFS server connection](Integration_MTM_connecting_TFS.md#)

2.  In the TEST MANAGEMENT window, select the **Active** TFS Bug Tracker check box to enable.

3.  **Optional**: **Auto fetch data:** 24-hour format. Daily time at which TestArchitect is to retrieve external bug information from the TFS server and update the registered TA bugs.

    Example: ![](../Images/ug_auto_fetch_data_TFS.PNG)

    **Note:** Auto fetch data required user input credential information by click **Authenticate**.

4.  **Optional**: **Linking bug by status**: You could choose which **This Run status** of the bug would attach with the result when uploading to TFS. Click [here](Bugs_working_known_bug_reviewing_test_results_JIRA.md#) for more information about **This Run status**

    Example:![](../Images/tfs_register2.png)

    ![](../Images/TFS_Bug.png)

5.  Click **Apply**


**Parent topic:**[Configuring TFS Bug Tracker integration](../../TA_Help/Topics/ug_TFS_BugTracker_configuration.html)

