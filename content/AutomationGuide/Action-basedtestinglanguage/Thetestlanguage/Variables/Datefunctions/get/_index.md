--- 
title: "get"
linktitle: "get"
aliases: 
    - /TA_Automation/Topics/bia_get.html
---
# get {#bia_get .reference}

## Description { .section}

Retrieve the displayed text of a control.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

variable
:   \(Optional\) Variable to receive the returned value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:check box, combo box, date picker, datetime, label, progress bar, radio button, rating bar, richtext, slider, search bar, slider, status bar, switch, text box, text view, toggle button, trackbar.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, progress bar, radio button, text box, toggle button.

## Example { .section}

![](../Images/bia_get_aut.png)

**Action Lines**

![](../Images/bia_get_pgm.png)

**Result**

![](../Images/bia_get_res.png)

**Parent topic:**[Control, Element](../../TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[focus control](../../TA_Automation/Topics/bia_focus_control.html)

**Next topic:**[get control property](../../TA_Automation/Topics/bia_get_control_property.html)

