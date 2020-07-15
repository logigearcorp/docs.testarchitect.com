--- 
title: "get screen orientation"
linktitle: "get screen orientation"
description: "Description Return the current orientation of the mobile device. Arguments variable (Optional) Variable to receive the returned value . Possible returned values: portrait landscape Valid contexts This ..."
weight: 16
aliases: 
    - /TA_Automation/Topics/bia_get_screen_orientation.html
keywords: "built-in actions, get screen orientation, get screen orientation (action), iOS (action), get screen orientation, get device orientation, detect screen orientation, detect mobile orientation, detect device orientation"
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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

![](/images/TA_Automation/Images/Android_phone.portrait_mode.jpg)

Action Lines

![](/images/TA_Automation/Images/bia_get_screen_orientation_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_screen_orientation_res.png)




**Related information**  


[set screen orientation](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/set-screen-orientation)
