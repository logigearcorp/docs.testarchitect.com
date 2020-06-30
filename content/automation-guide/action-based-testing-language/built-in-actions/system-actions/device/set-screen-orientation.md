--- 
title: "set screen orientation"
linktitle: "set screen orientation"
description: "Description Set the orientation of the device's screen to portrait or landscape. Arguments orientation Screen orientation to be set. Allowable values: portrait (or p ). landscape (or l ). Valid ..."
weight: 23
aliases: 
    - /TA_Automation/Topics/bia_set_screen_orientation.html
keywords: "built-in actions, set screen orientation, set screen orientation (action), iOS (action), set screen orientation, Android (action), portrait, landscape"
---

## Description

Set the orientation of the device's screen to portrait or landscape.

## Arguments

-   **orientation**

    Screen orientation to be set.

    Allowable values:

    -   portrait \(or p\).
    -   landscape \(or l\).

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes

-   The values of the orientation argument are non-case sensitive.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_set_screen_orientation_pgm.landscape.png)

**Result**

![](/images/TA_Automation/Images/bia_set_screen_orientation_res.r02.png)




**Related information**  


[get screen orientation](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/get-screen-orientation)

