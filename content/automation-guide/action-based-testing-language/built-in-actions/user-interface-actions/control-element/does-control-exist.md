--- 
title: "does control exist"
linktitle: "does control exist"
description: "Description Return a Boolean value to indicate whether the specified control is found to exist. Arguments window TA name of the window. control TA name of the control. variable (Optional) Variable to ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_does_control_exist.html
keywords: "built-in actions, does control exist, does control exist (action), iOS (action), does control exist, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), Is control found"
---

## Description

Return a Boolean value to indicate whether the specified control is found to exist.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Control found.

    -   **0**

        Control not found.

-   **time out**

    \(Optional\) Maximum wait time for the control to appear \(units: seconds; default = the current value of built-in setting object wait probe\).

    {{<note>}} time out is an unsupported argument and hence invisible. To use it, you must specify both the value and the header “time out” in the cells to the right of the variable argument.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   time outis an unsupported argument and hence invisible. To use it, you must specify both its value and header, in the cell to the right of last visible argument.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait-probe), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, check box, checklist, clock, collection view, collection view cell, combo box, date picker, datetime, frame, image, label, list box, list view, map view, menu, navigation bar, page control, password, picker view, picture box, progress bar, radio button, rating bar, richtext, scroll bar, scroll view, search bar, segmented control, separator, slider, spin, status bar, stepper, switch, tab bar, tab control, table, table view, table view cell, text box, text view, toggle button, toolbar, trackbar, tree view, view, web view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example

![](/images/TA_Automation/Images/bia_does_control_exist_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_does_control_exist_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_control_exist_res.png)




**Related information**  


[check control exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-exists)

[check control not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-not-exists)

