--- 
title: "Interface entity list view"
linktitle: "Interface entity list view"
weight: 9
aliases: 
    - /TA_Help/Topics/Listview_interface_entity.html
---

An interface entity list view displays a list of all interface entities contained within either a selected interface node or one of its subfolders.

On the TestArchitect explorer tree, when you double-click an interface node, and then select the **Interface Entities** tab. TestArchitect displays in the main panel a list view of the interface entities belonging to that interface. \([Learn more](Interface_entities_and_elements.html#section.Interface_entity).\)

**Note:** Interface entity list views are also available for subfolders of each interface node.

![](/images//Images/Listview_interface_entity.png)

The following operations can be performed on an interface entity list view:

## Common operations

You can find various common operations that can be performed on interface entity list views at [Common operations](Listview_common_operations.html).

## Opening an interface entity

From an interface entity list view, you can open an interface entity in the editor by right-clicking its list view entry, then clicking **Open**.

**Tip:** You can also open multiple interface entities by using your keyboard's Shift key to select a contiguous range of interface entities \(or Control to select multiple noncontiguous interface entities\); then right-click the selection, and click Open.

## Revision control

-   Check-out is the process of creating a local working copy from the repository. When a project item is checked out, a lock is placed on that item preventing other users from modifying it. \([Learn more](Project_items_checkout.html).\)
-   Check-in is the process of writing the changes made to a local working copy back to the repository. Checking in a project item releases the lock on it, allowing other authorized users to check out the item and modify it as needed. \([Learn more](Project_items_checkin.html).\)
-   Undoing a checkout allows you to cancel a checkout and discard any changes you have made to the local copy. \([Learn more](Project_items_undo_checkout.html).\)

## Project item comparisons

TestArchitect's Diff Tool can be invoked from the list view, allowing you to compare the differences between two project items in the list, or two revisions of the same item.

-   For comparing two project items, see [Comparing project items with Diff Tool](ug_diff_tool_comparing_items.html).
-   For comparing two revisions of a project item, see [Comparing a project item's revisions with Diff Tool](ug_diff_tool_comparing_revisions.html).

## Revision history

Repository saves pertinent information on a project item at every check-in. This includes timestamp, assigned version, project name, item type, item name, user who checked in the item, and included comments. \([Learn more](Project_items_history.html).\)

## Cut-Copy-Paste operations, and Delete command

-   From an interface entity list view, you can delete desired interface entity from one interface entity folder and paste it to another interface entity folder by performing **Cut** and **Paste** operations from the context menu.
-   The **Copy** and **Paste** operations from the context menu allow you to create a duplicate of the selected interface entity.

    **Tip:**

    -   In addition to the conventional cut-and-paste and copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   Performing drag-and-drop within the same project is equivalent to cutting and pasting. Performing a drag-and-drop across different projects, on the other hand, is a copy-and-paste operation.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](/images//Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command, from the context menu, to remove the selected interface entities.

## Name change propagation

The process of renaming a given entity so that the change propagates to all references to that item is known as [name change propagation](/TA_Glossary/Topics/glossaryNameChangePropagation.html). Renaming an entity automatically updates all applicable action lines, test modules, and action definitions where the entity name appears. \([Learn more](Project_and_project_items_rename_refactoring.html).\)

## Searching

By selecting **Search** from the context menu, you can search all test modules and user-defined actions for references to the selected interface entity.

**Fastpath:** Ctrl + H

**Tip:** You can include [supplier project\(s](Project_subscription.html)\) in your search for the given interface entity by selecting the **Including supplier project\(s\)** check box in the Search dialog box.

## Exporting an interface entity

Interface entities can be exported to archive files \(.ZIP format\), which can be used as a backup or for re-importing \([Learn more](Interface_entity_exporting.html#step_vft_h3f_fw).\)

## Reporting

TestArchitect can generate reports to show the progress of the test or automation development, as well as test run performance and results. \([Learn more](Report_producing.html#choice_oj2_cwb_cw).\)

-   **[Editing interface entity variations](/TA_Help/Topics/Listview_interface_entity_edit_variation.html)**  
You can re-link an interface entity variation to other versions nodes or keywords via the Edit Variation dialog box.

**Parent topic:**[List view](/TA_Help/Topics/Projects_and_tests_list_view.html)

**Previous topic:**[Interface list view](/TA_Help/Topics/Listview_interfaces.html)

**Next topic:**[Test suite list view](/TA_Help/Topics/Listview_test_suite.html)

