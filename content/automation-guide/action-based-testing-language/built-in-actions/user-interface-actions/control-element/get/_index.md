--- 
title: "get"
linktitle: "get"
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_get.html
---
keyword: [get displayed text from control, get text in control, retrieve displayed text in control]
---

# get

## Description

Retrieve the displayed text of a control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [ignore blank space](ignore_blank_space.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [page wait](page_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:check box, combo box, date picker, datetime, label, progress bar, radio button, rating bar, richtext, slider, search bar, slider, status bar, switch, text box, text view, toggle button, trackbar, calendar.

**Note:** When getting very long strings from an SAP BW **richtext** control, you may experience perfomance issues.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, progress bar, radio button, text box, toggle button.

## Example

![](/images//Images/bia_get_aut.png)

**Action Lines**

![](/images//Images/bia_get_pgm.png)

**Result**

![](/images//Images/bia_get_res.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[focus control](/TA_Automation/Topics/bia_focus_control.html)

**Next topic:**[get control property](/TA_Automation/Topics/bia_get_control_property.html)

