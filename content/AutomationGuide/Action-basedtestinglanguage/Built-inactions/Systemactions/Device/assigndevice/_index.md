--- 
title: "assign device"
linktitle: "assign device"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_assign_device.html
---
# assign device {#bia_assign_device .reference}

## Description { .section}

Assign a logical name to a physical mobile device or an emulator. This name may then be used in the action [use device](bia_use_device.html).

## Arguments { .section}

unique id
:   The unique identifier for the target device. Optional if only one device is connected to the host machine.

name
:   User-assigned, "friendly" name of the device.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms { .section}

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes { .section}

-   It is good practice to apply this action to all mobile devices, if any, at the beginning of a test module. You can use assign device to assign logical names to any number of mobile devices. This is especially helpful if use device is invoked in several places in a test module, allowing the automation to switch between devices during execution.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   The value for theunique id argument is obtained from the [Android Instrumentation Tool](../../Android/Topics/Android_Instrumentation_tool.html) dialog box \(for Android devices\), or from the [Select device](../../iOS/Topics/iOS_capturing_interface.html) dialog box \(for iOS devices\).
    -   **For Android devices**: In the Devices panel of the Android Instrumentation Tool dialog box, right-click the Android device that you intend to use, and select **Copy unique ID to clipboard**. This value can then be pasted into the unique id argument of the assign device action.

        ![](../Images/Android_copy_ID.png)

    -   **For iOS devices**: In the [Select device](../../iOS/Topics/iOS_capturing_interface.html) drop-down list, select the iOS device that you intend to use, right-click and select **Copy device ID**. This value can then be pasted into the unique id argument of the assign device action.

        ![](../../iOS/Images/iOS_copy_device_ID.png)


## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Note:** Refer to the [above note](#li.obtain_device_id) for the means by which a device's unique ID is obtained.

Let's say you have two Android mobile devices connected to a controller. Device 1 sends an email. Device 2 receives the email, which your test must then verify. In order to switch between these two devices during testing, they must be identified by logical names. Hence you would first assign a logical name to each device by means of the assign device action. Subsequently, invoke the use device action to designate whichever device you want to apply the test automation to.

**Action Lines**

![](../Images/bia_assign_device_pgm.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[assign cloud device](../../TA_Automation/Topics/bia_assign_cloud_device.html)

**Next topic:**[check displayed text](../../TA_Automation/Topics/bia_check_displayed_text.html)

