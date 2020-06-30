--- 
title: "get trackbar value"
linktitle: "get trackbar value"
description: "Description Retrieve the current value of a trackbar (slider) control. Arguments window TA name of the window. control TA name of the trackbar. variable (Optional) Variable to receive the returned ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_get_trackbar_value.html
keywords: "built-in actions, get trackbar value, get trackbar value (action), get trackbar value, retrieve trackbar value, get current value of trackbar, retrieve current value of trackbar, get position of slider on trackbar"
---

## Description

Retrieve the current value of a trackbar\(slider\) control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the trackbar.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action does not support retrieving the current value of a slider control in iOS. In its place, use the [get](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get) action in iOS.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:trackbar.

## Example

![](/images/TA_Automation/Images/bia_get_trackbar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_trackbar_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_trackbar_value_res.png)

## Example

![](/images/TA_Automation/Images/bia_get_trackbar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_trackbar_value_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_trackbar_value_ta4vs_res.png)




