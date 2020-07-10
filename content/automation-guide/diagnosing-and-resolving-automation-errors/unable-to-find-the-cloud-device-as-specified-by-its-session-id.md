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

## {{< expand >}} Problem {{< permerlink >}} {#reference_0x80018006L__section_um5_jvb_2y} 

This issue occurs when you invoke a cloud device, as specified by its [session ID](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-appium/#section_fhd_sp3_gy), via [use cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-cloud-device)/[disconnect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-cloud-device) actions. However, the specified session ID does not exist.

## {{< expand >}} Solution {{< permerlink >}} {#reference_0x80018006L__section_vm5_jvb_2y} 

Double-check the session ID of the desired cloud device. You can quickly obtain the session ID of the currently-connected cloud device via the [get cloud device session ID](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/get-cloud-device-session-id) built-in action.




