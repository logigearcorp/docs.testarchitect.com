--- 
title: "Could not detect your <logicalDeviceName\\> device because it is not assigned yet."
linktitle: "Could not detect your *<logicalDeviceName\\>* device because it is not assigned yet."
description: "Error code: 0x80018003L Problem This issue occurs when you make a connection to the target cloud device via the connect cloud device built-in action, as specified by its logical name; however, the ..."
weight: 114
aliases: 
    - /TA_FAQ/Topics/0x80018003L.html
keywords: "automation errors, 0x80018003L"
---

Error code: 0x80018003L

## Problem

This issue occurs when you make a connection to the target cloud device via the [connect cloud device](/TA_Automation/Topics/bia_connect_cloud_device.html) built-in action, as specified by its logical name; however, the logical name does not exist.

## Solution

Ensure that logical name of the target cloud device is specified in the [assign cloud device](/TA_Automation/Topics/bia_assign_cloud_device.html) built-in action.




