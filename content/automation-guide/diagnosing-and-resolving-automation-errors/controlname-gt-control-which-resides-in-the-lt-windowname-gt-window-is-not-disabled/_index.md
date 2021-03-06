--- 
title: "TestArchitect is unable to select the specified item. Please check the *<itemName\\>* item in the *<controlName\\>* control, which resides in the *<windowName\\>* window, is not disabled."
linktitle: "TestArchitect is unable to select the specified item. Please check the <itemName\\> item in the <controlName\\> control, which resides in the <windowName\\> window, is not disabled."
weight: 93
aliases: 
    - /TA_FAQ/Topics/0x80010409L.html
---

Error code: 0x80010409L

## Problem

This happens because the UI-interactive built-in action is unable to work on a disabled item.

## Solution

Check the AUT to ensure that the item is not disabled, and then re-run the test.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[TestArchitect is unable to retrieve status of the <itemName\> item in the <controlName\> control, which resides in the <windowName\> window.](/TA_FAQ/Topics/0x80010403L.html)

**Next topic:**[TestArchitect is unable to select the <itemName\> item in the <controlName\> control, which resides in the <windowName\> window.](/TA_FAQ/Topics/0x80010405L.html)

