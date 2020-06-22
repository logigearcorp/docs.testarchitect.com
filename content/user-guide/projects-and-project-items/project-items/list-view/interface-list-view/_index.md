--- 
title: "Interface list view"
linktitle: "Interface list view"
description: "An interface list view displays a list of all interfaces contained within the Interfaces node."
weight: 8
aliases: 
    - /TA_Help/Topics/Listview_interfaces.html
keywords: "interfaces, list view, creating interface entity, list view, interfaces, creating interface entity folder, list view, interfaces, setting default interface, check in, check out, list view, interfaces, undo, list view, interfaces, renaming, reporting, sorting, copying text, filters, editing multiple fields"
---

An interface list view displays a list of all interfaces contained within the **Interfaces** node.

On the TestArchitect explorer tree, when you double-click the **Interfaces** node, and then select the **Interfaces** tab. TestArchitect opens in the main panel a list view of interfaces for the project. \([Learn more](/TA_Help/Topics/Interface_def.html).\)

![](/images/TA_Help/Images/Listview_interfaces.png)

The following operations can be performed on an interface list view:

## Common operations

You can find various common operations that can be performed over an interface list view at the [Common operations](/TA_Help/Topics/Listview_common_operations.html) section.

## Creating a new interface entity

From an interface list view, you can create a new interface entity \(**New Interface Entity** on the context menu\) which generally represents a window of an application under test. For detailed information, see [Creating a new interface entity](/TA_Help/Topics/Interface_def_Adding.html), option \#2.

## Creating a new interface entity folder

A new interface entity folder can be used to contain interface entities. A new interface entity folder is created by clicking **New Interface Entity Folder** on the context menu.

## Setting a default interface

The **Set as Default Interface** command lets you specify which interface in a project is to be in effect during a test if no other interface has been specified by the test. For the detailed information, see [Setting default interface](/TA_Help/Topics/Interface_def_set_default_interface.html), option \#2.

## Opening an interface

From a list view, you can open an interface in the editor by right-clicking its list view entry, then clicking **Open**.

{{<tip>}} You can also open multiple interfaces by using your keyboard's Shift key to select a contiguous range of interfaces \(or Control to select multiple noncontiguous interfaces\); then right-click the selection, and click Open.

## Revision control

-   Check-out is the process of creating a local working copy from the repository. When a project item is checked out, a lock is placed on that item preventing other users from modifying it. \([Learn more](/TA_Help/Topics/Project_items_checkout.html).\)
-   Check-in is the process of writing the changes made to a local working copy back to the repository. Checking in a project item releases the lock on it, allowing other authorized users to check out the item and modify it as needed. \([Learn more](/TA_Help/Topics/Project_items_checkin.html).\)
-   Undoing a checkout allows you to cancel a checkout and discard any changes you have made to the local copy. \([Learn more](/TA_Help/Topics/Project_items_undo_checkout.html).\)

## Cut-Copy-Paste operations, and Delete command

-   The **Copy** and **Paste** operations from the context menu allow you to create a duplicate of the selected interface.

{{<tip>}}

    -   In addition to the conventional copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](/images/TA_Help/Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command, from the context menu, to remove the selected interface\(s\).

## Name change propagation

The process of renaming a given entity so that the change propagates to all references to that item is known as [name change propagation](/TA_Glossary/Topics/glossaryNameChangePropagation.html). Renaming an entity automatically updates all applicable action lines, test modules, and action definitions where the entity name appears. \([Learn more](/TA_Help/Topics/Project_and_project_items_rename_refactoring.html).\)

## Reporting

TestArchitect can generate reports to show the progress of the test or automation development, as well as test run performance and results. \([Learn more](/TA_Help/Topics/Report_producing.html#choice_oj2_cwb_cw).\)

## Searching

You can find a desired interface entity, or a desired text in interface entities by selecting **Search** on the context menu.

{{<tip>}} For detailed information regarding searching operation, see [Searching](/TA_Help/Topics/Additional_features_search.html).




