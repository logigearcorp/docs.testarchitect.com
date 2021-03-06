--- 
title: "check column header name"
linktitle: "check column header name"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_column_header_name.html
keywords: "column header name, column header, check if column header name matches expected value, check whether column header name matches expected value, verify if column header name matches expected value"
---

## Description

Check the header value of a column against an expected value. Result is Passed ifthe two values match each other; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **index**

    Column number of the cell. \(Column numbers start at 1.\)

-   **expected**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   For `oracle.apps.jtf.table.AccessibleTableGrid`: The [get column header name](get_column_header_name.html) and [check column header name](check_column_header_name.html) built-in actions return an empty value.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table, list view, tree table, tree list.

## Example

![](/images//Images/bia_check_column_header_name_aut.png)

**Action Lines**

![](/images//Images/bia_check_column_header_name_pgm.png)

**Result**

![](/images//Images/bia_check_column_header_name_res.png)

## Example

![](/images//Images/bia_check_column_header_name_aut.png)

**Action Lines**

![](/images//Images/bia_check_column_header_name_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_column_header_name_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Next topic:**[check item exists](/TA_Automation/Topics/bia_check_item_exists.html)

