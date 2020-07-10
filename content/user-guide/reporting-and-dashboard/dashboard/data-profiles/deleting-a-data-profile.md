--- 
title: "Deleting a data profile"
linktitle: "Deleting a data profile"
description: "Deleting a data profile removes that data profile from the repository, Dashboard, and TestArchitect reports."
weight: 2
aliases: 
    - /TA_Help/Topics/Dashboard_delete_data_profile.html
keywords: "Dashboard, deleting data profile, data profile, deleting"
---

Deleting a data profile removes that data profile from the repository, Dashboard, and TestArchitect reports.

Ensure that the data profile you want to delete is not used by any panel in Dashboard, or by reporting in TestArchitect. To delete a data profile on a Dashboard page:

1.  [Launch an instance of the Dashboard](/user-guide/reporting-and-dashboard/dashboard/starting-the-dashboard/) and log in to the session as a user with [permission](/user-guide/reporting-and-dashboard/dashboard/dashboard-permissions) sufficient to delete a data profile.

2.  On the Dashboard's administrative bar, point to **Administer** and select **Data Profiles**.

    ![](/images/TA_Help/Images/Dashboard_administer_add_new_data_profiles.png)

3.  In the data profile table list, select the data profile you want to delete and click the **Delete** link above the table. Alternatively, you can click the **Delete** link in the **Action** column of the data profile row you want to delete.

    ![](/images/TA_Help/Images/Dashboard_data_profile_table.png)

    {{<tip>}} **Delete** links and row check boxes are enabled only for those data profiles for which the logged-in user has delete [permission](/user-guide/reporting-and-dashboard/dashboard/dashboard-permissions).


The deleted data profile is removed from the repository, Dashboard, and TestArchitect. Any Dashboard panel using the deleted data profile will cease to function after refreshing the Dashboard browser page \(pressing F5 on the browser\), updating the affected panel \(see [Updating panel](/user-guide/reporting-and-dashboard/dashboard/dashboard-panels/updating-a-panel)\), or terminating the Dashboard session and then signing back in to it.




**Related information**  


[Creating a data profile](/user-guide/reporting-and-dashboard/dashboard/data-profiles/creating-a-data-profile)

[Editing a data profile](/user-guide/reporting-and-dashboard/dashboard/data-profiles/editing-a-data-profile)

[Saving a data profile](/user-guide/reporting-and-dashboard/dashboard/data-profiles/saving-a-data-profile)

