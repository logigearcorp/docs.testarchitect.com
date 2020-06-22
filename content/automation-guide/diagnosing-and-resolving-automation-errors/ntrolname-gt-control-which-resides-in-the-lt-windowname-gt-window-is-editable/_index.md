--- 
title: "TestArchitect is unable to set the <newValue\\> value for the given control. Please check the *<controlName\\>* control, which resides in the *<windowName\\>* window, is editable."
linktitle: "TestArchitect is unable to set the <newValue\\> value for the given control. Please check the *<controlName\\>* control, which resides in the *<windowName\\>* window, is editable."
description: "Error code: 0x80010207L Problem This happens because the UI-interactive built-in action is unable to set a new value on a uneditable control. Solution You might try the following ways: Ensure the ..."
weight: 73
aliases: 
    - /TA_FAQ/Topics/0x80010207L.html
keywords: "automation errors, 0x80010207L"
---

Error code: 0x80010207L

## Problem

This happens because the UI-interactive built-in action is unable to set a new value on a uneditable control.

## Solution

You might try the following ways:

-   Ensure the control is editable.
-   Wait until the uneditable control is editable by using the [control wait](/TA_Automation/Topics/bis_control_condition.html) built-in setting.




