--- 
title: "disconnect all cloud devices"
linktitle: "disconnect all cloud devices"
aliases: 
    - /TA_Automation/Topics/bia_disconnect_all_cloud_devices.html
---
# disconnect all cloud devices {#bia_disconnect_all_cloud_devices .reference}

## Description {#section_nkt_zth_gy .section}

Logically disconnect all currently-connected cloud devices.

## Arguments {#section_okt_zth_gy .section}

There are no arguments for this action.

## Notes {#section_qkt_zth_gy .section}

-   This built-in action applies only to WebDriver based cloud services. \([Learn more](aut_app_cloud_testing.html).\)
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings {#section_vkt_zth_gy .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example {#section_wkt_zth_gy .section}

Suppose that during the automation test, you are connecting to two cloud devices. Now, you'd like to terminate all currently-connected cloud devices.

**Action Lines**

![](../Images/bia_disconnect_all_cloud_devices.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[connect cloud device](../../TA_Automation/Topics/bia_connect_cloud_device.html)

**Next topic:**[disconnect cloud device](../../TA_Automation/Topics/bia_disconnect_cloud_device.html)

**Related information**  


[assign cloud device](../../TA_Automation/Topics/bia_assign_cloud_device.html)

[connect cloud device](../../TA_Automation/Topics/bia_connect_cloud_device.html)

[use cloud device](../../TA_Automation/Topics/bia_use_cloud_device.html)

[get cloud device session id](../../TA_Automation/Topics/bia_get_cloud_device_session_id.html)

[disconnect cloud device](../../TA_Automation/Topics/bia_disconnect_cloud_device.html)

[use host machine](../../TA_Automation/Topics/bia_use_host_machine.html)

