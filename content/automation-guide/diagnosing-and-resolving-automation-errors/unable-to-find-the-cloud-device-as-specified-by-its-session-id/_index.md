--- 
title: "Unable to find the cloud device, as specified by its session ID."
linktitle: "Unable to find the cloud device, as specified by its session ID."
description: "Error code: 0x80018006L Problem This issue occurs when you invoke a cloud device, as specified by its session ID , via use cloud device / disconnect cloud device actions. However, the specified ..."
weight: 112
aliases: 
    - /TA_FAQ/Topics/0x80018006L.html
keywords: "automation errors, 0x80018006L"
---

Error code: 0x80018006L

## Problem

This issue occurs when you invoke a cloud device, as specified by its [session ID](/TA_Automation/Topics/aut_appium.html#section_fhd_sp3_gy), via [use cloud device](/TA_Automation/Topics/bia_use_cloud_device.html)/[disconnect cloud device](/TA_Automation/Topics/bia_disconnect_cloud_device.html) actions. However, the specified session ID does not exist.

## Solution

Double-check the session ID of the desired cloud device. You can quickly obtain the session ID of the currently-connected cloud device via the [get cloud device session ID](/TA_Automation/Topics/bia_get_cloud_device_session_id.html) built-in action.




