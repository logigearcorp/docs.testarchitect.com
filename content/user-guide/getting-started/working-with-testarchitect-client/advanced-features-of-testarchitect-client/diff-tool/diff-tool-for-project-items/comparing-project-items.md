--- 
title: "Comparing project items with Diff Tool"
linktitle: "Comparing project items"
description: "How to view the differences between two project items of the same type in TestArchitect."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_diff_tool_comparing_items.html
keywords: "item comparison, simple comparison, two project items, Diff Tool"
---

How to view the differences between two project items of the same type in TestArchitect.

For this discussion, let's distinguish between the two project items being compared. We'll refer to one as the reference item and the other as the *comparison item*.

{{<note>}} Generally, a reference item is an older file, against which comparisons are made with a newer, modified copy. In our case, however, we use the term *reference item* for the one that has been "marked" for comparisons \(explained below\).

To compare an item against the reference item, do the following:

1.  In the TestArchitect explorer tree, establish the reference item by right-clicking a project item, and then select **Diff Tool** \> **Mark to Compare**.

    ![](/images/TA_Help/Images/diff_tool_reference_item.png)

2.  Next, right-click the node representing the project item to be compared against the reference, and select **Diff Tool** \> **Compare to Marked Item**.

    ![](/images/TA_Help/Images/diff_tool_reference_item_comparison.png)

    {{<tip>}} If at any time you wish to view the current reference item in the test editor, right-click any project item node, and then select **Diff Tool** \> **Go to Marked Item**.


The Diff Tool window appears, with the two items displayed in side-by-side panels, the reference \(marked\) item on the left and the comparison item on the right. The toolbar provides functions for viewing and navigating among the detected differences.

The screenshot below shows a typical comparison of two project items. The elements are described in more detail in [Diff Tool dialog box](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/diff-tool-for-project-items/comparing-project-items).

![](/images/TA_Help/Images/diff_tool_dlg_2.png)



