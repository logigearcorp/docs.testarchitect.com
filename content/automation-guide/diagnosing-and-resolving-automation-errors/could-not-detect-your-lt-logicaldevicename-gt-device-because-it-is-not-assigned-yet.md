--- 
title: "Could not detect your <logicalDeviceName> device because it is not assigned yet."
linktitle: "Could not detect your <logicalDeviceName> device because it is not assigned yet."
description: "Error code: 0x80018003L Problem This issue occurs when you make a connection to the target cloud device via the connect cloud device built-in action, as specified by its logical name; however, the ..."
weight: 114
aliases: 
    - /TA_FAQ/Topics/0x80018003L.html
keywords: "automation errors, 0x80018003L"
---

Error code: 0x80018003L

## {{< expand >}} Problem {{< permerlink >}} {#reference_0x80018003L__section_um5_jvb_2y} 

This issue occurs when you make a connection to the target cloud device via the [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device) built-in action, as specified by its logical name; however, the logical name does not exist.

## {{< expand >}} Solution {{< permerlink >}} {#reference_0x80018003L__section_vm5_jvb_2y} 

Ensure that logical name of the target cloud device is specified in the [assign cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device) built-in action.




