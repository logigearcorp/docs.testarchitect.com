--- 
title: "get device screen size"
linktitle: "get device screen size"
description: "Description Return the physical screen size of the mobile device under test. Arguments device screen size (Optional) Variable to hold the returned screen size (that is, the diagonal), in inches. Valid ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_get_device_screen_size.html
keywords: "built-in actions, get device screen size, get device screen size (action), iOS (action), get device screen size, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), screen size, get mobile screen size, device screen size"
---

## {{< expand >}} Description

Return the physical screen size of the mobile device under test.

## {{< expand >}} Arguments

-   **device screen size**

    \(Optional\) Variable to hold the returned screen size \(that is, the diagonal\), in inches.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms {{< permerlink >}} {#bia_get_device_screen_size__section_ofz_xbl_zcb} 

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## {{< expand >}} Notes

-   If the variable in argumentdevice screen sizehas not been declared, the action creates it as a global.
-   If the device screen sizeargument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_get_device_screen_size_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_device_screen_size_pgm.png)

**Result** x\`

![](/images/TA_Automation/Images/bia_get_device_screen_size_res.png)




