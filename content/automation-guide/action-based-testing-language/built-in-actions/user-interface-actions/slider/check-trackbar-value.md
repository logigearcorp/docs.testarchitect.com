--- 
title: "check trackbar value"
linktitle: "check trackbar value"
description: "Description Check the value of a trackbar (slider) against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of the window. control TA name of the ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_trackbar_value.html
keywords: "built-in actions, check trackbar value, check trackbar value (action), check trackbar value, check trackbar value against expected value, check if trackbar value matches expected value, verify if trackbar value matches expected value, verify whether trackbar value matches expected value"
---

## Description

Check the value of a trackbar\(slider\) against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the trackbar.

-   **expected**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action does not support checking the value of a slider control on iOS. In its place, use the [check](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check) action in iOS.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:trackbar.

## Example

![](/images/TA_Automation/Images/bia_check_trackbar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_trackbar_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_trackbar_value_res.png)

## Example

![](/images/TA_Automation/Images/bia_check_trackbar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_trackbar_value_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_trackbar_value_ta4vs_res.png)



