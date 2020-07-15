--- 
title: "set selected picker view item by index"
linktitle: "set selected picker view item by index"
description: "Description Select an item in a given component of a picker view control by its index. Arguments window TA name of the window. control TA name of the control. component Numeric index of the component. ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_set_selected_picker_view_item_by_index.html
keywords: "built-in actions, set selected picker view item by index, set selected picker view item by index (action), iOS (action), set selected picker view item by index, set item in specified compnent of picker view as selected by index, select item in specific component of picker view by index"
---

## Description

Select an item in a given component of a picker view control by its index.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **index**

    Numeric index ofthe item within the component. \(Note that index numbering begins with 1.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_set_selected_picker_view_item_by_index__section_tll_j2y_mk} 

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_set_selected_picker_view_item_by_index_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_set_selected_picker_view_item_by_index_pgm.png)

Result

![](/images/TA_Automation/Images/bia_set_selected_picker_view_item_by_index_res.png)

Effect

![](/images/TA_Automation/Images/bia_set_selected_picker_view_item_by_index_effect.png)


