--- 
title: "TA bug information"
linktitle: "TA bug information"
weight: 1
aliases: 
    - /TA_Help/Topics/Bug_information_TFS.html
---

Information regarding a TA bug is presented in two tabs. The **Information** tab contains general information about the bug. The **Related Items** tab lists those test modules whose execution exposes the bug.

## **Information** tab

![](/images//Images/Associated_bug_information_external_bug.png)

The fields displayed in the above **Information** tab are as follows:

|Field|Description|
|-----|-----------|
|**Bug ID**|\(Automatically generated\) The ID of the TA bug. This bug ID is combination of [a prefix key](Projects_and_project_items_create_project.html) followed by an ID number, separated by a hyphen.|
|**Summary**|A brief one-line summary of the TA bug. **Note:** The **Summary** field cannot be empty.

|
|**Description**|A detailed description of the TA bug.|
|**URL**|\(Automatically generated\) The [TestArchitect URL address](Additional_features_TA_URL.html) of this bug.|
|**Source**|The TFS bug ID associated with the TA bug.

 **Note:**

-   If this is an unregistered bug, this field is empty.
-   You may change the **Source** value to drop the current link and association this bug with another TFS bug.
-   You can also clear the **Source** content to decouple this bug from its associated TFS bug, rendering this an unregistered bug.

|
|**Current status**|The current life cycle stage of this TA bug \(refer to [Workflow](Bugs.html#ksec_tabugs_workflow)\)|
|**Last update date**|The date on which this TA bug was last updated from TFS.|
|**Last update by**|The person who last edited this TA bug.|
|**Creation date**|The date on which this TA bug was created in TestArchitect.|
|**Created by**|The person who created this TestArchitect bug.|
|**Last refresh status**|The status of the most recent refresh via clicking the **Refresh** button .The 4 possible returned values are:-   Empty: This bug is unregistered.
-   Updated: This registered bug was updated successfully.
-   Failed: This registered bug was not updated successfully.
-   Nonexistent on TFS: The corresponding TFS bug was deleted.

|

**Tip:** To update the TA bug from the fields of its TFS counterpart, click the **Refresh** button. Note, however, that a minimum interval of 60 seconds between refreshes is imposed for a given TestArchitect Client.

## **Related Items** tab

![](/images//Images/Associated_bug_related_items.png)

The column heading fields of the **Related Items** tab \(above\) are:

|**Field**|**Description**|
|---------|---------------|
|**Test Module**|Name of a test module which exposes the bug.|
|**Test Case**|The particular section in the test module in which the bug is exposed. The section can be `Initial`, `Final` or a specific test case.

|
|**Test Line**|The line number where the bug is marked as a known bug.|
|**Marked By**|The person who marked the bug.|

**Parent topic:**[Features - TFS Bug Tracker](/TA_Help/Topics/ug_TFS_BugTracker_features.html)

