--- 
title: "Comparing two revisions of a project item"
linktitle: "Comparing two revisions of a project item"
description: "How to view the differences between two historical revisions of a project item."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_Project_items_comparing_revisions.html
keywords: 
---

TestArchitect includes a [Diff Tool](/TA_Help/Topics/ug_item_comparison.html#section.Diff_tool_GUI), used for performing line-by-line comparisons between two similar project items. How to view the differences between two historical revisions of a project item.

When a project item is continuously modified over time, there is often a need to understand the changes that have been applied since some given point in the past. Fortunately, all editions of TestArchitect include a [revision control system](/TA_Help/Topics/Revision_control.html), which maintains a “snapshot” of each project item every time it is checked in. This allows you to access any of the historical copies of a project item for viewing. The Diff Tool takes that one step further, allowing the differences between two revisions of the item to be readily visualized.

You can choose between either of the two following methods to compare two historical revisions of a given project item:

-   **Option 1**: To compare two arbitrary past revisions of a project item, invoke the Diff Tool from the Revision History dialog box.

    {{<note>}} Using this approach, you may:

    -   compare two arbitrary revisions of a project item, or
    -   compare an arbitrary revision of a project item against the most recently checked-in revision.
    1.  In the TestArchitect explorer tree, right-click an item and then select **Revision History**

        ![](/images/TA_Help/Images/History_menu_diff_tool.png)

    2.  In the Revision History dialog box, establish a reference revision by right-clicking a revision from the list, and then selecting **Diff Tool** \> **Mark to Compare**.

        ![](/images/TA_Help/Images/History_select_reference_item.png)

        {{<tip>}} Alternatively, at this point, you may perform a quick comparison of some past revision against the latest checked in revision. Rather than select **Diff Tool** \> **Mark to Compare** from the pop-up menu, select **Diff Tool** \> **Compare to Latest revision**.

    3.  In the same dialog box, right-click a revision you want to compare against the established reference and click **Diff Tool** \> **Compare to Marked Item**.

        ![](/images/TA_Help/Images/History_compare_against_reference_item.png)

        {{<tip>}} If at any time you wish to view the current reference item in the test editor, right-click any item in the list \(it doesn't matter which\), and then select **Diff Tool** \> **Go to Marked Item**.

-   **Option 2**: This approach lets you compare your current version of a project item against the most recently checked-in revision.

    {{<note>}} Differences between the two items will exist only if your current version of the project item has changes which have not yet been checked in.

    1.  In the TestArchitect explorer tree, select the project item of interest.

    2.  Right-click it, and then click **Diff Tool** \> **Compare to Latest revision**.


The Diff Tool window appears, with the two items displayed in side-by-side panels, the reference \(marked\) item on the left and the comparison item on the right. The toolbar provides functions for viewing and navigating among the detected differences.

The screenshot below shows a comparison of two revisions of a project item. The UI elements of the window are described in more detail in [Diff Tool dialog box](/TA_Help/Topics/ug_item_comparison.html#section.Diff_tool_GUI).

![](/images/TA_Help/Images/diff_tool_1.png)




