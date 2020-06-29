--- 
title: "get operating system name"
linktitle: "get operating system name"
description: "Description Retrieve the name and details of the operating system of the test machine. Arguments variable (Optional) Variable to receive the returned value s (see note). Valid contexts This action may ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_get_operating_system_name.html
keywords: "built-in actions, get operating system name, get operating system name (action), iOS (action), get operating system name, get OS name, get OS info, get OS version, get system type"
---

## Description

Retrieve the name and details of the operating system of the test machine.

## Arguments

-   **variable**

    \(Optional\) Variable to receive the returned values \(see note\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The returned string consists of the following items:
    -   On Windows/Linux:
        -   system information \(e.g., Microsoft Windows 7, Microsoft Windows XP\)
        -   product information \(e.g., Professional, Home Premium Edition\)
        -   service pack \(if any\) \(e.g., Service Pack 3\)
        -   build number \(e.g., build 7600\)
        -   system type \(e.g., 32-bit, 64-bit\)
    -   On iOS native applications:
        -   name: name identifying the device.
        -   systemName: name of the operating system running on the device.
        -   systemVersion: current version of the operating system.
        -   localizedModel: model of the device as a localized string.
-   Items above are concatenated in the order shown.
    -   On Windows/Linux: system information, product information, and service pack datums are delimited with only spaces, whereas build number and system type are each preceded by commas.
    -   On iOS native applications: the returned values of name, systemName, systemVersion, and localizedModel are delimited with vertical bars.
-   Some sample return strings:
    -   Windows: Microsoft Windows 7 Ultimate Edition Service Pack 1, build 7601, 32-bit
    -   Linux: Red Hat Enterprise Linux Client release 5.2 \(Tikanga\), build 2.6.18-238.12.1.eI5, 64-bit
    -   iOS native applications: name = John \| systemName = iPhone OS \| systemVersion = 8.3 \| localizedModel = iPad
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms:iOS native applications, Windows, Linux.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example - Case 1: On Windows

**Action Lines**

![](/images/TA_Automation/Images/bia_get_operating_system_name_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_operating_system_name_res.png)

## Example - Case 2: On iOS native applications

**Action Lines**

![](/images/TA_Automation/Images/bia_get_operating_system_name_pgm2.png)

**Result**

![](/images/TA_Automation/Images/bia_get_operating_system_name_res2.png)




