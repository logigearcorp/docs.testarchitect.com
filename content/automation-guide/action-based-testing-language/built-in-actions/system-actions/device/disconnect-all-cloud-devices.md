--- 
title: "disconnect all cloud devices"
linktitle: "disconnect all cloud devices"
description: "Description Logically disconnect all currently-connected cloud devices. Arguments There are no arguments for this action. Notes This built-in action applies only to WebDriver based cloud services. ( ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_disconnect_all_cloud_devices.html
keywords: "built-in actions, disconnect all cloud devices, disconnect all cloud devices (action), iOS (action), disconnect all cloud devices, Android (action), disconnect all mobile cloud devices, mobile cloud device disconnection, detach all mobile cloud devices"
---

## Description

Logically disconnect all currently-connected cloud devices.

## Arguments

There are no arguments for this action.

## Notes

-   This built-in action applies only to WebDriver based cloud services. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/).\)
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

Suppose that during the automation test, you are connecting to two cloud devices. Now, you'd like to terminate all currently-connected cloud devices.

**Action Lines**

![](/images/TA_Automation/Images/bia_disconnect_all_cloud_devices.png)




**Related information**  


[assign cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device)

[connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device)

[use cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-cloud-device)

[get cloud device session id](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/get-cloud-device-session-id)

[disconnect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-cloud-device)

[use host machine](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-host-machine)

