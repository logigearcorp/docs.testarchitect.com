--- 
title: "select column"
linktitle: "select column"
description: "Description Select a column, or a range of columns, in a table. Arguments window TA name of the window. control TA name of the table. column1, column2, … columnN Columns to be selected. (Column ..."
weight: 29
aliases: 
    - /TA_Automation/Topics/bia_select_column.html
keywords: "built-in actions, select column, select column (action), select column, select column in table, select a range of columns from table"
---

## Description

Select a column, or a range of columns, in a table.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **column1, column2, … columnN**

    Columns to be selected. \(Column numbers start at 1\).

    Arguments column2 through columnN are optional.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   There is no practical limit to the number ofcolumnarguments that may be specified. In the action line, you may continue listing them in consecutive columns beyond those that have column headers.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:table, tree table, tree list.

## Example

![](/images/TA_Automation/Images/bia_select_column_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_column_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_select_column_res.png)

