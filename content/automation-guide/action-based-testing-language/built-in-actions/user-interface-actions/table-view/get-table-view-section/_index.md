--- 
title: "get table view section"
linktitle: "get table view section"
description: "Description Retrieve both the header and footer text of a section of a table view control. Arguments window TA name of the window. control TA name of the table view control. index Table view section ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_section.html
keywords: "built-in actions, get table view section, get table view section (action), iOS (action), get table view section, get header and footer of table view section, retrieve header, footer of section of table view, obtain header and footer of table view section"
---

## Description

Retrieve both the header and footer text of a section of a table view control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **index**

    Table view section index.

-   **section header**

    Variable to receive the returned table view section header text.

-   **section footer**

    Variable to receive the returned table view section footer text.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   If the variables in argumentssection header and section footerhave not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example

![](/images/TA_Automation/Images/bia_get_table_view_section_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_table_view_section_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_table_view_section_res.png)

**Note:** In this example, the returned table view section footer text is null since that section has no footer.




