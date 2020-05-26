--- 
title: "Unable to find the cloud device, as specified by its session ID."
linktitle: "Unable to find the cloud device, as specified by its session ID."
weight: 112
aliases: 
    - /TA_FAQ/Topics/0x80018006L.html
---
# Unable to find the cloud device, as specified by its session ID. {#reference_0x80018006L .reference}

Error code: 0x80018006L

## Problem {#section_um5_jvb_2y .section}

This issue occurs when you invoke a cloud device, as specified by its [session ID](../../TA_Automation/Topics/aut_appium.md#section_fhd_sp3_gy), via [use cloud device](../../TA_Automation/Topics/bia_use_cloud_device.html)/[disconnect cloud device](../../TA_Automation/Topics/bia_disconnect_cloud_device.html) actions. However, the specified session ID does not exist.

## Solution {#section_vm5_jvb_2y .section}

Double-check the session ID of the desired cloud device. You can quickly obtain the session ID of the currently-connected cloud device via the [get cloud device session ID](../../TA_Automation/Topics/bia_get_cloud_device_session_id.html) built-in action.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[The device is currently in use.](../../TA_FAQ/Topics/0x80018007L.html)

**Next topic:**[The device is already connected.](../../TA_FAQ/Topics/0x80018004L.html)

