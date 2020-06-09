--- 
title: "get table view cell containing"
linktitle: "get table view cell containing"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_cell_containing.html
---
keyword: [retrieve position of cell containing specific value in table view, get position of cell which contains specific value in table view, find position of cell containing specific value in table view]
---

# get table view cell containing

## Description

Retrieve the position, within its table, of the cell containing a specified text value.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **text**

    Text to be searched for.

-   **variable**

    \(Optional\) Variable to receive the position of the specified cell, in the form of an index path \(`section index.cell index`\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   In the event that the target text exists in more than one cell, it is the position of the first one encountered that is returned.
-   variable argument:
    -   Note that index numbering begins with 1.
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [ignore blank space](ignore_blank_space.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example

![](/images//Images/bia_get_table_view_cell_containing_aut.png)

**Action Lines**

![](/images//Images/bia_get_table_view_cell_containing_pgm.png)

**Result**

![](/images//Images/bia_get_table_view_cell_containing_res.png)

**Parent topic:**[Table View](/TA_Automation/Topics/bia_table_view.html)

**Previous topic:**[does table view cell exist](/TA_Automation/Topics/bia_does_table_view_cell_exist.html)

**Next topic:**[get table view cell value](/TA_Automation/Topics/bia_get_table_view_cell_value.html)

