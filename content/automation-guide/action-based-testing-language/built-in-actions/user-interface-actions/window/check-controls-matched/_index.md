--- 
title: "check controls matched"
linktitle: "check controls matched"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_controls_matched.html
keywords: "check controls matched, check if all defined controls in interface entity match those in window, verify whether all defined controls in interface entity match those in window"
---

## Description

Check that all defined controls in an interface entity match the controls in a window of the AUT. Result is Passed ifall the specified controls match; otherwise Failed.

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
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [window wait](window_wait.html).

## Example - Verify all but three controls

![](/images//Images/bia_check_controls_matched_multiple_controls_aut.png)

**Action Lines**

![](/images//Images/bia_check_controls_matched_multiple_controls_pgm.png)

**Result**

![](/images//Images/bia_check_controls_matched_multiple_controls_res.png)

**Parent topic:**[Window](/TA_Automation/Topics/bia_Window.html)

**Next topic:**[check window exists](/TA_Automation/Topics/bia_check_window_exists.html)

