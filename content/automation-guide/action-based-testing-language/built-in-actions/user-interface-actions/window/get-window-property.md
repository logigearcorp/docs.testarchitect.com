--- 
title: "get window property"
linktitle: "get window property"
description: "Description Retrieve the value of a specified property of a window. Arguments window TA name of the window. property Property to retrieve the value of. variable Variable to receive the returned value ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_get_window_property.html
keywords: "built-in actions, get window property, get window property (action), iOS (action), get window property, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get value of specified property of window, retrieve value of specified property of window"
---

## {{< expand >}} Description

Retrieve the value of a specified property of a window.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **property**

    Property to retrieve the value of.

-   **variable**

    Variable to receive the returned value.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:window.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_get_window_property_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_window_property_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_window_property_res.png)




**Related information**  


[check window property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/check-window-property)

