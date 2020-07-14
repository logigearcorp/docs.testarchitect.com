--- 
title: "check control not exists"
linktitle: "check control not exists"
description: "Description Check for the nonexistence of a control. Result is Passed if the specified control is not found ; otherwise Failed . Arguments window TA name of the window. control TA name of the control. ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_control_not_exists.html
keywords: "built-in actions, check control not exists, check control not exists (action), iOS (action), check control not exists, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check controls does not exist, check if control does not exist, check whether control does not exist, check nonexistence of control, verify nonexistance of control"
---

## Description

Check for the nonexistence of a control. Result is Passed ifthe specified control is not found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, check box, checklist, clock, collection view, collection view cell, combo box, date picker, datetime, frame, image, label, list box, list view, map view, menu, navigation bar, page control, password, picker view, picture box, progress bar, radio button, rating bar, richtext, scroll bar, scroll view, search bar, segmented control, separator, slider, spin, status bar, stepper, switch, tab bar, tab control, table, table view, table view cell, text box, text view, toggle button, toolbar, trackbar, tree view, view, web view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example

![](/images/TA_Automation/Images/bia_check_control_not_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_control_not_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_control_not_exists_res.png)




**Related information**  


[check control exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-exists)

[does control exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/does-control-exist)
