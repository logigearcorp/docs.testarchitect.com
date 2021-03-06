--- 
title: "There is more than one matching UI object for *<controlName\\>*. Please check the interface definition for *<windowName\\>*"
linktitle: "There is more than one matching UI object for <controlName\\>. Please check the interface definition for <windowName\\>"
weight: 14
aliases: 
    - /TA_FAQ/Topics/0x8001000AL.html
---

Error code: 0x8001000AL

## Problem

This happens because there is more than one UI control that matches the definition of a given interface element and is available on the AUT simultaneously.

## Solution

Check the AUT to ensure that only one control is available at a time, and then re-run the automated test.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Argument header\(s\) <headerName\> is invalid. Please look up or retype the action to determine the correct header name\(s\).](/TA_FAQ/Topics/0x80010016L.html)

**Next topic:**[There is more than one matching UI object for <controlName\>, defined by <controlDefinition\>. Please check the interface definition for <windowName\>.](/TA_FAQ/Topics/0x8001000AL-1.html)

