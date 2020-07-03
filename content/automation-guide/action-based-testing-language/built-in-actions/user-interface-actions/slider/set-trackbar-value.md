--- 
title: "set trackbar value"
linktitle: "set trackbar value"
description: "Description Set a value (and hence position) on a trackbar (slider) control. Arguments window TA name of the window. control TA name of the trackbar. percentage Value to which to set the trackbar. ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_set_trackbar_value.html
keywords: "built-in actions, set trackbar value, set trackbar value (action), set trackbar value, set value on trackbar, set the position of slider on trackbar, set trackbar current value"
---

## Description

Set a value \(and hence position\) on a trackbar\(slider\) control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the trackbar.

-   **percentage**

    Value to which to set the trackbar.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action does not support setting the value of a slider control on iOS. In its place, use the [set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set) action in iOS.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:trackbar.

## Example

![](/images/TA_Automation/Images/bia_set_trackbar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_set_trackbar_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_set_trackbar_value_res.png)

