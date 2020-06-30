--- 
title: "get native property"
linktitle: "get native property"
description: "Description Retrieve the value of a control's specified native property. Arguments window TA name of the window. control TA name of the control. property Native property of the control. variable ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_get_native_property.html
keywords: "built-in actions, get native property, get native property (action), iOS (action), Safari, macOS (action), macOS, Safari (action), get native property of control, retrieve native property of control"
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
-   property argument: You can find native properties in the **Native Properties** tab of the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/).

    ![](/images/TA_Automation/Images/Interface_Viewer_native_property.png)

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls), [color format](/automation-guide/action-based-testing-language/built-in-settings/other-settings/color-format).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window, calendar.

## Example

![](/images/TA_Automation/Images/bia_get_native_property_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_native_property_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_native_property_res.png)




**Related information**  


[check native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-native-property)

[set native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set-native-property)

[date format](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-format)

