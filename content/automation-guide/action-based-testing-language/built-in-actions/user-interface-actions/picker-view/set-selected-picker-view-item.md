--- 
title: "set selected picker view item"
linktitle: "set selected picker view item"
description: "Description Select an item in a component of a picker view control based on its text content. Arguments window TA name of the window. control TA name of the control. component Numeric index of the ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_set_selected_picker_view_item.html
keywords: "built-in actions, set selected picker view item, set selected picker view item (action), iOS (action), set selected picker view item, set item in component of picker view as selected based on its content, select item in component of picker view based on its value"
---

## Description

Select an item in a component of a picker view control based on its text content.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **text**

    Identifying display text of item to select.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_set_selected_picker_view_item__section_tll_j2y_mk} 

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_set_selected_picker_view_item_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_set_selected_picker_view_item_pgm.png)

Result

![](/images/TA_Automation/Images/bia_set_selected_picker_view_item_res.png)

Effect

![](/images/TA_Automation/Images/bia_set_selected_picker_view_item_effect.png)



