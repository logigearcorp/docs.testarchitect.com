--- 
title: "get device screen size"
linktitle: "get device screen size"
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_get_device_screen_size.html
keywords: "screen size, get device screen size, get mobile screen size, device screen size, "
---

## Description

Return the physical screen size of the mobile device under test.

## Arguments

-   **device screen size**

    \(Optional\) Variable to hold the returned screen size \(that is, the diagonal\), in inches.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes

-   If the variable in argumentdevice screen sizehas not been declared, the action creates it as a global.
-   If the device screen sizeargument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

![](/images//Images/bia_get_device_screen_size_aut.png)

**Action Lines**

![](/images//Images/bia_get_device_screen_size_pgm.png)

**Result** x\`

![](/images//Images/bia_get_device_screen_size_res.png)

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Previous topic:**[get device log file](/TA_Automation/Topics/bia_get_device_log_file.html)

**Next topic:**[get displayed text](/TA_Automation/Topics/bia_get_displayed_text.html)

