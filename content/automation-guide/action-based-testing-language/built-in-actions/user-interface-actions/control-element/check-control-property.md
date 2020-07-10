--- 
title: "check control property"
linktitle: "check control property"
description: "Description Capture the value of a specified property from a control, then compare it against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_control_property.html
keywords: "built-in actions, check control property, check control property (action), iOS (action), check control property, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check control property against expected value, check if control property matches expected value, check whether control property matches expected value, verify if control property matches expected value"
---

## {{< expand >}} Description

Capture the value of a specified property from a control, then compare it against an expected value. Result is Passed ifthe values match; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **property**

    TA or native property. \(e.g., caption, winclass, top, etc.\)

-   **expected**

    Expected value of the property.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action is applicable to both TA properties and native properties that are viewable in the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/).
-   In the event that a TA property and native property have identical names, the TA property takes precedence. Therefore, if you want to explicitly check the native property, use the [check native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-native-property) action.
-   This action is applicable only to properties that are viewable in TestArchitect's Interface Viewer.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [property wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/property-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:activity indicator view, button, check box, checklist, clock, collection view, collection view cell, combo box, date picker, datetime, frame, image, label, list box, list view, map view, menu, navigation bar, page control, password, picker view, picture box, progress bar, radio button, rating bar, richtext, scroll bar, scroll view, search bar, segmented control, separator, slider, spin, status bar, stepper, switch, tab bar, tab control, table, table view, table view cell, text box, text view, toggle button, toolbar, trackbar, tree view, view, web view, window, calendar.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_control_property_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_control_property_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_control_property_res.png)




**Related information**  


[get control property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get-control-property)

