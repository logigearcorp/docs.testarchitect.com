--- 
title: "TestArchitect is unable to set the *<newValue\\>* value for the given control. Please check if the *<controlName\\>* control, which resides in the *<windowName\\>* window, is disabled."
linktitle: "TestArchitect is unable to set the <newValue\\> value for the given control. Please check if the <controlName\\> control, which resides in the <windowName\\> window, is disabled."
weight: 68
aliases: 
    - /TA_FAQ/Topics/0x80010204L.html
---

Error code: 0x80010204L

## Problem

This happens because the UI-interactive built-in action is unable to work on a disabled control.

## Solution

You might try the following ways:

-   Ensure the control is not disabled.
-   Wait until the disabled control is enabled by using the [control wait](/TA_Automation/Topics/bis_control_condition.html) built-in setting.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[The <windowName\> window did not disappear within the timeout of <value\> seconds. Please adjust the timeout value.](/TA_FAQ/Topics/0x8001000CL.html)

**Next topic:**[TestArchitect is unable to click the <controlName\> from the given control. Please check if the <controlName\>, which resides in the <windowName\>, is disabled.](/TA_FAQ/Topics/0x80010204L-1.html)

