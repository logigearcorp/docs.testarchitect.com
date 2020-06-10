--- 
title: "get screen orientation"
linktitle: "get screen orientation"
weight: 16
aliases: 
    - /TA_Automation/Topics/bia_get_screen_orientation.html
keywords: "get screen orientation, get device orientation, detect screen orientation, detect mobile orientation, detect device orientation"
---

## Description

Return the current orientation of the mobile device.

## Arguments

-   **variable**

    \(Optional\) Variable to receive the returned value.

    Possible returned values:

    -   portrait
    -   landscape

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: iOS.

## Notes

-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

![](/images//Images/Android_phone.portrait_mode.jpg)

**Action Lines**

![](/images//Images/bia_get_screen_orientation_pgm.png)

**Result**

![](/images//Images/bia_get_screen_orientation_res.png)

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Previous topic:**[get displayed text](/TA_Automation/Topics/bia_get_displayed_text.html)

**Next topic:**[kill process](/TA_Automation/Topics/bia_kill_process.html)

**Related information**  


[set screen orientation](/TA_Automation/Topics/bia_set_screen_orientation.html)

