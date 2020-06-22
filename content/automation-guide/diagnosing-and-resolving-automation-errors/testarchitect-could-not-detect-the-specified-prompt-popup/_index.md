--- 
title: "TestArchitect could not detect the specified prompt popup."
linktitle: "TestArchitect could not detect the specified prompt popup."
description: "Error code: 0x80010020L Problem This error occurs because the given prompt popup, specified in popup-related built-in actions, e.g. check popup default text , does not exist from the AUT. Suppose that ..."
weight: 59
aliases: 
    - /TA_FAQ/Topics/0x80010020L-1.html
keywords: "automation errors, 0x80010020L"
---

Error code: 0x80010020L

## Problem

This error occurs because the given prompt popup, specified in popup-related built-in actions, e.g. [check popup default text](/TA_Automation/Topics/bia_check_popup_default_text.html), does not exist from the AUT.

Suppose that from the AUT there is only one prompt popup, but you have TestArchitect interact with the second prompt popup which does not exist.

## Solution

Check the availability of the desired prompt popup from the AUT.




