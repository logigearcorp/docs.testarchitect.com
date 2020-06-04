--- 
title: "TestArchitect could not detect the specified prompt popup."
linktitle: "TestArchitect could not detect the specified prompt popup."
weight: 59
aliases: 
    - /TA_FAQ/Topics/0x80010020L-1.html
---

Error code: 0x80010020L

## Problem

This error occurs because the given prompt popup, specified in popup-related built-in actions, e.g. [check popup default text](/TA_Automation/Topics/bia_check_popup_default_text.html), does not exist from the AUT.

Suppose that from the AUT there is only one prompt popup, but you have TestArchitect interact with the second prompt popup which does not exist.

## Solution

Check the availability of the desired prompt popup from the AUT.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[TestArchitect could not detect the specified popup.](/TA_FAQ/Topics/0x80010020L.html)

**Next topic:**[Message <messageText\> does not exist. TestArchitect could not detect the message.](/TA_FAQ/Topics/0x80010019L.html)

