--- 
title: "check native property"
linktitle: "check native property"
description: "Description Check the value of a native property of a control against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of the window. control TA ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_check_native_property.html
keywords: "built-in actions, check native property, check native property (action), iOS (action), check native property of control against expected value, check if native property of control matches expected value, check whether native property of control matches expected value, verify if native property of control matches expected value"
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
-   property argument: You can find native properties in the **Native Properties** tab of the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/).

    ![](/images/TA_Automation/Images/Interface_Viewer_native_property.png)

-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls), [color format](/automation-guide/action-based-testing-language/built-in-settings/other-settings/color-format).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window and calendar.

## Example

![](/images/TA_Automation/Images/bia_check_native_property_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_native_property_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_native_property_res.png)




**Related information**  


[get native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get-native-property)

[set native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set-native-property)

[date format](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-format)

