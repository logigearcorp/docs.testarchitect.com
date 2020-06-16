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

-   This built-in action applies only to WebDriver based cloud services. \([Learn more](/TA_Automation/Topics/aut_app_cloud_testing.html).\)
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

Suppose that during the automation test, you are connecting to two cloud devices. Now, you'd like to terminate all currently-connected cloud devices.

**Action Lines**

![](/images/TA_Automation/Images/bia_disconnect_all_cloud_devices.png)




**Related information**  


[assign cloud device](/TA_Automation/Topics/bia_assign_cloud_device.html)

[connect cloud device](/TA_Automation/Topics/bia_connect_cloud_device.html)

[use cloud device](/TA_Automation/Topics/bia_use_cloud_device.html)

[get cloud device session id](/TA_Automation/Topics/bia_get_cloud_device_session_id.html)

[disconnect cloud device](/TA_Automation/Topics/bia_disconnect_cloud_device.html)

[use host machine](/TA_Automation/Topics/bia_use_host_machine.html)

