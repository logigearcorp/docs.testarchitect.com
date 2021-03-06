--- 
title: "Revision control"
linktitle: "Revision control"
weight: 5
aliases: 
    - /TA_Help/Topics/Revision_control.html
---

Revision control is the process used to track and control changes made to project items in a repository. Changes to an item are identified by its revision timestamp \(which includes date and time accurate to a small fraction of a second\), the user making the changes, and other information, when the item is checked in.

The TestArchitect repository serves two primary functions:

-   **A database**: Storing project settings and description information for test modules, test folders, assigned users, project's notes, etc.
-   **File storage**: Storing actual contents of items that can be edited; for example, test modules, data sets, action or interface definitions.

Repository files are subject to revision control and management. Older revision of a file are retained. You need to check out a file before you can modify it. Once checked out, a lock is placed on the file and no other users may modify it until the file is checked back in. By checking a file back in, you are:

-   Writing or merging the changes made to the working copy back to the repository.
-   Making the file available for other authorized users to check out and modify.
-   Creating an associated timestamp.

If you make changes to a file and you don't want to save your changes to the repository, you may opt to use **undo check out**, in which case your changes are discarded, the lock on the checked out file is removed, and the file becomes available again for other authorized users.

1.  [Check in](/TA_Help/Topics/Project_items_checkin.html)  
Check-in is a process of writing the changes made to the local working copy of a file back into the repository.
2.  [Check out](/TA_Help/Topics/Project_items_checkout.html)  
Check-out is the process of creating a local working copy from the repository.
3.  [Undo check out](/TA_Help/Topics/Project_items_undo_checkout.html)  
Undoing checkout allows you discard any changes you have made to local copies of project items and check them back in to the repository.
4.  [Revision history](/TA_Help/Topics/Project_items_history.html)  
The TestArchitect repository saves pertinent information on a project item every time the item is checked in. This includes timestamp, assigned version, project name, item type \(test modules, data sets, actions, etc.\), item name, user who checked in the item, and included comments.

**Parent topic:**[Project items](/TA_Help/Topics/Project_items_def.html)

**Previous topic:**[TestArchitect bugs](/TA_Help/Topics/Bugs.html)

**Next topic:**[Name change propagation](/TA_Help/Topics/Project_and_project_items_rename_refactoring.html)

**Related information**  


[Revision history](/TA_Help/Topics/Project_items_history.html)

