--- 
title: "get native property"
linktitle: "get native property"
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_get_native_property.html
keywords: "get native property of control, get native property, retrieve native property of control"
---

## Description

Retrieve the value of a control's specified native property.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **property**

    Native property of the control.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

This built-in action is supported on the following systems/platforms:

|Desktop applications|-   Windows:
    -   WPF
    -   Silverlight
-   macOS:
    -   Safari

|
|Mobile applications|-   Android
    -   Chrome
-   iOS:
    -   Native applications
    -   Safari

|

## Notes

-   Although TestArchitect provides access to native properties, you should use it very carefully. Because accessing native properties can perform critical or unsafe operations in the AUT that may change the AUT's current state.
-   property argument: You can find native properties in the **Native Properties** tab of the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_reading.html).

    ![](/images//Images/Interface_Viewer_native_property.png)

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html), [color format](/TA_Automation/Topics/bis_color_format.html).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window, calendar.

## Example

![](/images//Images/bia_get_native_property_aut.png)

**Action Lines**

![](/images//Images/bia_get_native_property_pgm.png)

**Result**

![](/images//Images/bia_get_native_property_res.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[get control tooltip](/TA_Automation/Topics/bia_get_control_tooltip.html)

**Next topic:**[is control focused](/TA_Automation/Topics/bia_is_control_focused.html)

**Related information**  


[check native property](/TA_Automation/Topics/bia_check_native_property.html)

[set native property](/TA_Automation/Topics/bia_set_native_property.html)

[date format](/TA_Automation/Topics/bis_date_format.html)

