--- 
title: "There is more than one matching UI object for <controlName>. Please check the interface definition for <windowName>"
linktitle: "There is more than one matching UI object for <controlName>. Please check the interface definition for <windowName>"
description: "Error code: 0x8001000AL Problem This happens because there is more than one UI control that matches the definition of a given interface element and is available on the AUT simultaneously. Solution ..."
weight: 14
aliases: 
    - /TA_FAQ/Topics/0x8001000AL.html
keywords: "automation errors, 0x8001000AL"
---

Error code: 0x8001000AL

## Problem

This happens because there is more than one UI control that matches the definition of a given interface element and is available on the AUT simultaneously.

## Solution

Check the AUT to ensure that only one control is available at a time, and then re-run the automated test.



