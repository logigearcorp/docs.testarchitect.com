--- 
title: "Data set list view"
linktitle: "Data set list view"
description: "A data set list view displays a list of all data set items contained within either the Data node or one of its subfolders."
weight: 6
aliases: 
    - /TA_Help/Topics/Listview_data_set.html
keywords: "data sets, list view, opening data set, list view, data sets, check in, check out, list view, data sets, undo, list view, data sets, history, exporting, sorting, copying text, filters, editing multiple fields"
---

A data set list view displays a list of all data set items contained within either the **Data** node or one of its subfolders.

On the TestArchitect explorer tree, when you double-click the **Data** node, and then select the **Data Sets** tab. TestArchitect opens a list view of data set items for the project. \(For details about data sets, see [Data sets](/user-guide/projects-and-project-items/project-items/data-sets/).\)

{{<note>}} Data set list views are also available for subfolders of the**Data** node.

![](/images/TA_Help/Images/Listview_data_set.png)

The following operations can be performed on a data set list view:

## {{< expand >}} Common operations

You can find various common operations that can be performed on data set list views at [Common operations](/user-guide/projects-and-project-items/project-items/list-view/common-operations/).

## Opening a data set

From a list view, you can open a data set in the editor by right-clicking its list view entry, then clicking **Open**.

{{<tip>}} You can also open multiple data sets by using your keyboard's Shift key to select a contiguous range of data sets \(or Control to select multiple noncontiguous data sets\); then right-click the selection, and click Open.

## {{< expand >}} Revision control

-   Check-out is the process of creating a local working copy from the repository. When a project item is checked out, a lock is placed on that item preventing other users from modifying it. \([Learn more](/user-guide/projects-and-project-items/project-items/revision-control/check-out).\)
-   Check-in is the process of writing the changes made to a local working copy back to the repository. Checking in a project item releases the lock on it, allowing other authorized users to check out the item and modify it as needed. \([Learn more](/user-guide/projects-and-project-items/project-items/revision-control/check-in).\)
-   Undoing a checkout allows you to cancel a checkout and discard any changes you have made to the local copy. \([Learn more](/user-guide/projects-and-project-items/project-items/revision-control/undo-check-out).\)

## {{< expand >}} Revision history

Repository saves pertinent information on a project item at every check-in. This includes timestamp, assigned version, project name, item type, item name, user who checked in the item, and included comments. \([Learn more](/user-guide/projects-and-project-items/project-items/revision-control/revision-history/).\)

## {{< expand >}} Project item comparisons

TestArchitect's Diff Tool can be invoked from the list view, allowing you to compare the differences between two project items in the list, or two revisions of the same item.

-   For comparing two project items, see [Comparing project items with Diff Tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/diff-tool-for-project-items/comparing-project-items).
-   For comparing two revisions of a project item, see [Comparing a project item's revisions with Diff Tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/diff-tool-for-project-items/comparing-revisions).

## {{< expand >}} Cut-Copy-Paste operations, and Delete command

-   From a data set list view, you can remove a given data set from one data set folder and paste it to another by performing a **cut-and-paste** operation from the context menu.
-   The **copy-and-paste** operation from the context menu allows you to create a duplicate of a selected data set.

    {{<tip>}}

    -   In addition to the conventional cut-and-paste and copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   Performing drag-and-drop within the same project is equivalent to cutting and pasting. Performing a drag-and-drop across different projects, on the other hand, is a copy-and-paste operation.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](/images/TA_Help/Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command, from the context menu, to remove the selected data set\(s\).

## {{< expand >}} Name change propagation

The process of renaming a given entity so that the change propagates to all references to that item is known as [name change propagation](/user-guide/support/glossary-of-terms/name-change-propagation). Renaming an entity automatically updates all applicable action lines, test modules, and action definitions where the entity name appears. \([Learn more](/user-guide/projects-and-project-items/project-items/name-change-propagation).\)

## {{< expand >}} Searching

By selecting **Search** from the context menu, you can search all test modules for references to the selected data set.

**Fastpath:** Ctrl + H

{{<tip>}} You can include [supplier project\(s](/user-guide/projects-and-project-items/projects-in-testarchitect/project-subscription/)\) in your search for the given data set by selecting the **Including supplier project\(s\)** check box in the Search dialog box.

## {{< expand >}} Exporting data set

Data sets can be exported to archive files \(.ZIP format\), which can be used as a backup, or for re-importing \(see [Exporting data set](/user-guide/projects-and-project-items/project-items/data-sets/exporting-a-data-set), option \#2, for details\).

-   **[Editing data set variations](/user-guide/projects-and-project-items/project-items/list-view/data-set-list-view/editing-data-set-variations)**  
You can re-link a data set variation to other version nodes or keywords via the Edit Variation dialog box.




