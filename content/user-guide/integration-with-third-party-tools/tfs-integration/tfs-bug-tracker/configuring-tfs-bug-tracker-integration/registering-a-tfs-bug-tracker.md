--- 
title: "Registering a TFS Bug Tracker"
linktitle: "Registering a TFS Bug Tracker"
description: "Establishing a connection between your TestArchitect repository and the Team Foundation Server."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_TFS_BugTracker_Registering_bugtracker.html
keywords: "TFS, bug tracker, integration, bug tracker"
---

Establishing a connection between your TestArchitect repository and the Team Foundation Server.

Ensure that the following requirements are met:

-   Your TestArchitect test machine has registered the [Team Foundation Server.](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/configuring-ta-for-a-tfs-connection#)
-   TFS login credentials.

    {{<note>}} TFS Bug Tracker will use the TFS server information user use for **Active** TFS server.


To register a TFS Bug Tracker with your TestArchitect reposiotry, do the following:

1.  [Active TFS server connection](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/configuring-ta-for-a-tfs-connection#)

2.  In the TEST MANAGEMENT window, select the **Active** TFS Bug Tracker check box to enable.

3.  **Optional**: **Auto fetch data:** 24-hour format. Daily time at which TestArchitect is to retrieve external bug information from the TFS server and update the registered TA bugs.

    Example: ![](/images/TA_Help/Images/ug_auto_fetch_data_TFS.png)

    {{<note>}} Auto fetch data required user input credential information by click **Authenticate**.

4.  **Optional**: **Linking bug by status**: You could choose which **This Run status** of the bug would attach with the result when uploading to TFS. 

    Example:![](/images/TA_Help/Images/tfs_register2.png)

    ![](/images/TA_Help/Images/TFS_Bug.png)

5.  Click **Apply**



