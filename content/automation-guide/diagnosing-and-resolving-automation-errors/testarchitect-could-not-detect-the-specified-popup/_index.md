--- 
title: "TestArchitect could not detect the specified popup."
linktitle: "TestArchitect could not detect the specified popup."
weight: 58
aliases: 
    - /TA_FAQ/Topics/0x80010020L.html
---

Error code: 0x80010020L

## Problem

This error occurs because the given popup, specified in popup-related built-in actions, e.g. [check popup message](/TA_Automation/Topics/bia_check_popup_message.html), does not exist from the AUT.

Suppose that from the AUT there is only one popup, but you have TestArchitect interact with the second popup which does not exist.

## Solution

Check the availability of the desired popup from the AUT.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[TestArchitect is unable to retrieve the <itemValue\> item text in the <controlName\> control, which resides in the <windowName\> window.](/TA_FAQ/Topics/0x80010401L.html)

**Next topic:**[TestArchitect could not detect the specified prompt popup.](/TA_FAQ/Topics/0x80010020L-1.html)

