--- 
title: "check picker view item exists"
linktitle: "check picker view item exists"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_picker_view_item_exists.html
---
# check picker view item exists {#bia_check_picker_view_item_exists .reference}

## Description { .section}

Check, based on the displayed text content, for the existence of an item in a component of a picker view control. Result is Passed ifthe specified item is found; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

component
:   Numeric index ofthe component. \(Note that index numbering begins with 1.\)

text
:   Text content of the item to be searched for.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section.notes .section}

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:picker view.

## Example { .section}

![](../Images/bia_check_picker_view_item_exists_aut.png)

**Action Lines**

![](../Images/bia_check_picker_view_item_exists_pgm.png)

**Result**

![](../Images/bia_check_picker_view_item_exists_res.png)

**Parent topic:**[Picker View](../../TA_Automation/Topics/bia_Picker_view.html)

**Previous topic:**[check picker view component item count](../../TA_Automation/Topics/bia_check_picker_view_component_item_count.html)

**Next topic:**[check picker view item not exists](../../TA_Automation/Topics/bia_check_picker_view_item_not_exists.html)

