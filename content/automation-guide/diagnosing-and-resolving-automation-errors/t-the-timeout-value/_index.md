--- 
title: "The *<windowName\\>* window did not disappear within the timeout of *<value\\>* seconds. Please adjust the timeout value."
linktitle: "The <windowName\\> window did not disappear within the timeout of <value\\> seconds. Please adjust the timeout value."
description: "Error code: 0x8001000CL Problem This issue occurs when a given window is not absent before the specified maximum wait time, specified in the wait for window close built-in action. Solution Try setting ..."
weight: 67
aliases: 
    - /TA_FAQ/Topics/0x8001000CL.html
keywords: "automation errors, 0x8001000CL"
---

Error code: 0x8001000CL

## Problem

This issue occurs when a given window is not absent before the specified maximum wait time, specified in the [wait for window close](/TA_Automation/Topics/bia_wait_for_window_close.html) built-in action.

## Solution

Try setting a longer value for the time out argument, and then re-run the test.




