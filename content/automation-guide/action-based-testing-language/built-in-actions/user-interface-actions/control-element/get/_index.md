--- 
title: "get"
linktitle: "get"
description: "Description Retrieve the displayed text of a control. Arguments window TA name of the window. control TA name of the control. variable (Optional) Variable to receive the returned value . Valid ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_get.html
keywords: "built-in actions, get, get (action), iOS (action), get, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get displayed text from control, get text in control, retrieve displayed text in control"
---

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
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:check box, combo box, date picker, datetime, label, progress bar, radio button, rating bar, richtext, slider, search bar, slider, status bar, switch, text box, text view, toggle button, trackbar, calendar.

**Note:** When getting very long strings from an SAP BW **richtext** control, you may experience perfomance issues.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, progress bar, radio button, text box, toggle button.

## Example

![](/images/TA_Automation/Images/bia_get_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_res.png)




