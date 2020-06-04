--- 
title: "-"
linktitle: "get selected items"
weight: 24
aliases: 
    - /TA_Automation/Topics/bia_get_selected_items.html
---
keyword: [get selected items, get values of selected items in multiselect control, retrieve values of selected items in multiselect control, get values of selected items in multiselect list box, get values of selected items in multiselect combo box]
---

# get selected items

## Description

Retrieve the text values of the selected items in a multiple selection control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the multiple selection control.

-   **item1, item2, … itemN**

    Variables to hold the returned values. Arguments item2 through itemN are optional.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item arguments:
    -   For the list view control, the content returned to each returned item variable is the concatenation of all cell values of the selected row, separated by vertical bars \( \| \).
    -   If the variables in argumentsitem1, item2, etc.have not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:list box, list view, combo box.

## Example - Case 1: The list view control

![](/images//Images/bia_get_selected_item_aut.png)

**Action Lines**

![](/images//Images/bia_get_selected_item_pgm.png)

**Result**

![](/images//Images/bia_get_selected_item_res.png)

## Example - Case 2: The list box control

![](/images//Images/bia_get_selected_item_2_aut.png)

**Action Lines**

![](/images//Images/bia_get_selected_item_2_pgm.png)

**Result**

![](/images//Images/bia_get_selected_item_2_res.png)

## Example

![](/images//Images/bia_get_selected_item_aut.png)

**Action Lines**

![](/images//Images/bia_get_selected_item_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_get_selected_item_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[get selected count](/TA_Automation/Topics/bia_get_selected_count.html)

**Next topic:**[get table cell containing](/TA_Automation/Topics/bia_get_table_cell_containing.html)

**Related information**  


[check selected items](/TA_Automation/Topics/bia_check_selected_items.html)

[click list item](/TA_Automation/Topics/bia_click_list_item.html)

