--- 
title: "check table view section exists"
linktitle: "check table view section exists"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_table_view_section_exists.html
keywords: "check table view section exists, check if specified table view section exists, check existence for specified table view section, verify existence of specified table view section, check if specified column header matches expected text"
---

## Description

Check for the existence of a table view section as identified by its header text. Result is Passed ifthe specified table view section is found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **section header**

    Header text to search for.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example

![](/images//Images/bia_check_table_view_section_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_table_view_section_exists_pgm.png)

**Result**

![](/images//Images/bia_check_table_view_section_exists_res.png)

**Parent topic:**[Table View](/TA_Automation/Topics/bia_table_view.html)

**Previous topic:**[check table view cell value](/TA_Automation/Topics/bia_check_table_view_cell_value.html)

**Next topic:**[does table view cell exist](/TA_Automation/Topics/bia_does_table_view_cell_exist.html)

