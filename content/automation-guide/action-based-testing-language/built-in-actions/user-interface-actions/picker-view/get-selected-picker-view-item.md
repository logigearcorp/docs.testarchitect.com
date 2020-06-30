--- 
title: "get selected picker view item"
linktitle: "get selected picker view item"
description: "Description Retrieve both the index and text content of the currently selected item of a component of a picker view control. Arguments window TA name of the window. control TA name of the control. ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_get_selected_picker_view_item.html
keywords: "built-in actions, get selected picker view item, get selected picker view item (action), iOS (action), get selected picker view item, get index and value of selected item in component of picker view, retrieve index and value of selected item in component of picker view"
---

## Description

Retrieve both the index and text content of the currently selected item of a component of a picker view control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **text variable**

    Variable to receive the returned item text.

-   **index variable**

    Variable to receive the returned item index.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   If the variables in argumentstext variable and index variablehave not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_get_selected_picker_view_item_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_selected_picker_view_item_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_selected_picker_view_item_res.png)




