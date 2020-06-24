--- 
title: "Creating a heat map panel"
linktitle: "Creating a heat map panel"
description: "Use a heat map panel to show data as cells in graphical tabular format where consecutive recurrence data are emphasized using cell color variations."
weight: 1
aliases: 
    - /TA_Help/Topics/Dashboard_create_heat_map_panel.html
keywords: "Dashboard, creating heat map panel, panel, heat map, creating new panel"
---

Use a heat map panel to show data as cells in graphical tabular format where consecutive recurrence data are emphasized using cell color variations.

To create a new heat map panel on a Dashboard page:

1.  [Launch an instance of the Dashboard](/reuse/../TA_Help/Topics/Dashboard_starting.html) and log in to the session as a user with [permission](/reuse/../TA_Help/Topics/Dashboard_authentication_permissions.html) sufficient to create a panel.

2.  On the Dashboard's page selection tool bar, point to **Global Setting** and select **Create Panel**.

    ![](/images/TA_Help/Images/Dashboard_create_panel.png)

3.  On the Add New Panel dialog box, select the **Heat Map** radio button as the panel **Type**, and then enter the **Data Profile** and **Display Name** information on the **Display Settings** tab.

    ![](/images/TA_Help/Images/Dashboard_add_new_heat_map_panel_display_settings_tab.png)

    **Display Settings** tab: use this tab to assign properties to the heat map.

    -   **Data Profile**: From the drop-down list, select a data profile containing a set of customized data to apply to the chart.
    -   **Display Name**: Title of the new panel.

        {{<tip>}} TestArchitect automatically appends an incremental number surrounded by parentheses \(for example, "\(1\)" for the first duplication\) to the panel's **Display Name** for each name duplication.

    **Heat Map Settings**:

    -   **Title**: Name of the heat map.
    -   **Show Title**: Show or hide the chart title when the panel is displayed.
    -   **Category**: Select the type of data from the data profile for the horizontal axis \(abscissa\) of the heat map.
    -   **Series**: Select the type of data from the data profile for the vertical axis \(ordinate\) of the heat map.
    -   **Series Value**: Select the type of series data to show on the heat map.
    -   **Set as Heat Value**: Select this option to display the series value data with color variations and cell number labeling when there are consecutive recurrences of the same values.
    -   **Color**: Set the heat map cell color for each type of series value.
    -   **Legends**: Select the position on the panel at which the chart’s legends are to be displayed.
4.  To restrict the data used by the panel based on the values of one or more data fields, select and enter the filtering expression\(s\) as needed on the **Data** \> **Filter Fields** tab.

    ![](/images/TA_Help/Images/Dashboard_filter_fields_tab.png)

    **Filter Fields** tab: Use this tab to create logical expressions to filter data on charts.

    -   **And/Or**: Logical operator for combining more than one filtering expression.
    -   **Field**: First operand in the logical expression.
    -   **Operator**: Comparison operator.
    -   **Value**: Second operand in the logical expression.
    -   **Add**: Add the user-defined logical expression to the filter list.
    -   **Remove**: Remove the highlighted logical expression from the filter list.
    -   **Add: \( \)**: Add parentheses to the highlighted logical expression to override the default order of precedence.
    -   **Remove: \( \)**: Remove parentheses from the highlighted logical expression.
5.  After adding customized filters to the panel, if you want to save the new filtering expression\(s\) to a new data profile, click **Save as** on the **Filters** tab and enter the name of the data profile on the **Save setting profile as** text box, then click **Save**.

    ![](/images/TA_Help/Images/Dashboard_save_setting_profile_as.png)

    The Dashboard creates a new data profile based on the profile specified in the **Data Profile** drop-down list \(on the **Display Settings** tab\) with customized filters added. The logged-in user owns the newly created data profile, and this Dashboard panel uses this new profile.

6.  In the Panel Configuration dialog box, enter the information as requested and click **OK**.

    -   Select page: Select the page on the Dashboard in which the newly add panel is to appear.
    -   Height: Set the height \(in pixels\) of the panel. A taller panel has higher resolution, producing sharper charts.
    -   Folder: Select a TestArchitect repository folder containing the report data you want to display on the new panel.

A detailed heat map containing the requested information is added to the designated page. Depending on the type of chart you create and the data profile applied to it, hyperlinks to more detailed information on certain elements of the chart may be available. You can change the settings for this panel at anytime by clicking the **Edit panel** ![](/images/TA_Help/Images/Dashboard_edit_panel_icon.png) button on the upper-right hand side of the panel.


**Related information**  


[Editing a heat map panel](/TA_Help/Topics/Dashboard_edit_heat_map_panel.html)

[Heat map settings](/TA_Help/Topics/Dashboard_heatmap.html)

[Category and series](/TA_Help/Topics/Dashboard_category_series.html)

[Dashboard permissions](/TA_Help/Topics/Dashboard_authentication_permissions.html)

