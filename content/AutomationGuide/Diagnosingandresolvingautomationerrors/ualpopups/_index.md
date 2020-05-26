--- 
title: "The number of specified variables exceeds the number of actual popups."
linktitle: "The number of specified variables exceeds the number of actual popups."
weight: 48
aliases: 
    - /TA_FAQ/Topics/0x8001000EL-1.html
---
# The number of specified variables exceeds the number of actual popups. {#reference_0x8001000EL-1 .reference}

Error code: 0x8001000EL

## Problem { .section}

This error occurs because the number of declared variables of popup-related built-in actions, such as, [get popup message](../../TA_Automation/Topics/bia_get_popup_message.html) or [check popup message](../../TA_Automation/Topics/bia_check_popup_message.html), is more than the actual popups appearing from the AUT.

Support that there are only three actual popups returned from the AUT; however, you declare, for example, four returned variables in the test procedure.

## Solution { .section}

Check the AUT to determine the proper number of actual popups, and fill in that number in the test procedure.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Invalid value for argument <argumentNalue\>. Please input valid data.](../../TA_FAQ/Topics/0x8001000EL.html)

**Next topic:**[Argument header <headerName\> is either missing or in incorrect column. Please look up or retype the action to determine the correct position.](../../TA_FAQ/Topics/0x8001000EL-2.html)

