--- 
title: "Creating registered TA bugs with JIRA Bug Tracker"
linktitle: "Creating registered TA bugs with JIRA Bug Tracker"
description: "A registered bug is a TestArchitect bug (TA bug) associated with a JIRA bug issue."
weight: 2
aliases: 
    - /TA_Help/Topics/JIRA_creating_registered_bugs.html
keywords: "JIRA, creating registered bugs, integration, bugs, creating, registered bugs"
---

A registered bug is a TestArchitect bug \(TA bug\) associated with a JIRA bug issue.

Ensure that the following requirements are met:

-   Your TestArchitect test machine has [registered the JIRA server](/TA_Help/Topics/JIRA_registering.html).
-   A JIRA issue to be associated with a TA bug has already been created, and is of type Bug.

**Note:**

-   At present, TestArchitect-JIRA integration supports versions 5 and 6 of JIRA.

To create a registered TA bug, complete the following steps:

1.  Right-click the **Bugs** node in the TestArchitect explorer tree, then click **New Bug**.

    **Fastpath:** Ctrl + N

2.  In the New Bug dialog box, click the **Import** button.

    The Import Bug dialog box appears with the default user name and password configured in [Registering JIRA server](/TA_Help/Topics/JIRA_registering.html#step_wxv_tc5_2m).

    **Tip:** At your option, you may override the default user name and password with your own credentials for an existing account on the JIRA server.

3.  In the **Bug ID** text box, specify the bug ID of a JIRA bug you would like to associate this TA bug with.

    ![](/images/TA_Help/Images/Import_bug_dialog_box.png)

4.  Click **OK**.

    The password is verified after you click **OK**.

    The values obtained from the JIRA bug are loaded into the corresponding **Summary**, **Description**, **Source** and **Status** fields in the New Bug dialog box.

    ![](/images/TA_Help/Images/Associated_information.png)

    **Note:**

    -   Generally, a registered TA bug loads values from four JIRA built-in fields: **Key**, **Summary**, **Status**, and **Description**. However, you can have TestArchitect load additional JIRA fields, such as **Priority** or **Fix Version\(s\)**, by creating associated TestArchitect user-defined fields. See [Adding a custom field in TestArchitect](/TA_Help/Topics/Bugs_defined_field_TA.html) for further information.
    -   If the JIRA bug's status is different from Open, Closed or Reopened, the status of the registered TestArchitect bug is always set to Open. Refer to [TestArchitect bugs](/TA_Help/Topics/Bugs.html) for possible statuses, or stages, of a TestArchitect bug.
    -   Making changes to the **Summary** or **Description** field in the New Bug dialog box is possible.
5.  Click the **Create** button.

    **Restriction:**

    -   If you attempt to associate a TA bug with a JIRA issue that is not of the type Bug, an error message is presented:

        ![](/images/TA_Help/Images/Import_bug_other_type.png)

    -   Each JIRA bug ID can only be mapped to a single TestArchitect bug. If you attempt to import a JIRA bug that is already linked to a registered TA bug, the following message is displayed:

        ![](/images/TA_Help/Images/Associated_bug_error_message.png)


A registered bug is created and appears in the main panel. The fields of the **Information** tab below are explained in [TA bug information](/TA_Help/Topics/Bug_information.html).

![](/images/TA_Help/Images/Associated_bug_information_external_bug.png)

**Note:**

-   The TestArchitect **Bug ID** field is a combination of [a prefix key](/TA_Help/Topics/Projects_and_project_items_create_project.html) followed by an ID number, separated by a hyphen.
-   The ID number is automatically generated to avoid duplicate bugs in case of [replication repositories](/TA_Administration/Topics/Repo_server_management_replication_repo_intro.html).



