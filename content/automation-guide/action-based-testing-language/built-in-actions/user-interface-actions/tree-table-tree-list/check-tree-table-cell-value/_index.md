--- 
title: "check tree table cell value"
linktitle: "check tree table cell value"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_tree_table_cell_value.html
---
keyword: [check tree table cell value, check cell contents against expected value, check if contents of cell match expected value, check whether cell contents match expected value, verify if contents of cell match expected value]
---

# check tree table cell value

## Description

Check the text content of a tree table or tree list cell against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree list or tree table.

-   **node path**

    Path of the node. \(Support index\).

-   **column**

    column number of the cell. \(Column numbers start at 1\).

-   **expected**

    The expected cell content.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [page wait](page_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:Tree table, tree list

## Applicable Platform

Systems Applications and Products in Data Processing \(SAP\).

## Applicable Version

TestArchitect version 8.5 onward.

## Example

![](/images//Images/bia_check_tree_table_cell_value_1.png)

**Action Lines**

![](/images//Images/bia_check_tree_table_cell_value_2.png)

**Result**

![](/images//Images/bia_check_tree_table_cell_value_3.png)

## Example

![](/images//Images/bia_check_tree_table_cell_value_4.png)

**Action Lines**

![](/images//Images/bia_check_tree_table_cell_value_5.png)

**Result**

![](/images//Images/bia_check_tree_table_cell_value_6.png)

**Parent topic:**[Tree table, Tree List](/TA_Automation/Topics/bia_Tree_table.html)

**Previous topic:**[click tree table cell](/TA_Automation/Topics/bia_click_tree_table_cell.html)

**Next topic:**[get tree table cell value](/TA_Automation/Topics/bia_get_tree_table_cell_value.html)

