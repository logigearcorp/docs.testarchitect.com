--- 
title: "Creating unregistered TA bugs"
linktitle: "Creating unregistered TA bugs"
aliases: 
    - /TA_Help/Topics/JIRA_creating_unregistered_bugs.html
---
# Creating unregistered TA bugs {#task_o5m_v4x_1m .task}

An unregistered TestArchitect bug \(TA bug\) is one that is created in TestArchitect but it is not associated with a JIRA bug.Note that you may link an unregistered TA bug with an existing JIRA bug, in which case the former becomes a registered TA bug.

**Note:**

-   At present, TestArchitect-JIRA integration supports versions 5 and 6 of JIRA.

To create an unregistered TestArchitect bug, complete the following steps:

1.  Right-click the **Bugs** node in the TestArchitect explorer tree, then click **New Bug**.

2.  In the New Bug dialog box, enter the following information:

    -   **Summary**: Brief description of the bug.
    -   **Description**: \(Optional\) Expanded version of the **Summary**, providing an overview of the problem along with a step-by-step of how to reproduce it, plus any other pertinent information.
    ![](../Images/New_bug_dlg_unlinked_bug.png)

3.  Click the **Create** button.


An unregistered bug is created and appears in the main Client panel. The fields in the **Bug Information** tab below are explained in [TA bug information](Bugs.md#sectiondiv_cln_skj_44).

![](../Images/Unlinked_bug_information.png)

**Note:**

-   The TestArchitect **Bug ID** field is a combination of [a prefix key](Projects_and_project_items_create_project.html) followed by an ID number, separated by a hyphen.
-   The ID number is automatically generated to avoid duplicate bugs in case of [replication repositories](../../TA_Administration/Topics/Repo_server_management_replication_repo_intro.html).

**Tip:** You may associate the newly created unregistered bug with a JIRA bug by entering the JIRA issue ID into the **Source** box, then clicking **Apply**. Data from the JIRA issue's fields are then imported to the TA bug. Ensure that your TestArchitect test machine has [registered the JIRA server](JIRA_registering.html).

**Restriction:**

-   If you attempt to associate a TA bug with a JIRA issue that is not of the type Bug, an error message is presented:

    ![](../Images/Import_bug_other_type.png)

-   Each JIRA bug ID can only be mapped to a single TestArchitect bug. If you attempt to import a JIRA bug that is already linked to a registered TA bug, the following message is displayed:

    ![](../Images/Associated_bug_error_message.png)


**Parent topic:**[TestArchitect bugs](../../TA_Help/Topics/Bugs.html)

**Next topic:**[Working with known bugs](../../TA_Help/Topics/Bugs_working_known_bug.html)

