--- 
title: "set selected picker view item by index"
linktitle: "set selected picker view item by index"
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_set_selected_picker_view_item_by_index.html
---
# set selected picker view item by index {#bia_set_selected_picker_view_item_by_index .reference}

## Description { .section}

Select an item in a given component of a picker view control by its index.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

component
:   Numeric index ofthe component. \(Note that index numbering begins with 1.\)

index
:   Numeric index ofthe item within the component. \(Note that index numbering begins with 1.\)

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_tll_j2y_mk .section}

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:picker view.

## Example { .section}

![](../Images/bia_set_selected_picker_view_item_by_index_aut.png)

**Action Lines**

![](../Images/bia_set_selected_picker_view_item_by_index_pgm.png)

**Result**

![](../Images/bia_set_selected_picker_view_item_by_index_res.png)

**Effect**

![](../Images/bia_set_selected_picker_view_item_by_index_effect.png)

**Parent topic:**[Picker View](../../TA_Automation/Topics/bia_Picker_view.html)

**Previous topic:**[set selected picker view item](../../TA_Automation/Topics/bia_set_selected_picker_view_item.html)

