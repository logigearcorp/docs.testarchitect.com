--- 
title: "TestArchitect is unable to set focus on the *<controlName\\>* control of type *<TAClass\\>*, which resides in the *<windowName\\>* window. Please manually check whether the control accepts focus."
linktitle: "TestArchitect is unable to set focus on the *<controlName\\>* control of type *<TAClass\\>*, which resides in the *<windowName\\>* window. Please manually check whether the control accepts focus."
description: "Error code: 0x80010206L Problem This happens because the focus control built-in action is unable to put the focus on the specified control. Solution Check the control of the AUT to ensure whether the ..."
weight: 74
aliases: 
    - /TA_FAQ/Topics/0x80010206L.html
keywords: "automation errors, 0x80010206L"
---

Error code: 0x80010206L

## Problem

This happens because the [focus control](/TA_Automation/Topics/bia_focus_control.html) built-in action is unable to put the focus on the specified control.

## Solution

Check the control of the AUT to ensure whether the control can get the focus, and re-run the test.




