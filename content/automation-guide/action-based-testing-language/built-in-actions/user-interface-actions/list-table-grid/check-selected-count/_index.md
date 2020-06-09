--- 
title: "check selected count"
linktitle: "check selected count"
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_check_selected_count.html
keywords: "check selected count, check selected count in multiselect list box against expected number, check selected count in multiselect tree view against expected number, check number of selected items in multiselect list box against expected number, check if number of selected items in multiselect list view matches expected number"
---

## Description

Check the number of the selected items in a multiple selection control \(list box or list view\) against an expected count. Result is Passed ifthe number of the selected items matches the expected number; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the list box or list view control.

-   **expected**

    The expected number of selected items.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Set the expected argument to 0 to verify that no items are selected.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [page wait](page_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:list box, list view.

## Example

![](/images//Images/bia_check_selected_count_aut.png)

**Action Lines**

![](/images//Images/bia_check_selected_count_pgm.png)

**Result**

![](/images//Images/bia_check_selected_count_res.png)

## Example

![](/images//Images/bia_check_selected_count_aut.png)

**Action Lines**

![](/images//Images/bia_check_selected_count_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_selected_count_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check scrollbar not exists](/TA_Automation/Topics/bia_check_scrollbar_not_exists.html)

**Next topic:**[check selected items](/TA_Automation/Topics/bia_check_selected_items.html)

**Related information**  


[get selected count](/TA_Automation/Topics/bia_get_selected_count.html)

