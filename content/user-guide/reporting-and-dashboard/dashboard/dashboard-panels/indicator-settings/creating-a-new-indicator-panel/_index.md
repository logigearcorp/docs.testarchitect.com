--- 
title: "Creating a new indicator panel"
linktitle: "Creating a new indicator panel"
weight: 1
aliases: 
    - /TA_Help/Topics/Dashboard_create_new_indicator_panel.html
---

Use an indicator panel to show numerical values of statistic fields in a table format. Values matching user definable range can be highlighted with different colors to indicate the level of importance.

To create a new indicator panel on the Dashboard page:

1.  [Launch an instance of the Dashboard](/reuse/../TA_Help/Topics/Dashboard_starting.html) and log in to the session as a user with [permission](/reuse/../TA_Help/Topics/Dashboard_authentication_permissions.html) to create a panel.

2.  On the Dashboard's page selection tool bar, point to **Global Setting** and select **Create Panel**.

    ![](/images//Images/Dashboard_create_panel.png)

3.  On the Add New Panel dialog box, select the **Indicator** radio button as the panel **Type**, and then enter the information as requested and click **OK**.

    ![](/images//Images/Dashboard_add_new_indicator_panel_settings_tab.png)

    **Display Settings** tab: use this tab to assign properties to the indicator.

    -   **Data Profile**: From the drop-down list, select a data profile containing a set of customized data to apply to the chart.
    -   **Display Name**: Title of the new panel.

        **Tip:** TestArchitect automatically appends an incremental number surrounded by parentheses \(for example, "\(1\)" for the first duplication\) to the panel's **Display Name** for each name duplication.

    **Indicator Settings**:

    -   Title: the title name of the indicator.
    -   Show Title: shows or hides the indicator title name on the panel.
    -   Statistic Field: selects the field to show in the indicator. The values from this field will be shown in the first column whose column's name is the name of this field.
    -   Value: selects which statistic field to focus and indicate in the indicator table.
    -   Percentage: sets the indicator to highlight fields meeting the percentage range requirements \(see the **From** setting below for details on setting the range requirements\).
    -   From: specifies the statistic field value range to highlight. This value defines the lower-bound of the range. Only statistic fields defined in the **Value** drop-down box meeting the **From** range requirement are highlighted in the indicator table, and the color of the highlighted statistic fields are defined by the **Color** selector option. If the **Percentage** checkbox is selected, only percentage fields meeting the range requirements are highlighted.
    -   Color: defines the highlighted color of the statistic field meeting the range requirements.
    -   ![](/images//Images/Dashboard_add_new_indicator_panel_plus_icon.png): adds one more **From** and **Color** control pair.
    -   ![](/images//Images/Dashboard_add_new_indicator_panel_delete_icon.png): removes a **From** and **Color** control pair.
4.  To restrict the data used by the panel based on the values of one or more data fields, select and enter the filtering expression\(s\) as needed on the **Data** \> **Filter Fields** tab.

    ![](/images//Images/Dashboard_filter_fields_tab.png)

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

    ![](/images//Images/Dashboard_save_setting_profile_as.png)

    The Dashboard creates a new data profile based on the profile specified in the **Data Profile** drop-down list \(on the **Display Settings** tab\) with customized filters added. The logged-in user owns the newly created data profile, and this Dashboard panel uses this new profile.

6.  In the Panel Configuration dialog box, enter the information as requested and click **OK**.

    -   Select page: Select the page on the Dashboard in which the newly add panel is to appear.
    -   Height: Set the height \(in pixels\) of the panel. A taller panel has higher resolution, producing sharper charts.
    -   Folder: Select a TestArchitect repository folder containing the report data you want to display on the new panel.

A detailed indicator panel containing the requested information is added to the designated page. Depending on the type of chart you create and the data profile applied to it, hyperlinks to more detailed information on certain elements of the chart may be available. You can change the settings for this panel at anytime by clicking the **Edit panel** ![](/images//Images/Dashboard_edit_panel_icon.png) button on the upper-right hand side of the panel.

**Parent topic:**[Indicator settings](/TA_Help/Topics/Dashboard_indicator.html)

**Related information**  


[Editing an indicator panel](/TA_Help/Topics/Dashboard_edit_indicator_panel.html)

[Indicator settings](/TA_Help/Topics/Dashboard_indicator.html)

[Category and series](/TA_Help/Topics/Dashboard_category_series.html)

[Dashboard permissions](/TA_Help/Topics/Dashboard_authentication_permissions.html)

