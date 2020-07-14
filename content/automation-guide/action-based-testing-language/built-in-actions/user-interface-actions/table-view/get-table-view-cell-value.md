--- 
title: "get table view cell value"
linktitle: "get table view cell value"
description: "Description Retrieve the text content of a table view cell. Arguments window TA name of the window. control TA name of the table view control. section header (Optional) Identifying header text of ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_cell_value.html
keywords: "built-in actions, get table view cell value, get table view cell value (action), iOS (action), get table view cell value, retrieve value of specific table view cell, obtain value of specified table view cell"
---

## Description

Retrieve the text content of a table view cell.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **section header**

    \(Optional\) Identifying header text of table view cell section. \(See index argument.\)

-   **index**

    Identifying index of table view cell:

    -   If section header is non-empty, index must be a single integral value specifying the cardinal position of the cell within the section.
    -   If section header is blank, index must specify an index path of the form: `section index.cell index`. \(Example: `2.5`\).
-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_get_table_view_cell_value__section_tll_j2y_mk} 

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example - Case 1: section header and index arguments both provided

![](/images/TA_Automation/Images/bia_bia_get_table_view_cell_value_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_table_view_cell_value_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_table_view_cell_value_res.png)

## Example - Case 2: section header argument is empty

![](/images/TA_Automation/Images/bia_bia_get_table_view_cell_value_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_table_view_cell_value_2_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_table_view_cell_value_2_res.png)



