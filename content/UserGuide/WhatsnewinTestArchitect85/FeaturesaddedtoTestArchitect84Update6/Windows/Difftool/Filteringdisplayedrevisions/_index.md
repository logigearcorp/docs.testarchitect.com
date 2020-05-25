--- 
title: "Filtering displayed revisions"
linktitle: "Filtering displayed revisions"
aliases: 
    - /TA_Help/Topics/ug_revision_history_filtering.html
---
# Filtering displayed revisions {#task_dwt_qzx_js .task}

When viewing revision histories of project items, filtering can be used to help narrow your search.

To access revision history, you must be a member of a group other than [guest](../../TA_Administration/Topics/User_administration.md#li_xxn_z22_ms) for the repository in which the project item is stored. In addition, you must be granted access to the desired projects and project items.

Each revision history record of a project item includes its timestamp, assigned version, project name, item type, item name, user who checked in the item, and check-in comments. If you only select a specific project item, filtering might not very useful. However, if you were to invoke revision history from the level of a repository or a project node, the revision table would display all available project items with their various fields. You might then find it hard to search for what you need. That's where filtering would come in handy.

To view filtered revisions:

1.  In the TestArchitect explorer tree, right-click a repository node, a project node, or a specific item node, and then click **Revision History**.

    For example: right-click the **SampleRepository** node and click **Revision History**.

    ![](../Images/revision_history_filtering.png)

2.  In the Revision History dialog box, you can reduce the displayed the set of revisions in the list view by means of any of the following filter criteria:

    -   **Timestamp**: Clicking the arrow button displays the filter bar. You can select either a range of dates, or the most recent day\(s\) \(up to seven\).

        ![](../Images/timestamp_filtering.png)

    -   **Assigned Version**: The associated linked variations.
    -   **Project**: The project name
    -   **Type**: Clicking the arrow button displays the filter bar. You can filter based on specific type of the project item.

        ![](../Images/project_type_filtering.png)

    -   **Name**: The name of the project item.
    -   **Updated By**: User who checked the revision in.
    -   **Comments**: Included check-in comment.

For all fields except for **Timestamp**, a revision record's field is considered to match the corresponding filter criterion when it contains the specified filter text as a substring. Hence, in the above example, filter text of “avail” in the **Name** field would filter out all but the 7th \(get available cars\) and 8th \(check available cars\) records.

**Parent topic:**[Revision history](../../TA_Help/Topics/Project_items_history.html)

**Previous topic:**[Comparing two revisions of a project item](../../TA_Help/Topics/ug_Project_items_comparing_revisions.html)

**Next topic:**[Renaming history](../../TA_Help/Topics/ug_revision_renaming_history.html)

