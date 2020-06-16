--- 
title: "Adding JIRA-support fields to TestArchitect"
linktitle: "Adding JIRA-support fields to TestArchitect"
description: "Registered TA bugs, by default, have the fields Summary, Description, Source and Status, all of which can be kept in sync with the associated JIRA bug. User-defined fields can be created in TestArchitect to accept values from other fields of a JIRA bug."
weight: 4
aliases: 
    - /TA_Help/Topics/Bugs_defined_field_TA.html
keywords: "JIRA, creating custom fields, custom fields, integration"
---

Registered TA bugs, by default, have the fields **Summary**, **Description**, **Source** and **Status**, all of which can be kept in sync with the associated JIRA bug. User-defined fields can be created in TestArchitect to accept values from other fields of a JIRA bug.

To ensure synchronization between a JIRA field and its corresponding TestArchitect user-defined field, ensure that the field's names on both JIRA and TestArchitect are identical.

**Note:**

-   At present, TestArchitect-JIRA integration supports versions 5 and 6 of JIRA.

To have user-defined fields in TA bugs that can accept values from JIRA, repeat the following steps for each field you wish to create:

1.  In TestArchitect, create a [user-defined field](/TA_Administration/Topics/User_defined_fields_create.html) in TestArchitect with the following properties:

    -   **Name**: Be sure to enter a name which is identical to the existing JIRA field, for example Affects Build.
    -   **Applied To**: Select Bug entity.
    -   **Value Type**: Select Single line text or Multi line text.
2.  Create a [registered bug](/TA_Help/Topics/JIRA_creating_registered_bugs.html). Note that the new field appears in it.


The TestArchitect user-defined field loads additional value from JIRA field, as depicted below:

![](/images/TA_Help/Images/Bug_user_defined_field.png)




