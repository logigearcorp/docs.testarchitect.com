--- 
title: "check table view cell value"
linktitle: "check table view cell value"
description: "Description Check the contents of a table view cell against an expected text string. Result is Passed if the two strings match ; otherwise Failed . Arguments window TA name of the window. control TA ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_table_view_cell_value.html
keywords: "built-in actions, check table view cell value, check table view cell value (action), iOS (action), check table view cell value, check value of table view cell, check value of specific table view cell against expected value, check if value of specified table view cell matches expected value, check whether value specified of table cell matches expected value, verify if value of specific table cell matches expected value"
---

## Description

Check the contents of a table view cell against an expected text string. Result is Passed ifthe two strings match; otherwise Failed.

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
-   **expected**

    The expected text content of the table view cell.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_check_table_view_cell_value__section_tll_j2y_mk} 

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example - Case 1: section header and index arguments both provided

![](/images/TA_Automation/Images/bia_check_table_view_cell_value_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_table_view_cell_value_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_table_view_cell_value_res.png)

## Example - Case 2: The section header argument is blank

![](/images/TA_Automation/Images/bia_check_table_view_cell_value_2_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_table_view_cell_value_2_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_table_view_cell_value_2_res.png)



