--- 
title: "-"
linktitle: "does item exist"
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_does_item_exist.html
---
keyword: [check if specified item is found in list box or combo box, check whether specified item is found in list view, verify if specified item exist in list control, verify existence of specified item in list control]
---

# does item exist

## Description

Return a Boolean value to indicate whether a specified item within a list box, list view, or combo box control exists.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the list box, list view, or combo box control.

-   **item**

    The item caption.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Item found.

    -   **0**

        Item not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   For list view controls only, to specify an item argument by its text content, enter the combined values of every cell, from left to right, with vertical bars \( \| \) as delimiters.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:list box, list view, combo box.

## Example - Case 1: List box control

![](/images//Images/bia_does_item_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_item_exist_pgm.png)

**Result**

![](/images//Images/bia_does_item_exist_res.png)

## Example - Case 2: List view control

![](/images//Images/bia_does_item_exist_2_aut.png)

**Action Lines**

![](/images//Images/bia_does_item_exist_2_pgm.png)

**Result**

![](/images//Images/bia_does_item_exist_2_res.png)

## Example

![](/images//Images/bia_does_item_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_item_exist_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_does_item_exist_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[click table cell](/TA_Automation/Topics/bia_click_table_cell.html)

**Next topic:**[does scrollbar exist](/TA_Automation/Topics/bia_does_scrollbar_exist.html)

**Related information**  


[check item exists](/TA_Automation/Topics/bia_check_item_exists.html)

[check item not exists](/TA_Automation/Topics/bia_check_item_not_exists.html)

