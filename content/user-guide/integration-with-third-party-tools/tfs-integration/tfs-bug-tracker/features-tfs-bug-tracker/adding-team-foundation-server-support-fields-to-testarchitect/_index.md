--- 
title: "Adding Team Foundation Server - support fields to TestArchitect"
linktitle: "Adding Team Foundation Server - support fields to TestArchitect"
weight: 4
aliases: 
    - /TA_Help/Topics/Bugs_defined_field_TFS.html
---

Registered TA bugs, by default, have the fields **Summary**, **Description**, **Source** and **Status**, all of which can be kept in sync with the associated TFS bug. User-defined fields can be created in TestArchitect to accept values from other fields of a TFS bug.

To ensure synchronization between a TFS field and its corresponding TestArchitect user-defined field, ensure that the field's names on both TFS and TestArchitect are identical.

To have user-defined fields in TA bugs that can accept values from TFS, repeat the following steps for each field you wish to create:

1.  In TestArchitect, create a [user-defined field](/TA_Administration/Topics/User_defined_fields_create.html) in TestArchitect with the following properties:

    -   **Name**: Be sure to enter a name which is identical to the existing TFS field, for example Activity.
    -   **Applied To**: Select Bug entity.
    -   **Value Type**: Select Single line text or Multi line text.
2.  Create a [registered bug](ug_TFS_BugTracker_creatingTAbugs.html#). Note that the new field appears in it.


The TestArchitect user-defined field loads additional value from TFS field, as depicted below:

![](/images//Images/Bug_user_define_fields_TFS.png)

**Parent topic:**[Features - TFS Bug Tracker](/TA_Help/Topics/ug_TFS_BugTracker_features.html)

