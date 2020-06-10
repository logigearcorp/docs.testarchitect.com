--- 
title: "click list item"
linktitle: "click list item"
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_click_list_item.html
keywords: "click list item, click specified item in list box, click specified item in list view"
---

## Description

Click an item in a list control.

## Arguments

-   **window**

    TA name of the window.

-   **list**

    TA name of the list control.

-   **item**

    The item to click, as specified by its text contentor index value.

    **Important:** For the list view control only, in order to click an item, enter the aggregated values of every cell value with vertical bars \( \| \) as delimiters.

-   **x**

    \(Optional\) Horizontal position of effective click, specified as distance in pixels from left edge of item . \(Defaults to horizontal center of the item.\)

-   **y**

    \(Optional\) Vertical position of effective click, specified as distance in pixels from top edge of item. \(Defaults to vertical center of the item.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/reuse/../TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   item argument:
    -   The item argumentmay be specified by either of two means:the displayed text of the item, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
    -   For list view controls only, to specify an item argument by its text content, enter the combined values of every cell, from left to right, with vertical bars \( \| \) as delimiters.
-   x and yare unsupported arguments and hence invisible. To use them, you must specify both their values and the headers x and y, respectively, in the cells to the right of the last visible argument.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:list box, list view.

## Example - Case 1: Use text value to click a list box item

![](/images//Images/bia_click_list_item_aut.png)

**Action Lines**

![](/images//Images/bia_click_list_item_pgm.png)

**Result**

![](/images//Images/bia_click_list_item_res.png)

## Example - Case 2: Use numerical index value to click a list box item

![](/images//Images/bia_click_list_item_index_aut.png)

**Action Lines**

![](/images//Images/bia_click_list_item_index_pgm.png)

**Result**

![](/images//Images/bia_click_list_item_index_res.png)

## Example - Case 3: Use text value to click a list view item

![](/images//Images/bia_click_list_item_aut_3.png)

**Action Lines**

![](/images//Images/bia_click_list_item_pgm_3.png)

**Result**

![](/images//Images/bia_click_list_item_res_3.png)

## Example

![](/images//Images/bia_click_list_item_aut_ta4vs.png)

**Action Lines**

![](/images//Images/bia_click_list_item_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_click_list_item_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check table cell value](/TA_Automation/Topics/bia_check_table_cell_value.html)

**Next topic:**[click table cell](/TA_Automation/Topics/bia_click_table_cell.html)

**Related information**  


[check selected items](/TA_Automation/Topics/bia_check_selected_items.html)

[get selected items](/TA_Automation/Topics/bia_get_selected_items.html)

