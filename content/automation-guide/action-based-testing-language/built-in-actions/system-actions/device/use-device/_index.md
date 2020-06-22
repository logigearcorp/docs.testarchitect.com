--- 
title: "use device"
linktitle: "use device"
description: "Description Logically connect to a physical mobile device or an emulator and make that device the target for the automation. Arguments name (Optional) Target device for the controller to connect to ..."
weight: 27
aliases: 
    - /TA_Automation/Topics/bia_use_device.html
keywords: "built-in actions, use device, use device (action), iOS (action), Android (action), utilize device, utilize iOS mobile, utilize Android mobile"
---

## Description

Logically connect to a physical mobile device or an emulator and make that device the target for the automation.

## Arguments

-   **name**

    \(Optional\) Target device for the controller to connect to and automation to be performed upon. Optional if only one device is connected to the test controller.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes

-   The name specified in the name argument is established in advance by the [assign device](/TA_Automation/Topics/bia_assign_device.html) action, which assigns a logical name to a mobile device.
-   It is good practice to specify logical names for all test devices at the beginning of a test module, using assign device for each device that is to be targeted by the test. This is especially helpful if use device is invoked in several places in a test module, allowing the automation to switch between multiple mobile devices during testing.
-   Only one device may serve as the target device at a given time. If another target device is connected at the time use device executes, that device is logically disconnected before the device specified by the name argument is connected.
-   After a device has been targeted for automation, TestArchitect automatically adds it to the devices list in [Lab Manager](/TA_Help/Topics/Lab_manager.html), and you can monitor the test progress there.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

Let's say you have two Android mobile devices connected to a controller. Device 1 sends an email. Device 2 receives the email, which your test must then verify. In order to switch between these two devices during testing, they must be identified by logical names. Hence you would first assign a logical name to each device by means of the assign device action. Subsequently, invoke the use device action to designate whichever device you want to apply the test automation to.

**Action Lines**

![](/images/TA_Automation/Images/bia_assign_device_pgm.png)

## Troubleshooting

**What happens if the test executes a use device action specifying a device that is currently busy executing another automated test?**

If you try to execute an automated test on a currently busy device with the built-in use device action, an Automation Problem dialog box appears. You are offered the options to debug, stop, or even continue the automated test. This automation problem is later reported in the test result once the automated test is complete.

![](/images/TA_Automation/Images/automation_problem_busy_phone.png)




