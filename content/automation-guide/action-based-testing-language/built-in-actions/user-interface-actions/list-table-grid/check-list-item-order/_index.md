--- 
title: "-"
linktitle: "check list item order"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_check_list_item_order.html
---
keyword: [check list item order, check if items in list box or combo box are arranged in specific order, check whetheritems in list box or combo box are arranged in specific sequence, verify if items in list box or combo box are arranged in specific order, ]
---

# check list item order

## Description

Check for the presence of a specified sequence of items in a control. Result is Passed ifthe specified sequence is found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **exact match**

    \(Optional\) Allowable values:

    -   **0, false, f, no or n**

        \(default\) Verify that the values in argument1, argument2, ... , argumentN do exist in the control in sequence, but not necessarily consecutively.

    -   **1, true, t, yes or y**

        Verify that the *consecutive* sequence of values in argument1, argument2, … , argumentN exists somewhere in the control \(that is, that the values are contiguous\).

-   **argument1, argument2, … argumentN**

    Elements of the ordered sequence whose presence in the control is checked.

    **Tip:** Arguments argument2 through argumentN are optional.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   There is no practical limit to the number ofargumentarguments that may be specified. In the action line, you may continue listing them in consecutive columns beyond those that have column headers.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:combo box, list box, select-multiple, select-one..

## Example

![](/images//Images/bia_check_list_item_order_aut.png)

**Action Lines**

![](/images//Images/bia_check_list_item_order_pgm.png)

**Result**

![](/images//Images/bia_check_list_item_order_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check list cell value](/TA_Automation/Topics/bia_check_list_cell_value.html)

**Next topic:**[check list order](/TA_Automation/Topics/bia_check_list_order.html)

