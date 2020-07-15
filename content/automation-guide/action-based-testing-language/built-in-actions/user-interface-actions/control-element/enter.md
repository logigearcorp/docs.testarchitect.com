--- 
title: "enter"
linktitle: "enter"
description: "Description Enter a value into a given control. Arguments window TA name of the window. control TA name of the control. value Value to be entered. Valid contexts This action may be used within the ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_enter.html
keywords: "built-in actions, enter, enter (action), iOS (action), enter, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), enter value in control, input value in control, fill in control"
---

## Description

Enter a value into a given control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **value**

    Value to be entered.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The effect of the enter built-in action depends on the class of the control. For example, for a combo box control, the enter action selects an item from the list.
-   In some special cases on a web platform, the enter action may trigger an unexpected or undesired event. To address such cases, it is suggested that you use the [set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set) built-in action to assign a value to text box controls. Unlike enter, set avoids the triggering of events.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:combo box, input-datetime, input-email, input-number,input-password, input-search, input-tel, input-text, input-url, password, richtext, search bar, text box, text view,



## Example

Action Lines

![](/images/TA_Automation/Images/bia_enter_pgm.png)

Result

![](/images/TA_Automation/Images/bia_enter_res.png)

Effect

![](/images/TA_Automation/Images/bia_enter_aut.png)



