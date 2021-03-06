--- 
title: "TestArchitect is unable to set the <newValue\\> value for the given control. Please check the *<controlName\\>* control, which resides in the *<windowName\\>* window, is editable."
linktitle: "TestArchitect is unable to set the <newValue\\> value for the given control. Please check the <controlName\\> control, which resides in the <windowName\\> window, is editable."
weight: 73
aliases: 
    - /TA_FAQ/Topics/0x80010207L.html
---

Error code: 0x80010207L

## Problem

This happens because the UI-interactive built-in action is unable to set a new value on a uneditable control.

## Solution

You might try the following ways:

-   Ensure the control is editable.
-   Wait until the uneditable control is editable by using the [control wait](/TA_Automation/Topics/bis_control_condition.html) built-in setting.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Some elements do not meet the requirements for obtaining the encrypted password. The value of 'value' argument that you entered was used as an actual unencrypted password.](/TA_FAQ/Topics/0x80010012L.html)

**Next topic:**[TestArchitect is unable to set focus on the <controlName\> control of type <TAClass\>, which resides in the <windowName\> window. Please manually check whether the control accepts focus.](/TA_FAQ/Topics/0x80010206L.html)

