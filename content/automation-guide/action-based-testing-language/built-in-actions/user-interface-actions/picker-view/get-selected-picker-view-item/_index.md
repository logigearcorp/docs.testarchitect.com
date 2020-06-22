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
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_get_selected_picker_view_item_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_selected_picker_view_item_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_selected_picker_view_item_res.png)




