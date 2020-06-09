--- 
title: "check control property"
linktitle: "check control property"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_control_property.html
keywords: "check control property, check control property against expected value, check if control property matches expected value, check whether control property matches expected value, verify if control property matches expected value"
---

## Description

Capture the value of a specified property from a control, then compare it against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **property**

    TA or native property. \(e.g., caption, winclass, top, etc.\)

-   **expected**

    Expected value of the property.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is applicable to both TA properties and native properties that are viewable in the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_reading.html).
-   In the event that a TA property and native property have identical names, the TA property takes precedence. Therefore, if you want to explicitly check the native property, use the [check native property](check_native_property.html) action.
-   This action is applicable only to properties that are viewable in TestArchitect's Interface Viewer.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [property wait](property_wait.html), [page wait](page_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, check box, checklist, clock, collection view, collection view cell, combo box, date picker, datetime, frame, image, label, list box, list view, map view, menu, navigation bar, page control, password, picker view, picture box, progress bar, radio button, rating bar, richtext, scroll bar, scroll view, search bar, segmented control, separator, slider, spin, status bar, stepper, switch, tab bar, tab control, table, table view, table view cell, text box, text view, toggle button, toolbar, trackbar, tree view, view, web view, window, calendar.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example

![](/images//Images/bia_check_control_property_aut.png)

**Action Lines**

![](/images//Images/bia_check_control_property_pgm.png)

**Result**

![](/images//Images/bia_check_control_property_res.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[check control not exists](/TA_Automation/Topics/bia_check_control_not_exists.html)

**Next topic:**[check control tooltip](/TA_Automation/Topics/bia_check_control_tooltip.html)

**Related information**  


[get control property](/TA_Automation/Topics/bia_get_control_property.html)

