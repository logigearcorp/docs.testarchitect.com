--- 
title: "TestArchitect could not detect the specified popup."
linktitle: "TestArchitect could not detect the specified popup."
description: "Error code: 0x80010020L Problem This error occurs because the given popup, specified in popup-related built-in actions, e.g. check popup message , does not exist from the AUT. Suppose that from the ..."
weight: 58
aliases: 
    - /TA_FAQ/Topics/0x80010020L.html
keywords: "automation errors, 0x80010020L"
---

Error code: 0x80010020L

## Problem

This error occurs because the given popup, specified in popup-related built-in actions, e.g. [check popup message](/TA_Automation/Topics/bia_check_popup_message.html), does not exist from the AUT.

Suppose that from the AUT there is only one popup, but you have TestArchitect interact with the second popup which does not exist.

## Solution

Check the availability of the desired popup from the AUT.




