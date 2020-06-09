--- 
title: "check control exists"
linktitle: "check control exists"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_control_exists.html
keywords: "check control exists, check if control exists, check whether control exists, check existence of control, verify existence of control"
---

## Description

Check for the existence of a control. Result is Passed ifthe specified control is found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [page wait](page_wait.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, check box, checklist, clock, collection view, collection view cell, combo box, date picker, datetime, frame, image, label, list box, list view, map view, menu, navigation bar, page control, password, picker view, picture box, progress bar, radio button, rating bar, richtext, scroll bar, scroll view, search bar, segmented control, separator, slider, spin, status bar, stepper, switch, tab bar, tab control, table, table view, table view cell, text box, text view, toggle button, toolbar, trackbar, tree view, view, web view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example

![](/images//Images/bia_check_control_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_control_exists_pgm.png)

**Result**

![](/images//Images/bia_check_control_exists_res.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[check](/TA_Automation/Topics/bia_check.html)

**Next topic:**[check control not exists](/TA_Automation/Topics/bia_check_control_not_exists.html)

**Related information**  


[check control not exists](/TA_Automation/Topics/bia_check_control_not_exists.html)

[does control exist](/TA_Automation/Topics/bia_does_control_exist.html)

