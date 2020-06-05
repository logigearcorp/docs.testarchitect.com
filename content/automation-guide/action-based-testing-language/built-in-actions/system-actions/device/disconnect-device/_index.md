--- 
title: "disconnect device"
linktitle: "disconnect device"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_disconnect_device.html
---
keyword: [disconnect a physical mobile device, physical mobile device disconnection, detach a physical mobile device]
---

# disconnect device

## Description

Logically disconnect the target device from the host machine.

## Arguments

There are no arguments for this action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes

-   The primary value of this action lies in allowing your test to switch from mobile mode to host mode during the test. This action is also used to ascertain the success of some aspects of testing, such as messaging or synchronizing, that involve the host PC.
-   disconnect device is not used for switching between mobile devices. Instead, use the [use device](bia_use_device.html) action, which automatically performs a logical disconnect from a connected device before connecting to the specified device.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

You want to run some tests on a device, then check the device's system log file. Your test needs to connect to the device and run the tests. Next, in order to access the contents of the device's log, it is necessary to copy it to the host system with a get device log file action. Now, in order to access the copied file on the host, you must first disconnect from the device, to ensure that subsequent actions are indeed directed to the host, and not to the device.

**Action Lines**

![](/images//Images/bia_disconnect_device_pgm.r02.png)

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Previous topic:**[disconnect cloud device](/TA_Automation/Topics/bia_disconnect_cloud_device.html)

**Next topic:**[drag](/TA_Automation/Topics/bia_drag.html)

