--- 
title: "Renaming history"
linktitle: "Renaming history"
weight: 5
aliases: 
    - /TA_Help/Topics/ug_revision_renaming_history.html
---

Renaming History stores all records of name changes made to specific project items.

As of version 8.2, TestArchitect tracks changes made to names of project items, logging the information to the **Rename History** field, which can be found under the **Information** tab of each given project item. In addition to providing helpful information on the naming history of a project item, this field aids in the [time-traveling](ug_time_traveling.html)-based execution, by determining the appropriate revision of the project item to be invoked.

**Note:** For legacy repository databases created prior to TestArchitect version 8.2, the [upgrade process for time travel-readiness](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html) attempts, based on the existing revision histories, to reconstruct the past name changes of all involved project items, storing this information to the respective **Rename History** fields.

![](/TA_Administration/Images/renaming_history.png)

On the **Information** tab of a given project item, you may view its renaming history records by clicking the **Edit** link. For each record, the Rename history dialog displays its timestamp, ID, prior name, and new name.

![](/TA_Administration/Images/renaming_history_dlg.png)

**Note:**

-   Should you determine that the historical name information for a given project item is not accurate \(which is possible in the case of converted legacy databases\) you may edit it manually, or even add a new timestamp.
-   If you add a timestamp which already exists in the list, the warning message, The revision timestamp <entered timestamp\> already exists. Please choose another revision timestamp., is displayed when you click **OK**.

**Parent topic:**[Revision history](/TA_Help/Topics/Project_items_history.html)

**Previous topic:**[Filtering displayed revisions](/TA_Help/Topics/ug_revision_history_filtering.html)

**Next topic:**[Revision tag](/TA_Help/Topics/ug_revision_tag.html)

