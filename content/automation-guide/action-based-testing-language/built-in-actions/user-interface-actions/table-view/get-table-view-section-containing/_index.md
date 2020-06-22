--- 
title: "get table view section containing"
linktitle: "get table view section containing"
description: "Description Retrieve the index of a table view section identified by its header text. Arguments window TA name of the window. control TA name of the table view control. section header Text of section ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_section_containing.html
keywords: "built-in actions, get table view section containing, get table view section containing (action), iOS (action), get table view section containing, retrieve index of table view section, get position of specified table view section, obtain index of table view section"
---

## Description

Retrieve the index of a table view section identified by its header text.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **section header**

    Text of section header to be searched for.

-   **variable**

    \(Optional\) Variable to receive the returned section index.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   variable argument:
    -   Note that index numbering begins with 1.
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example

![](/images/TA_Automation/Images/bia_get_table_view_section_containing_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_table_view_section_containing_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_table_view_section_containing_res.png)




