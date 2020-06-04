--- 
title: "-"
linktitle: "check item exists"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_item_exists.html
---
keyword: [check specified item exits in list box or combo box, check if specified item exists in list view, check whether specified item exists in list box or combo box, verify existence of specified item in list view, verify existence of specified item in list box or combo box]
---

# check item exists

## Description

Check for the existence of a specified item in a list box, list view, or combo box control. Result is Passed ifthe item is found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **list**

    TA name of the list box, list view, or combo box control.

-   **item**

    Identifying item textor index.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   The item argumentmay be specified by either of two means:the displayed text of the item, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)

        **Restriction:** Using numerical index values is not supported for Oracle Forms and Microsoft UI Automation \(UIA\).

    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
    -   For list view controls only, to specify an item argument by its text content, enter the combined values of every cell, from left to right, with vertical bars \( \| \) as delimiters.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:list box, list view, combo box.

## Example - Case 1: Use text value to specify list box item

![](/images//Images/bia_check_item_exist_aut.png)

**Action Lines**

![](/images//Images/bia_check_item_exists_pgm.png)

**Result**

![](/images//Images/bia_check_item_exist_res.png)

## Example - Case 2: Use numerical index value to specify list box item

![](/images//Images/bia_check_item_exist_index_aut.png)

**Action Lines**

![](/images//Images/bia_check_item_exists_index_pgm.png)

**Result**

![](/images//Images/bia_check_item_exist_index_res.png)

## Example - Case 3: Use text value to specify list view item

![](/images//Images/bia_check_item_exist_2_aut.png)

**Action Lines**

![](/images//Images/bia_check_item_exists_2_pgm.png)

**Result**

![](/images//Images/bia_check_item_exist_2_res.png)

## Example - Case 4: Use numerical index value to specify list view item

![](/images//Images/bia_check_item_exist_2_index_aut.png)

**Action Lines**

![](/images//Images/bia_check_item_exists_2_index_pgm.png)

**Result**

![](/images//Images/bia_check_item_exist_2_index_res.png)

## Example

![](/images//Images/bia_check_item_exist_aut.png)

**Action Lines**

![](/images//Images/bia_check_item_exists_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_item_exist_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check column header name](/TA_Automation/Topics/bia_check_column_header_name.html)

**Next topic:**[check item not exists](/TA_Automation/Topics/bia_check_item_not_exists.html)

**Related information**  


[check item not exists](/TA_Automation/Topics/bia_check_item_not_exists.html)

[does item exist](/TA_Automation/Topics/bia_does_item_exist.html)

