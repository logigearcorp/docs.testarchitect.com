--- 
title: "does control exist"
linktitle: "does control exist"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_does_control_exist.html
---
# does control exist {#bia_does_control_exist .reference}

## Description { .section}

Return a Boolean value to indicate whether the specified control is found to exist.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

variable
:   \(Optional\) Variable to receive the returned Boolean value.

:   Possible returned values:

    1
    :   Control found.

    0
    :   Control not found.

time out
:   \(Optional\) Maximum wait time for the control to appear \(units: seconds; default = the current value of built-in setting object wait probe\).

    **Note:** time out is an unsupported argument and hence invisible. To use it, you must specify both the value and the header “time out” in the cells to the right of the variable argument.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   time outis an unsupported argument and hence invisible. To use it, you must specify both its value and header, in the cell to the right of last visible argument.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait probe](bis_object_wait_probe.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:activity indicator view, button, check box, checklist, clock, collection view, collection view cell, combo box, date picker, datetime, frame, image, label, list box, list view, map view, menu, navigation bar, page control, password, picker view, picture box, progress bar, radio button, rating bar, richtext, scroll bar, scroll view, search bar, segmented control, separator, slider, spin, status bar, stepper, switch, tab bar, tab control, table, table view, table view cell, text box, text view, toggle button, toolbar, trackbar, tree view, view, web view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example { .section}

![](../Images/bia_does_control_exist_aut.png)

**Action Lines**

![](../Images/bia_does_control_exist_pgm.png)

**Result**

![](../Images/bia_does_control_exist_res.png)

**Parent topic:**[Control, Element](../../TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[check tab order](../../TA_Automation/Topics/bia_check_tab_order.html)

**Next topic:**[enter](../../TA_Automation/Topics/bia_enter.html)

**Related information**  


[check control exists](../../TA_Automation/Topics/bia_check_control_exists.html)

[check control not exists](../../TA_Automation/Topics/bia_check_control_not_exists.html)

