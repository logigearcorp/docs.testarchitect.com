--- 
title: "get device information"
linktitle: "get device information"
aliases: 
    - /TA_Automation/Topics/bia_get_device_information.html
---
# get device information {#bia_get_device_information .reference}

## Description { .section}

Return information relating to the current mobile device under test.

## Arguments { .section}

os version
:   Variable to hold the returned mobile operating system version.

model
:   Variable to hold the returned device model.

serial number
:   Variable to hold the returned serial number of the mobile device.

mac address
:   Variable to hold the returned MAC address of the mobile device.

unique id
:   Variable to hold a returned identifier for the mobile device.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms { .section}

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes { .section}

-   unique id:
    -   iOS devices: The returned value is not the Unique Device Identifier \(UDID\). Instead, it is the combination of the device name plus the device model, separated by an underscore. For example, if your device name is Doe and your device model is iPhone 6s, the returned value of unique id is doe\_iphone 6s.
    -   Android devices: The returned value is the MAC address of your device, minus the colons separating the octets comprising the address. For example: if your device's MAC address is 48:5a:3f:36:55:66, the returned value of unique id is 485a3f365566.
-   If the variables in argumentsos version, model, serial number, mac address, and unique id have not been declared, the action creates them as globals.
-   For each of os version, model, serial number, mac address, and unique id, if the argument is left empty, a variable with the same name as the argument header is created to hold the return value.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Example { .section}

**Action Lines**

![](../Images/bia_get_device_information_pgm.png)

**Result**

![](../Images/bia_get_device_information_res.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[get cloud device session id](../../TA_Automation/Topics/bia_get_cloud_device_session_id.html)

**Next topic:**[get device log file](../../TA_Automation/Topics/bia_get_device_log_file.html)

