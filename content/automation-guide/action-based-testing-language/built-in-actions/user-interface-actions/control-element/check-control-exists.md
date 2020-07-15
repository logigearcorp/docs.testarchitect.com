--- 
title: "check control exists"
linktitle: "check control exists"
description: "Description Check for the existence of a control. Result is Passed if the specified control is found ; otherwise Failed . Arguments window TA name of the window. control TA name of the control. Valid ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_control_exists.html
keywords: "built-in actions, check control exists, check control exists (action), iOS (action), check control exists, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if control exists, check whether control exists, check existence of control, verify existence of control"
---

## Description

Check for the existence of a control. Result is Passed ifthe specified control is found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_check_control_exists__section.notes} 

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, check box, checklist, clock, collection view, collection view cell, combo box, date picker, datetime, frame, image, label, list box, list view, map view, menu, navigation bar, page control, password, picker view, picture box, progress bar, radio button, rating bar, richtext, scroll bar, scroll view, search bar, segmented control, separator, slider, spin, status bar, stepper, switch, tab bar, tab control, table, table view, table view cell, text box, text view, toggle button, toolbar, trackbar, tree view, view, web view, window.



## Example

![](/images/TA_Automation/Images/bia_check_control_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_control_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_control_exists_res.png)




**Related information**  


[check control not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-not-exists)

[does control exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/does-control-exist)
