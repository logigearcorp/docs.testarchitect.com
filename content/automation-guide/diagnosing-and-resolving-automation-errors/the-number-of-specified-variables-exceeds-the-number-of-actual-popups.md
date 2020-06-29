--- 
title: "The number of specified variables exceeds the number of actual popups."
linktitle: "The number of specified variables exceeds the number of actual popups."
description: "Error code: 0x8001000EL Problem This error occurs because the number of declared variables of popup-related built-in actions, such as, get popup message or check popup message , is more than the ..."
weight: 48
aliases: 
    - /TA_FAQ/Topics/0x8001000EL-1.html
keywords: "automation errors, 0x8001000EL"
---

Error code: 0x8001000EL

## Problem

This error occurs because the number of declared variables of popup-related built-in actions, such as, [get popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-message) or [check popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-message), is more than the actual popups appearing from the AUT.

Support that there are only three actual popups returned from the AUT; however, you declare, for example, four returned variables in the test procedure.

## Solution

Check the AUT to determine the proper number of actual popups, and fill in that number in the test procedure.




