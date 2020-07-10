--- 
title: "Creating registered TA bugs with TFS Bug Tracker"
linktitle: "Creating registered TA bugs with TFS Bug Tracker"
description: "A registered bug is a TestArchitect bug (TA bug) associated with a Team Foundation Server bug issue."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_TFS_BugTracker_creatingTAbugs.html
keywords: "TFS, creating registered bugs, integration, creating registered bugs, bugs, creating, registered bugs"
---

A registered bug is a TestArchitect bug \(TA bug\) associated with a Team Foundation Server bug issue.

Ensure that the following requirements are met:

-   Your TestArchitect test machine has [registered](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/configuring-ta-for-a-tfs-connection#) and [actived bug tracker](/user-guide/integration-with-third-party-tools/tfs-integration/tfs-bug-tracker/configuring-tfs-bug-tracker-integration/registering-a-tfs-bug-tracker#) of Team Foundation Server.
-   A TFS Bug to be associated with a TA bug has already been created, and is of type Bug.

    {{<note>}} In TFS server, TestArchitect only support process template include **Bug** type in Work Item Type list.


To create a registered TA bug, complete the following steps:

1.  Right-click the **Bugs** node in the TestArchitect explorer tree, then click **New Bug**.

    **Fastpath:** Ctrl + N

2.  In the New Bug dialog box, click the **Import** button.

    The Import Bug dialog box appears.

3.  In the Bug ID text box, specify the bug ID of a TFS bug you would like to associate this TA bug with.

    ![](/images/TA_Help/Images/ug_Bug_ID_TFS.png)

4.  Click **OK**

    The username and password is verified after you click **OK**.

    The values obtained from the TFS bug are loaded into the corresponding **Summary**, **Description**, **Source** and **Status** fields in the New Bug dialog box.

    ![](/images/TA_Help/Images/ug_TFS_importbug.png)

    {{<note>}}

    -   Generally, a registered TA bug loads values from four TFS built-in fields: **Key**, **Summary**, **Status**, and **Description**. However, you can have TestArchitect load additional TFS fields, such as **Priority** or **Severity**, by creating associated TestArchitect user-defined fields. See [Adding a custom field in TestArchitect](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/adding-jira-support-fields-to-testarchitect) for further information.
    -   Making changes to the **Summary** or **Description** field in the New Bug dialog box is possible.
5.  Click the **Create** button.

    {{<restriction>}}

    -   If you attempt to associate a TA bug with a TFS issue that is not of the type Bug, an error message is presented:

        ![](/images/TA_Help/Images/Import_bug_other_type.png)

    -   Each TFS bug ID can only be mapped to a single TestArchitect bug. If you attempt to import a TFS bug that is already linked to a registered TA bug, the following message is displayed:

        ![](/images/TA_Help/Images/Associated_bug_error_message.png)

    A registered bug is created and appears in the main panel. The fields of the Information tab below are explained in [TA bug information](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/ta-bug-information).

    ![](/images/TA_Help/Images/ug_TFS_bug_information_external_bug.png)

    {{<note>}}

    -   The TestArchitect **Bug ID** field is a combination of [a prefix key](/user-guide/projects-and-project-items/projects-in-testarchitect/create-a-new-project) followed by an ID number, separated by a hyphen.
    -   The ID number is automatically generated to avoid duplicate bugs in case of [replication repositories](/administration-guide/repository-server-management/replication-repositories/introduction-to-replication-repositories).


