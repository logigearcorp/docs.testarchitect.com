--- 
title: "Could not detect your *<logicalDeviceName\\>* device because it is not assigned yet."
linktitle: "Could not detect your <logicalDeviceName\\> device because it is not assigned yet."
weight: 114
aliases: 
    - /TA_FAQ/Topics/0x80018003L.html
---

Error code: 0x80018003L

## Problem

This issue occurs when you make a connection to the target cloud device via the [connect cloud device](/TA_Automation/Topics/bia_connect_cloud_device.html) built-in action, as specified by its logical name; however, the logical name does not exist.

## Solution

Ensure that logical name of the target cloud device is specified in the [assign cloud device](/TA_Automation/Topics/bia_assign_cloud_device.html) built-in action.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[The device is already connected.](/TA_FAQ/Topics/0x80018004L.html)

**Next topic:**[The specified capability is not a valid JSON. Please ensure that the valid JSON format is provided.](/TA_FAQ/Topics/0x80018002L.html)

