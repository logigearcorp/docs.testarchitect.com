--- 
title: "set native property"
linktitle: "set native property"
weight: 17
aliases: 
    - /TA_Automation/Topics/bia_set_native_property.html
keywords: "set native property, set value for native property of control, assign value to native property of control"
---

## Description

Set a new value for a specified native property of a control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **property**

    Native property of the control.

-   **value**

    The new value to set. \(See Notes for allowable values.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

This built-in action is supported on the following systems/platforms:

|Desktop applications|-   Windows:
    -   WPF

|
|Mobile applications|-   iOS:
    -   Native applications

|

## Notes

-   Although TestArchitect provides access to native properties, you should use it very carefully. Because accessing native properties can perform critical or unsafe operations in the AUT that may change the AUT's current state.
-   property argument: You can find native properties in the **Native Properties** tab of the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_reading.html).

    ![](/images//Images/Interface_Viewer_native_property.png)

-   value argument: Supported property value types are as follows:
    1.  Primitive data types:
        -   byte
        -   short
        -   integer
        -   long
        -   float
        -   double
        -   boolean
        -   char
        -   string
    2.  Datetime: Follows the date format, specified in the [date format](date_format.html) built-in setting.
    3.  Color: Follows the color formatting code, specified in the [color format](color_format.html) built-in setting.

        **Remember:** If you use the Hex color formatting code for the value argument, insert a back slash \( \\ \) before the value entered. For example: \\\#FFFFFF.

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [page wait](page_wait.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html), [color format](color_format.html).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window and calendar.

## Example

![](/images//Images/bia_set_native_property_aut.png)

**Action Lines**

![](/images//Images/bia_set_native_property_pgm.png)

**Result**

![](/images//Images/bia_set_native_property_res.png)

**Effect**

![](/images//Images/bia_set_native_property_effect.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[set](/TA_Automation/Topics/bia_set.html)

**Related information**  


[check native property](/TA_Automation/Topics/bia_check_native_property.html)

[get native property](/TA_Automation/Topics/bia_get_native_property.html)

