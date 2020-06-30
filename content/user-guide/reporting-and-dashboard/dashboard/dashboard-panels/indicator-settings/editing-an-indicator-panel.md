--- 
title: "Editing an indicator panel"
linktitle: "Editing an indicator panel"
description: "The indicator's appearance and data used to render the indicator can be modified at any time."
weight: 2
aliases: 
    - /TA_Help/Topics/Dashboard_edit_indicator_panel.html
keywords: "Dashboard, editing indicator panel, panel, editing indicator, indicator, editing panel"
---

The indicator's appearance and data used to render the indicator can be modified at any time.

To edit the properties of an indicator panel on a Dashboard page:

1.  [Launch an instance of the Dashboard](/user-guide/reporting-and-dashboard/dashboard/starting-the-dashboard/) and log in to the session as a user with [permission](/user-guide/reporting-and-dashboard/dashboard/dashboard-permissions) sufficient to edit an indicator panel.

2.  In the Dashboard, go to the Dashboard page containing the indicator panel you want to edit and click **Edit Panel** ![](/images/TA_Help/Images/Dashboard_edit_panel_icon.png).

3.  In the Edit Panel dialog box, change the panel settings on the **Display Settings** and **Filters** tabs as needed.

    The panel settings on the Edit Panel dialog box are the same as the settings on the Add New Panel dialog box for indicators \(see [Create new indicator panel](/user-guide/reporting-and-dashboard/dashboard/dashboard-panels/indicator-settings/creating-a-new-indicator-panel)\) steps \#[3](/user-guide/reporting-and-dashboard/dashboard/dashboard-panels/indicator-settings/creating-a-new-indicator-panel#step_e7fd_d83k) through \#[4](/user-guide/reporting-and-dashboard/dashboard/dashboard-panels/indicator-settings/creating-a-new-indicator-panel#step_jd3e_73eh), with the following additional setting options:

    -   Height: Set the height \(in pixels\) of the panel. Taller panels have higher resolution, producing sharper charts.
    -   Folder: Select a TestArchitect repository folder containing the report data you want displayed in the new panel.
4.  If the logged-in user is the owner of the panel being edited, select the **Save current settings** check box to permanently save the new settings, or clear that check box to not save the new settings, which causes the new settings to be discarded once the session expires.

    {{<note>}} New panel settings are effective for the current Dashboard session whether or not the **Save current settings** check box is selected.

5.  After adding customized filters to the panel, if you want to save the new filtering expression\(s\) to a new data profile, click **Save as** on the **Filters** tab and enter the name of the data profile on the **Save setting profile as** text box, then click **Save**.

    ![](/images/TA_Help/Images/Dashboard_save_setting_profile_as.png)

    The Dashboard creates a new data profile based on the profile specified in the **Data Profile** drop-down list \(on the **Display Settings** tab\) with customized filters added. The logged-in user owns the newly created data profile, and this Dashboard panel uses this new profile.

6.  Click **OK** to save the new panel settings.



**Related information**  


[Creating a new indicator panel](/user-guide/reporting-and-dashboard/dashboard/dashboard-panels/indicator-settings/creating-a-new-indicator-panel)

[Indicator settings](/user-guide/reporting-and-dashboard/dashboard/dashboard-panels/indicator-settings/)

[Category and series](/user-guide/reporting-and-dashboard/dashboard/category-and-series)

[Dashboard permissions](/user-guide/reporting-and-dashboard/dashboard/dashboard-permissions)

