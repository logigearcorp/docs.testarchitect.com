--- 
title: "is control focused"
linktitle: "is control focused"
description: "Description Return a Boolean value to indicate whether the specified control has focus. Arguments window TA name of the window. control TA name of the control. variable (Optional) Variable to receive ..."
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_is_control_focused.html
keywords: "built-in actions, is control focused, is control focused (action), iOS (action), is control focused, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if control is focused, check whether control is focused, verify if control is focused, check control is focused"
---

## Description

Return a Boolean value to indicate whether the specified control has focus.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Control has focus.

    -   **0**

        Control does not have focus.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, combo box, datetime, list box, menu, password, radio button, richtext, separator, spin, tab control, table, text box, toggle button, toolbar, trackbar, tree view.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, list box, list view, menu, password, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example

![](/images/TA_Automation/Images/bia_is_control_focused_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_is_control_focused_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_is_control_focused_res.png)

## Example

![](/images/TA_Automation/Images/bia_is_control_focused_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_is_control_focused_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_is_control_focused_ta4vs_res.png)




**Related information**  


[focus control](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/focus-control)

