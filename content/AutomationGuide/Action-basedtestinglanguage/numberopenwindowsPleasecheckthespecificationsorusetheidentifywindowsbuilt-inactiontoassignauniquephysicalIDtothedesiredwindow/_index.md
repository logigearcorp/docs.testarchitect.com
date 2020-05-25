--- 
title: "The specifications for interface entity *<windowName\\>* match *<number\\>* open windows. Please check the specifications, or use the 'identify windows' built-in action to assign a unique physical ID to the desired window."
linktitle: "The specifications for interface entity <windowName\\> match <number\\> open windows. Please check the specifications, or use the 'identify windows' built-in action to assign a unique physical ID to the desired window."
aliases: 
    - /TA_FAQ/Topics/0x80010005L.html
---
# The specifications for interface entity *<windowName\>* match *<number\>* open windows. Please check the specifications, or use the 'identify windows' built-in action to assign a unique physical ID to the desired window. {#reference_0x80010005L .reference}

Error code: 0x80010005L

## Problem { .section}

This happens because there is more than one window that matches the definition of a given interface entity. And it is open simultaneously.

## Solution { .section}

Ensure that only one window is open at a time, and then re-run the automated test.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[No window found matching <windowName\>, defined by <windowDefinition\>, within the timeout of <value\> seconds. Please check the interface definition for <windowName\>, or set a longer timeout with the "window wait" setting.](../../TA_FAQ/Topics/0x80010004L-1.html)

**Next topic:**[The specifications for interface entity <windowName\>, defined by <windowDefinition\>, match <number\> open windows. Please check the specifications, or use the 'identify windows' built-in action to assign a unique physical ID to the desired window.](../../TA_FAQ/Topics/0x80010005L-1.html)

