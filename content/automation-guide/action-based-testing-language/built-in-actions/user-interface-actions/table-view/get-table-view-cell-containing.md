--- 
title: "get table view cell containing"
linktitle: "get table view cell containing"
description: "Description Retrieve the position, within its table, of the cell containing a specified text value. Arguments window TA name of the window. control TA name of the table view control. text Text to be ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_cell_containing.html
keywords: "built-in actions, get table view cell containing, get table view cell containing (action), iOS (action), get table view cell containing, retrieve position of cell containing specific value in table view, get position of cell which contains specific value in table view, find position of cell containing specific value in table view"
---

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example

![](/images/TA_Automation/Images/bia_get_table_view_cell_containing_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_table_view_cell_containing_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_table_view_cell_containing_res.png)




