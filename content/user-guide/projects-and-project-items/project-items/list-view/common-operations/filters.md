--- 
title: "Filters"
linktitle: "Filters"
description: "Use filters to reduce the set of items displayed in an item list view, and to limit operations to those items."
weight: 4
aliases: 
    - /TA_Help/Topics/Listview_filtering.html
keywords: "filter, list view, filtering"
---

Use filters to reduce the set of items displayed in an item list view, and to limit operations to those items.

Beneath each list view column header is a filter control box. Each column's filter box controls which row items are displayed. For each filter expression in a given filter box, only those row items whose corresponding contents in that field satisfy the expression are displayed.

List view filtering does not change the underlying list view data in any way. As soon as all filters are removed \(by clearing all filter boxes or clicking the **Clear filters** button\) all data reappears, exactly the same as it was before.

There are three types of control box filters:

-   **User-defined filters**

    Filtering token strings not surrounded by single quotes are case insensitive, and TestArchitect shows all elements that have the same token substrings regardless of the where the substring is positioned in the element.

    Below is an example of the result of an unquoted filtering token.

    ![](/images/TA_Help/Images/Listview_filter_token_element.png)

    Filtering token strings surrounded by single quotes \(for example, 'Elements'\) are exact match tokens. Only elements with the same exact tokens \(case sensitive\) and same string lengths are selected for display in list view.

    For example, the filtering token 'Elements' will not yield any result for the following list view since UI Elements and UI Elements States strings are not the exact same string as Elements.

    ![](/images/TA_Help/Images/Listview_filter_token_element_2.png)

-   **Predefined filters**

    Selecting a single predefined filter for a column filters out all elements in that column except for elements meeting the filtering criteria. Selecting more than one predefined filter from the list of filters for a column has the same effect as placing an OR logical operator between each selected filter for that column. For example, selecting both high and low filters from the list box for the **Priority** column will show all elements with high priority in addition to all elements with low priority.

    Note that, when predefined filters are selected for a given column, the list box filter cell \(first row in list view\) displays the list of selected filter tokens, each enclosed in single quotations, and separated by semicolons.

    Below is an example of selected high and intermediate filters for the **Priority** column.

    ![](/images/TA_Help/Images/Listview_filter_priority_listbox.png)

-   **Date filters**

    There are two methods available for assigning filters for a date column in a list view. You may enter a filtering date directly into the list box filter cell \(first row in list view\) or click the drop down button on the list box filter cell and choose among the filtering options. Checking the **Select a date range** check box enables the filtering by a range of dates \(using the **From** and **To** text fields\). Checking the **Last** check box, and providing a number of days n, specifies a range that spans the last n days \(up till the present\).

    Below is an example of date range filtering.

    ![](/images/TA_Help/Images/Listview_date_filter.png)


Defining filters for more than one column has the same effect as placing the AND logical operator between the column filters. Only row items that meet all filtering requirements are displayed in the filtered list view. Each time you press the Enter key or lose the focus on the filtering box or select a filter from the list box, list view updates and displays only rows of elements that satisfy all filtering criteria.

{{<tip>}} TestArchitect automatically saves each set of list view filtering criteria every time you close a list view. The next time you open the same list view, the same saved filtering criteria are automatically applied.




