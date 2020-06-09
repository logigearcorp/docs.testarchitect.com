--- 
title: "Message *<messageText\\>* does not exist. TestArchitect could not detect the message."
linktitle: "Message <messageText\\> does not exist. TestArchitect could not detect the message."
weight: 60
aliases: 
    - /TA_FAQ/Topics/0x80010019L.html
---

Error code: 0x80010019L

## Problem

This error occurs because the default message text of prompt popups, specified in popup-related built-in actions, e.g. [check popup default text](/TA_Automation/Topics/bia_check_popup_default_text.html), does not exist. In other words, TestArchitect could not find any prompt popups from the AUT that satisfy the default message text.

## Solution

Check the correct default text from the AUT that you want TestArchitect to look for, and enter that correct text into the test procedure.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[TestArchitect could not detect the specified prompt popup.](/TA_FAQ/Topics/0x80010020L-1.html)

**Next topic:**[Message <messageText\> does not exist on any prompt popup. TestArchitect could not detect the message.](/TA_FAQ/Topics/0x80010019L-1.html)

