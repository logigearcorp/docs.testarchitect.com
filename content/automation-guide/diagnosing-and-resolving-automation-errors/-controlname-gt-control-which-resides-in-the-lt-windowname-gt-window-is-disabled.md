--- 
title: "TestArchitect is unable to set the <newValue> value for the given control. Please check if the <controlName> control, which resides in the <windowName> window, is disabled."
linktitle: "TestArchitect is unable to set the <newValue> value for the given control. Please check if the <controlName> control, which resides in the <windowName> window, is disabled."
description: "Error code: 0x80010204L Problem This happens because the UI-interactive built-in action is unable to work on a disabled control. Solution You might try the following ways: Ensure the control is not ..."
weight: 68
aliases: 
    - /TA_FAQ/Topics/0x80010204L.html
keywords: "automation errors, 0x80010204L"
---

Error code: 0x80010204L

## {{< expand >}} Problem

This happens because the UI-interactive built-in action is unable to work on a disabled control.

## {{< expand >}} Solution

You might try the following ways:

-   Ensure the control is not disabled.
-   Wait until the disabled control is enabled by using the [control wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition) built-in setting.




