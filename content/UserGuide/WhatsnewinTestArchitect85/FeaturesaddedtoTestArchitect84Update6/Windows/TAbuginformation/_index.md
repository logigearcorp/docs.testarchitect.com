--- 
title: "TA bug information"
linktitle: "TA bug information"
aliases: 
    - /TA_Help/Topics/Bug_information.html
---
# TA bug information {#reference_czd_q4d_bm .reference}

Information regarding a TA bug is presented in two tabs. The **Information** tab contains general information about the bug. The **Related Items** tab lists those test modules whose execution exposes the bug.

## **Information** tab {#section_e2w_w4d_bm .section}

![](../Images/Associated_bug_information.png)

The fields displayed in the above **Information** tab are as follows:

|Field|Description|
|-----|-----------|
|**Bug ID**|\(Automatically generated\) The ID of the TA bug. This bug ID is combination of [a prefix key](Projects_and_project_items_create_project.html) followed by an ID number, separated by a hyphen.|
|**Summary**|A brief one-line summary of the TA bug. **Note:** The **Summary** field cannot be empty.

|
|**Description**|A detailed description of the TA bug.|
|**URL**|\(Automatically generated\) The [TestArchitect URL address](Additional_features_TA_URL.html) of this bug.|
|**Source**|The JIRA bug ID associated with the TA bug.

 **Note:**

-   If this is an unregistered bug, this field is empty.
-   You may change the **Source** value to drop the current link and association this bug with another JIRA bug.
-   You can also clear the **Source** content to decouple this bug from its associated JIRA bug, rendering this an unregistered bug.

|
|**Current status**|The current life cycle stage of this TA bug \(refer to [Workflow](Bugs.md#ksec_tabugs_workflow)\)|
|**Last update date**|The date on which this TA bug was last updated from JIRA.|
|**Last update by**|The person who last edited this TA bug.|
|**Creation date**|The date on which this TA bug was created in TestArchitect.|
|**Created by**|The person who created this TestArchitect bug.|
|**Last refresh status**|The status of the most recent refresh via clicking the **Refresh** button .The 4 possible returned values are:-   Empty: This bug is unregistered.
-   Updated: This registered bug was updated successfully.
-   Failed: This registered bug was not updated successfully.
-   Nonexistent on JIRA: The corresponding JIRA bug was deleted.

|

**Tip:** To update the TA bug from the fields of its JIRA counterpart, click the **Refresh** button. Note, however, that a minimum interval of 60 seconds between refreshes is imposed for a given TestArchitect Client.

## **Related Items** tab {#section_hc2_x4d_bm .section}

![](../Images/Associated_bug_related_items.png)

The column heading fields of the **Related Items** tab \(above\) are:

|**Field**|**Description**|
|---------|---------------|
|**Test Module**|Name of a test module which exposes the bug.|
|**Test Case**|The particular section in the test module in which the bug is exposed. The section can be `Initial`, `Final` or a specific test case.

|
|**Test Line**|The line number where the bug is marked as a known bug.|
|**Marked By**|The person who marked the bug.|

**Parent topic:**[Features - JIRA integration](../../TA_Help/Topics/JIRA_features.html)

**Next topic:**[Working with JIRA attachments](../../TA_Help/Topics/Bug_working_attachments.html)

