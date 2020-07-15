--- 
title: "get picker view component item count"
linktitle: "get picker view component item count"
description: "Description Retrieve the number of items of a component of a picker view control. Arguments window TA name of the window. control TA name of the control. component Numeric index of the component. ( ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_get_picker_view_component_item_count.html
keywords: "built-in actions, get picker view component item count, get picker view component item count (action), iOS (action), get picker view component item count, get number of items in specific component of picker view, retrieve number of items in specific component of picker view, count number of items in given component of picker view, get item count in given component of picker view, count how many items in specified components of picker view"
---

## Description

Retrieve the number of items of a component of a picker view control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes  

-   This built-in action applies only to the iOS operating system.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_get_picker_view_component_item_count_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_picker_view_component_item_count_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_picker_view_component_item_count_res.png)



