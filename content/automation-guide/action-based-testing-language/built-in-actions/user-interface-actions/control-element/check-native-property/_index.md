--- 
title: "check native property"
linktitle: "check native property"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_check_native_property.html
keywords: "check native property, check native property of control against expected value, check if native property of control matches expected value, check whether native property of control matches expected value, verify if native property of control matches expected value"
---

## Description

Check the value of a native property of a control against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **property**

    Native property of the control.

-   **expected**

    Expected value of the property.


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

-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html), [color format](/TA_Automation/Topics/bis_color_format.html).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window and calendar.

## Example

![](/images//Images/bia_check_native_property_aut.png)

**Action Lines**

![](/images//Images/bia_check_native_property_pgm.png)

**Result**

![](/images//Images/bia_check_native_property_res.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[check control tooltip](/TA_Automation/Topics/bia_check_control_tooltip.html)

**Next topic:**[check tab order](/TA_Automation/Topics/bia_check_tab_order.html)

**Related information**  


[get native property](/TA_Automation/Topics/bia_get_native_property.html)

[set native property](/TA_Automation/Topics/bia_set_native_property.html)

[date format](/TA_Automation/Topics/bis_date_format.html)

