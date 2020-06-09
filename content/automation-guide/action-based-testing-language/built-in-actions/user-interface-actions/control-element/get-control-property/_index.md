--- 
title: "get control property"
linktitle: "get control property"
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_get_control_property.html
keywords: "get control property, retrieve control property, get property value of control, retrieve property value of control"
---

## Description

Retrieve the value of a control's specified property.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **property**

    TA property to be retrieved.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is applicable to both TA properties and native properties that are viewable in the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_reading.html).
-   In the event that a TA property and a native property have identical names, the TA property takes precedence. If you want to get the value of the native property instead, use the action [get native property](get_native_property.html).
-   This action is applicable only to properties that are viewable in TestArchitect's Interface Viewer.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [ignore blank space](ignore_blank_space.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [page wait](page_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, check box, checklist, clock, collection view, collection view cell, combo box, date picker, datetime, frame, image, label, list box, list view, map view, menu, navigation bar, page control, password, picker view, picture box, progress bar, radio button, rating bar, richtext, scroll bar, scroll view, search bar, segmented control, separator, slider, spin, status bar, stepper, switch, tab bar, tab control, table, table view, table view cell, text box, text view, toggle button, toolbar, trackbar, tree view, view, web view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example

![](/images//Images/bia_get_control_property_aut.png)

**Action Lines**

![](/images//Images/bia_get_control_property_pgm.png)

**Result**

![](/images//Images/bia_get_control_property_res.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[get](/TA_Automation/Topics/bia_get.html)

**Next topic:**[get control tooltip](/TA_Automation/Topics/bia_get_control_tooltip.html)

**Related information**  


[check control property](/TA_Automation/Topics/bia_check_control_property.html)

