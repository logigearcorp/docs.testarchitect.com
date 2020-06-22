--- 
title: "The device is already connected."
linktitle: "The device is already connected."
description: "Error code: 0x80018004L Problem This issue happens when you invoke a specific cloud device which has been invoked to run your tests. Solution Ensure that your use cloud device action invokes a ..."
weight: 113
aliases: 
    - /TA_FAQ/Topics/0x80018004L.html
keywords: "automation errors, 0x80018004L"
---

Error code: 0x80018004L

## Problem

This issue happens when you invoke a specific cloud device which has been invoked to run your tests.

## Solution

Ensure that your [use cloud device](/TA_Automation/Topics/bia_use_cloud_device.html) action invokes a different cloud device, or simply remove that [use cloud device](/TA_Automation/Topics/bia_use_cloud_device.html) action in the tests.




