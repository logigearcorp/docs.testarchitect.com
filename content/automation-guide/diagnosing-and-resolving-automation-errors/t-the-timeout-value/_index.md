--- 
title: "The *<windowName\\>* window did not disappear within the timeout of *<value\\>* seconds. Please adjust the timeout value."
linktitle: "The <windowName\\> window did not disappear within the timeout of <value\\> seconds. Please adjust the timeout value."
weight: 67
aliases: 
    - /TA_FAQ/Topics/0x8001000CL.html
---

Error code: 0x8001000CL

## Problem

This issue occurs when a given window is not absent before the specified maximum wait time, specified in the [wait for window close](/TA_Automation/Topics/bia_wait_for_window_close.html) built-in action.

## Solution

Try setting a longer value for the time out argument, and then re-run the test.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[TestArchitect is unable to retrieve status of the <path\> tree node in the <controlName\> control, which resides in the <windowName\> window.](/TA_FAQ/Topics/0x80010302L.html)

**Next topic:**[TestArchitect is unable to set the <newValue\> value for the given control. Please check if the <controlName\> control, which resides in the <windowName\> window, is disabled.](/TA_FAQ/Topics/0x80010204L.html)

