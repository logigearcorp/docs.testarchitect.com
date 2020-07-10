--- 
title: "use device"
linktitle: "use device"
description: "Description Logically connect to a physical mobile device or an emulator and make that device the target for the automation. Arguments name (Optional) Target device for the controller to connect to ..."
weight: 27
aliases: 
    - /TA_Automation/Topics/bia_use_device.html
keywords: "built-in actions, use device, use device (action), iOS (action), Android (action), utilize device, utilize iOS mobile, utilize Android mobile"
---

## {{< expand >}} Description

Logically connect to a physical mobile device or an emulator and make that device the target for the automation.

## {{< expand >}} Arguments

-   **name**

    \(Optional\) Target device for the controller to connect to and automation to be performed upon. Optional if only one device is connected to the test controller.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms {{< permerlink >}} {#bia_use_device__section_l1l_pcl_zcb} 

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## {{< expand >}} Notes

-   The name specified in the name argument is established in advance by the [assign device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-device) action, which assigns a logical name to a mobile device.
-   It is good practice to specify logical names for all test devices at the beginning of a test module, using assign device for each device that is to be targeted by the test. This is especially helpful if use device is invoked in several places in a test module, allowing the automation to switch between multiple mobile devices during testing.
-   Only one device may serve as the target device at a given time. If another target device is connected at the time use device executes, that device is logically disconnected before the device specified by the name argument is connected.
-   After a device has been targeted for automation, TestArchitect automatically adds it to the devices list in [Lab Manager](/user-guide/lab-manager/), and you can monitor the test progress there.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

Let's say you have two Android mobile devices connected to a controller. Device 1 sends an email. Device 2 receives the email, which your test must then verify. In order to switch between these two devices during testing, they must be identified by logical names. Hence you would first assign a logical name to each device by means of the assign device action. Subsequently, invoke the use device action to designate whichever device you want to apply the test automation to.

**Action Lines**

![](/images/TA_Automation/Images/bia_assign_device_pgm.png)

## {{< expand >}} Troubleshooting

**What happens if the test executes a use device action specifying a device that is currently busy executing another automated test?**

If you try to execute an automated test on a currently busy device with the built-in use device action, an Automation Problem dialog box appears. You are offered the options to debug, stop, or even continue the automated test. This automation problem is later reported in the test result once the automated test is complete.

![](/images/TA_Automation/Images/automation_problem_busy_phone.png)




