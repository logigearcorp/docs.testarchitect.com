--- 
title: "There is more than one matching UI object for *<controlName\\>*, defined by *<controlDefinition\\>*. Please check the interface definition for *<windowName\\>*."
linktitle: "There is more than one matching UI object for <controlName\\>, defined by <controlDefinition\\>. Please check the interface definition for <windowName\\>."
aliases: 
    - /TA_FAQ/Topics/0x8001000AL-1.html
---
# There is more than one matching UI object for *<controlName\>*, defined by *<controlDefinition\>*. Please check the interface definition for *<windowName\>*. {#reference_0x8001000AL .reference}

Error code: 0x8001000AL

## Problem { .section}

This happens because there is more than one UI control that matches the definition of a given interface element and is available on the AUT simultaneously.

## Solution { .section}

Check the AUT to ensure that only one control is available at a time, and then re-run the automated test.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[There is more than one matching UI object for <controlName\>. Please check the interface definition for <windowName\>](../../TA_FAQ/Topics/0x8001000AL.html)

**Next topic:**[No matching UI object found for <controlName\> within the timeout of <value\> seconds. Please check the interface definition for <controlName\>, or set a longer timeout with the "object wait" setting.](../../TA_FAQ/Topics/0x80010009L.html)

