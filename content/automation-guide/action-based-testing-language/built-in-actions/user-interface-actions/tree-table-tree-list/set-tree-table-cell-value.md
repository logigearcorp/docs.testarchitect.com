--- 
title: "set tree table cell value"
linktitle: "set tree table cell value"
description: "Description Set the contents of a cell in a tree table or tree list. Arguments window TA name of the window tree TA name of the tree table or tree list node path Path of the node. (Support index). ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_set_tree_table_cell_value.html
keywords: "built-in actions, set tree table cell value, set tree table cell value (action), Android (action), set tree table cell value, set tree table cell value, set contents of tree table cell, assign tree table cell value, assign value to tree table cell, assign value to cell in tree table"
---

## Description

Set the contents of a cell in a tree table or tree list.

## Arguments

-   **window**

    TA name of the window

-   **tree**

    TA name of the tree table or tree list

-   **node path**

    Path of the node. \(Support index\).

-   **column**

    column number of the cell. \(Column numbers start at 1\).

-   **value**

    Value to which the cell contents are to be set. Additionally, if the cell is check-box or radio button user could input **yes** or **no**into this argument for check and uncheck.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:Tree table, tree list.

## Applicable Platform {{< permerlink >}} {#bia_set_table_cell_value__section_pvr_hfr_dkb} 

Systems Applications and Products in Data Processing \(SAP\).

## Applicable Version {{< permerlink >}} {#bia_set_table_cell_value__section_fwl_2jr_dkb} 

TestArchitect version 8.5 onward.

## Example

Action Lines

![](/images/TA_Automation/Images/bia_set_tree_table_cell_value_1.png)

Result

![](/images/TA_Automation/Images/bia_set_tree_table_cell_value_2.png)

Effect

![](/images/TA_Automation/Images/bia_set_tree_table_cell_value_3.png)



