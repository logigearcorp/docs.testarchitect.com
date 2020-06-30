--- 
title: "get picker view item by index"
linktitle: "get picker view item by index"
description: "Description Retrieve the displayed text content of an item in a component of a picker view control, based on the item's index number. Arguments window TA name of the window. control TA name of the ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_get_picker_view_item_by_index.html
keywords: "built-in actions, get picker view item by index, get picker view item by index (action), iOS (action), get picker view item by index, get item from component of picker view by index, retrieve item from component of picker view by index, get retrieve item from"
---

## Description

Retrieve the displayed text content of an item in a component of a picker view control, based on the item's index number.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **index**

    Numeric index ofthe item within the component. \(Note that index numbering begins with 1.\)

-   **variable**

    \(Optional\) Variable to receive the returned item text.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_get_picker_view_item_by_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_picker_view_item_by_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_picker_view_item_by_index_res.png)




