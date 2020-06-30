--- 
title: "set native property"
linktitle: "set native property"
description: "Description Set a new value for a specified native property of a control. Arguments window TA name of the window. control TA name of the control. property Native property of the control. value The new ..."
weight: 17
aliases: 
    - /TA_Automation/Topics/bia_set_native_property.html
keywords: "built-in actions, set native property, set native property (action), iOS (action), Safari, macOS (action), macOS, Safari (action), set value for native property of control, assign value to native property of control"
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
-   property argument: You can find native properties in the **Native Properties** tab of the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/).

    ![](/images/TA_Automation/Images/Interface_Viewer_native_property.png)

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
    2.  Datetime: Follows the date format, specified in the [date format](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-format) built-in setting.
    3.  Color: Follows the color formatting code, specified in the [color format](/automation-guide/action-based-testing-language/built-in-settings/other-settings/color-format) built-in setting.

        {{<remember>}} If you use the Hex color formatting code for the value argument, insert a back slash \( \\ \) before the value entered. For example: \\\#FFFFFF.

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls), [color format](/automation-guide/action-based-testing-language/built-in-settings/other-settings/color-format).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window and calendar.

## Example

![](/images/TA_Automation/Images/bia_set_native_property_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_set_native_property_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_set_native_property_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_set_native_property_effect.png)



**Related information**  


[check native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-native-property)

[get native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get-native-property)

