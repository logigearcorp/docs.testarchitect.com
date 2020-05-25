--- 
title: "Data set list view"
linktitle: "Data set list view"
aliases: 
    - /TA_Help/Topics/Listview_data_set.html
---
# Data set list view {#data_set_list_view .concept}

A data set list view displays a list of all data set items contained within either the **Data** node or one of its subfolders.

On the TestArchitect explorer tree, when you double-click the **Data** node, and then select the **Data Sets** tab. TestArchitect opens a list view of data set items for the project. \(For details about data sets, see [Data sets](Projects_and_tests_dataset.html).\)

**Note:** Data set list views are also available for subfolders of the**Data** node.

![](../Images/Listview_data_set.png)

The following operations can be performed on a data set list view:

## Common operations { .section}

You can find various common operations that can be performed on data set list views at [Common operations](Listview_common_operations.html).

## Opening a data set { .section}

From a list view, you can open a data set in the editor by right-clicking its list view entry, then clicking **Open**.

**Tip:** You can also open multiple data sets by using your keyboard's Shift key to select a contiguous range of data sets \(or Control to select multiple noncontiguous data sets\); then right-click the selection, and click Open.

## Revision control { .section}

-   Check-out is the process of creating a local working copy from the repository. When a project item is checked out, a lock is placed on that item preventing other users from modifying it. \([Learn more](Project_items_checkout.html).\)
-   Check-in is the process of writing the changes made to a local working copy back to the repository. Checking in a project item releases the lock on it, allowing other authorized users to check out the item and modify it as needed. \([Learn more](Project_items_checkin.html).\)
-   Undoing a checkout allows you to cancel a checkout and discard any changes you have made to the local copy. \([Learn more](Project_items_undo_checkout.html).\)

## Revision history { .section}

Repository saves pertinent information on a project item at every check-in. This includes timestamp, assigned version, project name, item type, item name, user who checked in the item, and included comments. \([Learn more](Project_items_history.html).\)

## Project item comparisons { .section}

TestArchitect's Diff Tool can be invoked from the list view, allowing you to compare the differences between two project items in the list, or two revisions of the same item.

-   For comparing two project items, see [Comparing project items with Diff Tool](ug_diff_tool_comparing_items.html).
-   For comparing two revisions of a project item, see [Comparing a project item's revisions with Diff Tool](ug_diff_tool_comparing_revisions.html).

## Cut-Copy-Paste operations, and Delete command { .section}

-   From a data set list view, you can remove a given data set from one data set folder and paste it to another by performing a **cut-and-paste** operation from the context menu.
-   The **copy-and-paste** operation from the context menu allows you to create a duplicate of a selected data set.

    **Tip:**

    -   In addition to the conventional cut-and-paste and copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   Performing drag-and-drop within the same project is equivalent to cutting and pasting. Performing a drag-and-drop across different projects, on the other hand, is a copy-and-paste operation.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](../Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command, from the context menu, to remove the selected data set\(s\).

## Name change propagation { .section}

The process of renaming a given entity so that the change propagates to all references to that item is known as [name change propagation](../../TA_Glossary/Topics/glossaryNameChangePropagation.html). Renaming an entity automatically updates all applicable action lines, test modules, and action definitions where the entity name appears. \([Learn more](Project_and_project_items_rename_refactoring.html).\)

## Searching { .section}

By selecting **Search** from the context menu, you can search all test modules for references to the selected data set.

**Fastpath:** Ctrl + H

**Tip:** You can include [supplier project\(s](Project_subscription.html)\) in your search for the given data set by selecting the **Including supplier project\(s\)** check box in the Search dialog box.

## Exporting data set { .section}

Data sets can be exported to archive files \(.ZIP format\), which can be used as a backup, or for re-importing \(see [Exporting data set](Projects_and_tests_dataset_export.html), option \#2, for details\).

-   **[Editing data set variations](../../TA_Help/Topics/Listview_data_set_edit_variation.html)**  
You can re-link a data set variation to other version nodes or keywords via the Edit Variation dialog box.

**Parent topic:**[List view](../../TA_Help/Topics/Projects_and_tests_list_view.html)

**Previous topic:**[Test objective list view](../../TA_Help/Topics/Listview_test_objective.html)

**Next topic:**[Action list view](../../TA_Help/Topics/Listview_action.html)

