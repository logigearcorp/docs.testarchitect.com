--- 
title: "Action list view"
linktitle: "Action list view"
weight: 7
aliases: 
    - /TA_Help/Topics/Listview_action.html
---
# Action list view {#action_list_view .concept}

An action list view displays a list of all user-defined action contained within either the **Actions** node or one of its subfolders.

On the TestArchitect explorer tree, when you double-click the **Actions** node, and then select the **Actions** tab. TestArchitect displays in the main panel a list view of the user-defined actions for the project. \([Learn more](../../reuse/reuse.High_level_actions.html).\)

**Note:** Action list views are also available for subfolders of the**Actions** node.

![](../Images/Listview_action.png)

The following operations can be performed on an action list view:

## Common operations { .section}

You can find various common operations that can be performed on action list views at [Common operations](Listview_common_operations.html).

## Opening an action { .section}

From a list view, you can open a user-defined action in the editor by right-clicking its list view entry, then clicking **Open**.

**Tip:** You can also open multiple user-defined actions by using your keyboard's Shift key to select a contiguous range of actions \(or Control to select multiple noncontiguous actions\); then right-click the selection, and click Open.

## Revision control { .section}

-   Check-out is the process of creating a local working copy from the repository. When a project item is checked out, a lock is placed on that item preventing other users from modifying it. \([Learn more](Project_items_checkout.html).\)
-   Check-in is the process of writing the changes made to a local working copy back to the repository. Checking in a project item releases the lock on it, allowing other authorized users to check out the item and modify it as needed. \([Learn more](Project_items_checkin.html).\)
-   Undoing a checkout allows you to cancel a checkout and discard any changes you have made to the local copy. \([Learn more](Project_items_undo_checkout.html).\)

## Project item comparisons { .section}

TestArchitect's Diff Tool can be invoked from the list view, allowing you to compare the differences between two project items in the list, or two revisions of the same item.

-   For comparing two project items, see [Comparing project items with Diff Tool](ug_diff_tool_comparing_items.html).
-   For comparing two revisions of a project item, see [Comparing a project item's revisions with Diff Tool](ug_diff_tool_comparing_revisions.html).

## Revision history { .section}

Repository saves pertinent information on a project item at every check-in. This includes timestamp, assigned version, project name, item type, item name, user who checked in the item, and included comments. \([Learn more](Project_items_history.html).\)

## Cut-Copy-Paste operations, and Delete command { .section}

-   From an action list view, you can remove a given action from one actions folder and paste it to another by performing the **Cut** and **Paste** operations from the context menu.
-   The the **Copy** and **Paste** operations from the context menu allow you to create a duplicate of a selected action.

    **Tip:**

    -   In addition to the conventional cut-and-paste and copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   Performing drag-and-drop within the same project is equivalent to cutting and pasting. Performing a drag-and-drop across different projects, on the other hand, is a copy-and-paste operation.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](../Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command from the context menu to remove the selected action\(s\).

## Name change propagation { .section}

The process of renaming a given entity so that the change propagates to all references to that item is known as [name change propagation](../../TA_Glossary/Topics/glossaryNameChangePropagation.html). Renaming an entity automatically updates all applicable action lines, test modules, and action definitions where the entity name appears. \([Learn more](Project_and_project_items_rename_refactoring.html).\)

## Searching { .section}

By selecting **Search** from the context menu, you can search all test modules and user-defined actions for references to the selected user-defined action.

**Fastpath:** Ctrl + H

**Tip:** You can include [supplier project\(s](Project_subscription.html)\) in your search for the given action by selecting the **Including supplier project\(s\)** check box in the Search dialog box.

## Exporting user-defined actions { .section}

User-defined actions can be exported to archive files \(.ZIP format\), which can be used as a backup, or for re-importing \(see [Exporting actions](High_level_actions_exporting.html), option \#2, for details\).

## Reporting { .section}

TestArchitect can generate reports to show the progress of the test or automation development, as well as test run performance and results. \([Learn more](Report_producing.md#choice_oj2_cwb_cw).\)

-   **[Editing action variations](../../TA_Help/Topics/Listview_action_edit_variation.html)**  
You can re-link a user-defined action variation to other version nodes or keywords via the Edit Variations dialog box.

**Parent topic:**[List view](../../TA_Help/Topics/Projects_and_tests_list_view.html)

**Previous topic:**[Data set list view](../../TA_Help/Topics/Listview_data_set.html)

**Next topic:**[Interface list view](../../TA_Help/Topics/Listview_interfaces.html)

