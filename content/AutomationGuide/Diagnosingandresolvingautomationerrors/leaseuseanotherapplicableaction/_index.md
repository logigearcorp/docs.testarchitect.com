--- 
title: "Action *<actionName\\>* only supports testing on web browsers. Please use another applicable action."
linktitle: "Action <actionName\\> only supports testing on web browsers. Please use another applicable action."
weight: 83
aliases: 
    - /TA_FAQ/Topics/0x8001600CL.html
---
# Action *<actionName\>* only supports testing on web browsers. Please use another applicable action. {#reference_0x8001600CL .reference}

Error code: 0x8001600CL

## Problem { .section}

This happens because the given built-in actions is executed on a non-web browser platform.

## Solution { .section}

Use this action on web browser only. You can first apply the [use browser](../../TA_Automation/Topics/bis_use_browser.html) built-in action to select the default web browser, and then [navigate](../../TA_Automation/Topics/bia_navigate.html) to the specified web page.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[TestArchitect is unable to retrieve state of the <path\> tree node in the <controlName\> control, which resides in the <windowName\> window.](../../TA_FAQ/Topics/0x80010301L.html)

**Next topic:**[This setting does not support the <browserType\> browser. Please use the "use browser" setting to set Chrome as the default browser.](../../TA_FAQ/Topics/0x8001600DL.html)

