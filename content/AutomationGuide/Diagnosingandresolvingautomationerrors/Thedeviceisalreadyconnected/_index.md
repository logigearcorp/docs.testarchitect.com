--- 
title: "The device is already connected."
linktitle: "The device is already connected."
weight: 113
aliases: 
    - /TA_FAQ/Topics/0x80018004L.html
---
# The device is already connected. {#reference_0x80018004L .reference}

Error code: 0x80018004L

## Problem {#section_um5_jvb_2y .section}

This issue happens when you invoke a specific cloud device which has been invoked to run your tests.

## Solution {#section_vm5_jvb_2y .section}

Ensure that your [use cloud device](../../TA_Automation/Topics/bia_use_cloud_device.html) action invokes a different cloud device, or simply remove that [use cloud device](../../TA_Automation/Topics/bia_use_cloud_device.html) action in the tests.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Unable to find the cloud device, as specified by its session ID.](../../TA_FAQ/Topics/0x80018006L.html)

**Next topic:**[Could not detect your <logicalDeviceName\> device because it is not assigned yet.](../../TA_FAQ/Topics/0x80018003L.html)

