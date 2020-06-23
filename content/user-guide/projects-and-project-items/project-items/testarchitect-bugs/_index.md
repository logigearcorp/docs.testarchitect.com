--- 
title: "TestArchitect bugs"
linktitle: "TestArchitect bugs"
description: "A bug in TestArchitect is a failure in an automation run which impairs or prevents the proper functioning of the automated test, and which can generally be attributed either to a bug in the application under test, or to a problem with the test itself. From hereon, any such bug is referred to as a TestArchitect bug, or TA bug."
weight: 4
aliases: 
    - /TA_Help/Topics/Bugs.html
keywords: "bugs, workflow, TestArchitect bugs, life cycle, statuses, types, categorization"
---

A bug in TestArchitect is a failure in an automation run which impairs or prevents the proper functioning of the automated test, and which can generally be attributed either to a bug in the application under test, or to a problem with the test itself. From hereon, any such bug is referred to as a TestArchitect bug, or TA bug.

{{<tip>}} For more details on how to work with TA bugs and integrate them with the JIRA bug tracking system, see [JIRA integration](/TA_Help/Topics/JIRA_Integration.html)

## Workflow

A TestArchitect bug workflow is the set of stages that a TA bug goes through during its life cycle. The following diagram depicts the workflow:

![](/images/TA_Help/Images/TA_bug_life_cycle.png)

Users of bug tracking systems, such as JIRA, may be familiar with the concept of interim resolution statuses, for example Duplicate, Incomplete, or Cannot Reproduce. A TA bug, by contrast, has only three statuses: Open, Closed, or Reopened.

## Status

Each TA bug has a status indicating where the bug currently is in its life cycle. A bug starts as being Open, then generally progresses to Closed. Depending on circumstances, it may further progress to Reopened and then Closed again.

-   Open: TA bug is in the initial Open stage, ready for the assignee to start working on it.
-   Reopened: TA bug was once Closed, but is now being reverified and/or addressed. From here, the bug is marked Closed if it is resolved.
-   Closed - TA bug has been resolved and completed.

## Bug Type

TA bugs are categorized into two types: registered bugs and unregistered bugs.

Registered bugs are bug records created in TestArchitect and associated with a bug on an external bug tracking system. You may refer to [Creating registered TA bugs](/TA_Help/Topics/JIRA_creating_registered_bugs.html) to see how to create a bug associated with a JIRA bug.

On the other hand, unregistered bugs are created in TestArchitect but not associated with a bug on any external bug tracking system. Refer to [Creating unregistered TA bugs](/TA_Help/Topics/JIRA_creating_unregistered_bugs.html).

## Bug information

Detailed information regarding a TA bug \(that is, registered or unregistered\) is listed in two tabs of information. One is the **Information** tab which contains general information on the bug. The other is the **Related Items** tab, which lists those test modules which expose, or "catch", the bug.

The **Information** tab:

![](/images/TA_Help/Images/Associated_bug_information_external_bug.png)

The fields of the **Information** tab are:

|Field|Description|
|-----|-----------|
|**Bug ID**|\(Automatically generated\) The ID of the TA bug. This bug ID is combination of [a prefix key](/TA_Help/Topics/Projects_and_project_items_create_project.html) followed by an ID number, separated by a hyphen.|
|**Summary**|A brief one-line summary of the TA bug. {{<note>}} The **Summary** field cannot be empty.<br><br>|<br>
|**Description**|A detailed description of the TA bug.|
|**URL**|\(Automatically generated\) The [TestArchitect URL address](/TA_Help/Topics/Additional_features_TA_URL.html) of this bug.|
|**Source**|The bug ID of an external bug tracking system associated with the TA bug.<br><br> {{<note>}}<br><br>-   If this is an unregistered bug, this field is empty.<br>-   You may change the **Source** value to drop the current link and association this bug with another external bug.<br>-   You can also clear the **Source** content to decouple this bug from its associated external bug, rendering this an unregistered bug.<br><br>|<br>
|**Current status**|The current life cycle stage of this TA bug \(refer to [Workflow](/TA_Help/Topics/Bugs.html#ksec_tabugs_workflow)\)|
|**Last update date**|The date on which this TA bug was last updated from an external bug tracking system.|
|**Last update by**|The person who last edited this TA bug.|
|**Creation date**|The date on which this TA bug was created in TestArchitect.|
|**Created by**|The person who created this TestArchitect bug.|
|**Last refresh status**|The status of the most recent refresh via clicking the **Refresh** button .|

The **Related Items** tab:

![](/images/TA_Help/Images/Associated_bug_related_items.png)

The fields shown in the above screenshot are:

|**Field**|**Description**|
|---------|---------------|
|**Test Module**|Name of a test module which exposes the bug.|
|**Test Case**|The particular section in the test module in which the bug is exposed. The section can be `Initial`, `Final` or a specific test case.<br><br>|<br>
|**Test Line**|The line number where the bug is marked as a known bug.|
|**Marked By**|The person who marked the bug.|

1.  [Creating unregistered TA bugs](/TA_Help/Topics/JIRA_creating_unregistered_bugs.html)  
An unregistered TestArchitect bug \(TA bug\) is one that is created in TestArchitect but it is not associated with a JIRA bug.
2.  [Working with known bugs](/TA_Help/Topics/Bugs_working_known_bug.html)  
Known bugs indicate where fails in a test have been recognized so that those fails are ignored in subsequent automation run results. The Ignore known bug feature helps you obtain test results from test runs that are not cluttered up with fails from known bugs, thus rendering the results easier to analyze.
3.  [Viewing TA bugs](/TA_Help/Topics/Bug_opening.html)  
How to access existing TA bugs.
4.  [Deleting TA bugs](/TA_Help/Topics/Bugs_deleting.html)  
TA bugs can be removed from the system once they have been addressed.




**Related information**  


[JIRA integration](/TA_Help/Topics/JIRA_Integration.html)

