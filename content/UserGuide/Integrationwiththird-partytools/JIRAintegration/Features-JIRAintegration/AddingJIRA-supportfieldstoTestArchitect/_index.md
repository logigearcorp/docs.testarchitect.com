--- 
title: "Adding JIRA-support fields to TestArchitect"
linktitle: "Adding JIRA-support fields to TestArchitect"
weight: 4
aliases: 
    - /TA_Help/Topics/Bugs_defined_field_TA.html
---
# Adding JIRA-support fields to TestArchitect {#task_iyh_s2y_1m .task}

Registered TA bugs, by default, have the fields **Summary**, **Description**, **Source** and **Status**, all of which can be kept in sync with the associated JIRA bug. User-defined fields can be created in TestArchitect to accept values from other fields of a JIRA bug.

To ensure synchronization between a JIRA field and its corresponding TestArchitect user-defined field, ensure that the field's names on both JIRA and TestArchitect are identical.

**Note:**

-   At present, TestArchitect-JIRA integration supports versions 5 and 6 of JIRA.

To have user-defined fields in TA bugs that can accept values from JIRA, repeat the following steps for each field you wish to create:

1.  In TestArchitect, create a [user-defined field](../../TA_Administration/Topics/User_defined_fields_create.html) in TestArchitect with the following properties:

    -   **Name**: Be sure to enter a name which is identical to the existing JIRA field, for example Affects Build.
    -   **Applied To**: Select Bug entity.
    -   **Value Type**: Select Single line text or Multi line text.
2.  Create a [registered bug](JIRA_creating_registered_bugs.html). Note that the new field appears in it.


The TestArchitect user-defined field loads additional value from JIRA field, as depicted below:

![](../Images/Bug_user_defined_field.png)

**Parent topic:**[Features - JIRA integration](../../TA_Help/Topics/JIRA_features.html)

**Previous topic:**[Submitting TestArchitect bugs to JIRA server](../../TA_Help/Topics/JIRA_submitting_bug.html)

**Next topic:**[Integrating JIRA and TestArchitect bug tracking](../../TA_Help/Topics/Bugs_working_known_bug_JIRA.html)

