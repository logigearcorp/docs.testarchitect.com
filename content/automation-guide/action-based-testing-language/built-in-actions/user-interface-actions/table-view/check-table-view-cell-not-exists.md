--- 
title: "check table view cell not exists"
linktitle: "check table view cell not exists"
description: "Description Check for the nonexistence of a specified table view cell. Result is Passed if the specified table view cell is not found ; otherwise Failed . Arguments window TA name of the window. ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_table_view_cell_not_exists.html
keywords: "built-in actions, check table view cell not exists, check table view cell not exists (action), iOS (action), check table view cell not exists, check if specified table view cell does not exist, check for nonexistence of specified table view cell, verify nonexistence of specified table view cell, verify if specified table view cell is not found"
---

## {{< expand >}} Description

Check for the nonexistence of a specified table view cell. Result is Passed ifthe specified table view cell is not found; otherwise Failed.

## {{< expand >}} Arguments

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

## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:table view.

## Example - Case 1: section header and index arguments both provided

![](/images/TA_Automation/Images/bia_check_table_view_cell_not_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_table_view_cell_not_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_table_view_cell_not_exists_res.png)

## {{< expand >}} Example - Case 2: section header argument empty

![](/images/TA_Automation/Images/bia_check_table_view_cell_not_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_table_view_cell_not_exists_2_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_table_view_cell_not_exists_2_res.png)




