--- 
title: "Creating unregistered TA bugs"
linktitle: "Creating unregistered TA bugs"
description: "An unregistered TestArchitect bug (TA bug) is one that is created in TestArchitect but it is not associated with a JIRA bug."
weight: 1
aliases: 
    - /TA_Help/Topics/JIRA_creating_unregistered_bugs.html
keywords: "JIRA, creating unregistered bugs, integration, creating unregistered bugs, bugs, creating, unregistered bugs"
---

An unregistered TestArchitect bug \(TA bug\) is one that is created in TestArchitect but it is not associated with a JIRA bug.Note that you may link an unregistered TA bug with an existing JIRA bug, in which case the former becomes a registered TA bug.

{{<note>}}

-   At present, TestArchitect-JIRA integration supports versions 5 and 6 of JIRA.

To create an unregistered TestArchitect bug, complete the following steps:

1.  Right-click the **Bugs** node in the TestArchitect explorer tree, then click **New Bug**.

2.  In the New Bug dialog box, enter the following information:

    -   **Summary**: Brief description of the bug.
    -   **Description**: \(Optional\) Expanded version of the **Summary**, providing an overview of the problem along with a step-by-step of how to reproduce it, plus any other pertinent information.
    ![](/images/TA_Help/Images/New_bug_dlg_unlinked_bug.png)

3.  Click the **Create** button.


An unregistered bug is created and appears in the main Client panel. The fields in the **Bug Information** tab below are explained in [TA bug information](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/#sectiondiv_cln_skj_44).

![](/images/TA_Help/Images/Unlinked_bug_information.png)

{{<note>}}

-   The TestArchitect **Bug ID** field is a combination of [a prefix key](/user-guide/projects-and-project-items/projects-in-testarchitect/create-a-new-project) followed by an ID number, separated by a hyphen.
-   The ID number is automatically generated to avoid duplicate bugs in case of [replication repositories](/administration-guide/repository-server-management/replication-repositories/introduction-to-replication-repositories).

{{<tip>}} You may associate the newly created unregistered bug with a JIRA bug by entering the JIRA issue ID into the **Source** box, then clicking **Apply**. Data from the JIRA issue's fields are then imported to the TA bug. Ensure that your TestArchitect test machine has [registered the JIRA server](/user-guide/integration-with-third-party-tools/jira-integration/configuring-jira-integration/registering-a-jira-server).

{{<restriction>}}

-   If you attempt to associate a TA bug with a JIRA issue that is not of the type Bug, an error message is presented:

    ![](/images/TA_Help/Images/Import_bug_other_type.png)

-   Each JIRA bug ID can only be mapped to a single TestArchitect bug. If you attempt to import a JIRA bug that is already linked to a registered TA bug, the following message is displayed:

    ![](/images/TA_Help/Images/Associated_bug_error_message.png)




