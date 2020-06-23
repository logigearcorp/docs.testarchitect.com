--- 
title: "TA bug information"
linktitle: "TA bug information"
description: "Information regarding a TA bug is presented in two tabs. The Information tab contains general information about the bug. The Related Items tab lists those test modules whose execution exposes the bug."
weight: 1
aliases: 
    - /TA_Help/Topics/Bug_information_TFS.html
keywords: "bugs, information, related items"
---

Information regarding a TA bug is presented in two tabs. The **Information** tab contains general information about the bug. The **Related Items** tab lists those test modules whose execution exposes the bug.

## **Information** tab

![](/images/TA_Help/Images/Associated_bug_information_external_bug.png)

The fields displayed in the above **Information** tab are as follows:

|Field|Description|
|-----|-----------|
|**Bug ID**|\(Automatically generated\) The ID of the TA bug. This bug ID is combination of [a prefix key](/TA_Help/Topics/Projects_and_project_items_create_project.html) followed by an ID number, separated by a hyphen.|
|**Summary**|A brief one-line summary of the TA bug. {{<note>}} The **Summary** field cannot be empty.<br><br>|<br>
|**Description**|A detailed description of the TA bug.|
|**URL**|\(Automatically generated\) The [TestArchitect URL address](/TA_Help/Topics/Additional_features_TA_URL.html) of this bug.|
|**Source**|The TFS bug ID associated with the TA bug.<br><br> {{<note>}}<br><br>-   If this is an unregistered bug, this field is empty.<br>-   You may change the **Source** value to drop the current link and association this bug with another TFS bug.<br>-   You can also clear the **Source** content to decouple this bug from its associated TFS bug, rendering this an unregistered bug.<br><br>|<br>
|**Current status**|The current life cycle stage of this TA bug \(refer to [Workflow](/TA_Help/Topics/Bugs.html#ksec_tabugs_workflow)\)|
|**Last update date**|The date on which this TA bug was last updated from TFS.|
|**Last update by**|The person who last edited this TA bug.|
|**Creation date**|The date on which this TA bug was created in TestArchitect.|
|**Created by**|The person who created this TestArchitect bug.|
|**Last refresh status**|The status of the most recent refresh via clicking the **Refresh** button .The 4 possible returned values are:-   Empty: This bug is unregistered.<br>-   Updated: This registered bug was updated successfully.<br>-   Failed: This registered bug was not updated successfully.<br>-   Nonexistent on TFS: The corresponding TFS bug was deleted.<br><br>|<br>

{{<tip>}} To update the TA bug from the fields of its TFS counterpart, click the **Refresh** button. Note, however, that a minimum interval of 60 seconds between refreshes is imposed for a given TestArchitect Client.

## **Related Items** tab

![](/images/TA_Help/Images/Associated_bug_related_items.png)

The column heading fields of the **Related Items** tab \(above\) are:

|**Field**|**Description**|
|---------|---------------|
|**Test Module**|Name of a test module which exposes the bug.|
|**Test Case**|The particular section in the test module in which the bug is exposed. The section can be `Initial`, `Final` or a specific test case.<br><br>|<br>
|**Test Line**|The line number where the bug is marked as a known bug.|
|**Marked By**|The person who marked the bug.|


