--- 
title: "Deleting a data profile"
linktitle: "Deleting a data profile"
weight: 2
aliases: 
    - /TA_Help/Topics/Dashboard_delete_data_profile.html
---

Deleting a data profile removes that data profile from the repository, Dashboard, and TestArchitect reports.

Ensure that the data profile you want to delete is not used by any panel in Dashboard, or by reporting in TestArchitect. To delete a data profile on a Dashboard page:

1.  [Launch an instance of the Dashboard](/reuse/../TA_Help/Topics/Dashboard_starting.html) and log in to the session as a user with [permission](/reuse/../TA_Help/Topics/Dashboard_authentication_permissions.html) sufficient to delete a data profile.

2.  On the Dashboard's administrative bar, point to **Administer** and select **Data Profiles**.

    ![](/images//Images/Dashboard_administer_add_new_data_profiles.png)

3.  In the data profile table list, select the data profile you want to delete and click the **Delete** link above the table. Alternatively, you can click the **Delete** link in the **Action** column of the data profile row you want to delete.

    ![](/images//Images/Dashboard_data_profile_table.png)

    **Tip:** **Delete** links and row check boxes are enabled only for those data profiles for which the logged-in user has delete [permission](/TA_Help/Topics/Dashboard_authentication_permissions.html).


The deleted data profile is removed from the repository, Dashboard, and TestArchitect. Any Dashboard panel using the deleted data profile will cease to function after refreshing the Dashboard browser page \(pressing F5 on the browser\), updating the affected panel \(see [Updating panel](/TA_Help/Topics/Dashboard_update_panel.html)\), or terminating the Dashboard session and then signing back in to it.

**Parent topic:**[Data profiles](/TA_Help/Topics/Dashboard_data_profiles.html)

**Previous topic:**[Creating a data profile](/TA_Help/Topics/Dashboard_create_data_profile.html)

**Next topic:**[Editing a data profile](/TA_Help/Topics/Dashboard_edit_data_profile.html)

**Related information**  


[Creating a data profile](/TA_Help/Topics/Dashboard_create_data_profile.html)

[Editing a data profile](/TA_Help/Topics/Dashboard_edit_data_profile.html)

[Saving a data profile](/TA_Help/Topics/Dashboard_save_data_profile.html)

