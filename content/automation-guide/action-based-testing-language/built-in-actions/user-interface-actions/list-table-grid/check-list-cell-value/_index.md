--- 
title: "check list cell value"
linktitle: "check list cell value"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_list_cell_value.html
---
keyword: [check cell contents against expected value, check if cell contents match expected value, check whether cell contents match expected value, verify if cell contents match expected value, verify whether cell contents match expected value]
---

# check list cell value

## Description

Check the text content of a cell in a list view against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **list**

    TA name of the control.

-   **item**

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **expected**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:list view

## Example

![](/images//Images/bia_check_list_cell_value_aut.png)

**Action Lines**

![](/images//Images/bia_check_list_cell_value_pgm.png)

**Result**

![](/images//Images/bia_check_list_cell_value_res.png)

## Example

![](/images//Images/bia_check_list_cell_value_aut.png)

**Action Lines**

![](/images//Images/bia_check_list_cell_value_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_list_cell_value_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check item not exists](/TA_Automation/Topics/bia_check_item_not_exists.html)

**Next topic:**[check list item order](/TA_Automation/Topics/bia_check_list_item_order.html)

