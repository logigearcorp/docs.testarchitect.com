--- 
title: "set native property"
linktitle: "set native property"
aliases: 
    - /TA_Automation/Topics/bia_set_native_property.html
---
# set native property {#bia_set_native_property .reference}

## Description { .section}

Set a new value for a specified native property of a control.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

property
:   Native property of the control.

value
:   The new value to set. \(See Notes for allowable values.\)

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {#section_zrb_vmd_zbb .section}

This built-in action is supported on the following systems/platforms:

|Desktop applications|-   Windows:
    -   WPF

|
|Mobile applications|-   iOS:
    -   Native applications

|

## Notes { .section}

-   Although TestArchitect provides access to native properties, you should use it very carefully. Because accessing native properties can perform critical or unsafe operations in the AUT that may change the AUT's current state.
-   property argument: You can find native properties in the **Native Properties** tab of the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer_reading.html).

    ![](../Images/Interface_Viewer_native_property.png)

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
    2.  Datetime: Follows the date format, specified in the [date format](bis_date_format.html) built-in setting.
    3.  Color: Follows the color formatting code, specified in the [color format](bis_color_format.html) built-in setting.

        **Remember:** If you use the Hex color formatting code for the value argument, insert a back slash \( \\ \) before the value entered. For example: \\\#FFFFFF.

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html), [color format](bis_color_format.html).

## Applicable Controls { .section}

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, and window.

## Example { .section}

![](../Images/bia_set_native_property_aut.png)

**Action Lines**

![](../Images/bia_set_native_property_pgm.png)

**Result**

![](../Images/bia_set_native_property_res.png)

**Effect**

![](../Images/bia_set_native_property_effect.png)

**Parent topic:**[Control, Element](../../TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[set](../../TA_Automation/Topics/bia_set.html)

**Related information**  


[check native property](../../TA_Automation/Topics/bia_check_native_property.html)

[get native property](../../TA_Automation/Topics/bia_get_native_property.html)

