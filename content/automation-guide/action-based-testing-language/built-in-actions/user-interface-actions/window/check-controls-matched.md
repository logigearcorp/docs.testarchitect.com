--- 
title: "check controls matched"
linktitle: "check controls matched"
description: "Description Check that all defined controls in an interface entity match the controls in a window of the AUT. Result is Passed if all the specified controls match ; otherwise Failed . Arguments window ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_controls_matched.html
keywords: "built-in actions, check controls matched, built-in actions, compare interface, check controls matched, compare interface (action), check controls matched, check controls matched (action), iOS (action), check controls matched, Safari, iOS (action), iOS, Safari (action), Android (action), check controls matched, Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), check controls matched, macOS, Safari (action), check if all defined controls in interface entity match those in window, verify whether all defined controls in interface entity match those in window"
---

## Description

Check that all defined controls in an interface entity match the controls in a window of the AUT. Result is Passed if all the specified controls match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **ignore**

    \(Optional\) TA names of one or more controls to be ignored in the validation process.

    Separate multiple ignored controls with commas.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action is typically used if the application under test has been updated to a newer version, and you need to verify that the controls defined in the interface entity for the previous version are still mappable to this one.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example - Verify all but three controls

![](/images/TA_Automation/Images/bia_check_controls_matched_multiple_controls_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_controls_matched_multiple_controls_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_controls_matched_multiple_controls_res.png)


