--- 
title: "Revision history"
linktitle: "Revision history"
weight: 4
aliases: 
    - /TA_Help/Topics/Project_items_history.html
---

The TestArchitect repository saves pertinent information on a project item every time the item is checked in. This includes timestamp, assigned version, project name, item type \(test modules, data sets, actions, etc.\), item name, user who checked in the item, and included comments.

The repository stores the file history of all revisions of checked in files. For each checked in file, the repository keeps:

1.  Checked-in date and time, called timestamp, in the format of mm/dd/yyyy hh:mm:ss.mmm
2.  Assigned version: that is, the [AUT version\(s\)](Variations_create_linked.html) assigned to a specific revision.
3.  Project name
4.  Project item type, of which the possible values are:
    -   [User-defined action](/reuse/reuse.High_level_actions.html)
    -   [Test module](Create_test_module.html)
    -   [Interface entity](Interface_entities_and_elements.html)
    -   [$ Class Map](Interface_def_Viewer_class_mapping.html)
    -   [Data set](Projects_and_tests_dataset.html)
    -   [Variation](Variations.html)
5.  Project item name
6.  User who checked in the file
7.  Check-in comments

1.  [Revision rollback](/TA_Help/Topics/Project_items_revision_roll_back.html)  
The rollback feature restores the status of an older checked in revision of any project item to the current working revision.
2.  [Viewing history](/TA_Help/Topics/Project_items_view_history.html)  
You can select a checked in revision of any project item to view its history from the Revision History dialog box.
3.  [Comparing two revisions of a project item](/TA_Help/Topics/ug_Project_items_comparing_revisions.html)  
How to view the differences between two historical revisions of a project item.
4.  [Filtering displayed revisions](/TA_Help/Topics/ug_revision_history_filtering.html)  
When viewing revision histories of project items, filtering can be used to help narrow your search.
5.  [Renaming history](/TA_Help/Topics/ug_revision_renaming_history.html)  
Renaming History stores all records of name changes made to specific project items.
6.  [Revision tag](/TA_Help/Topics/ug_revision_tag.html)  
In TestArchitect, an AUT version node is used to tag a specific revision, since a version commonly identifies a specific release of the AUT, such as version 1.2.

**Parent topic:**[Revision control](/TA_Help/Topics/Revision_control.html)

**Previous topic:**[Undo check out](/TA_Help/Topics/Project_items_undo_checkout.html)

**Related information**  


[Revision control](/TA_Help/Topics/Revision_control.html)

