--- 
title: "TestArchitect is unable to set focus on the *<controlName\\>* control of type *<TAClass\\>*, which resides in the *<windowName\\>* window. Please manually check whether the control accepts focus."
linktitle: "TestArchitect is unable to set focus on the <controlName\\> control of type <TAClass\\>, which resides in the <windowName\\> window. Please manually check whether the control accepts focus."
aliases: 
    - /TA_FAQ/Topics/0x80010206L.html
---
# TestArchitect is unable to set focus on the *<controlName\>* control of type *<TAClass\>*, which resides in the *<windowName\>* window. Please manually check whether the control accepts focus. {#reference_0x80010206L .reference}

Error code: 0x80010206L

## Problem { .section}

This happens because the [focus control](../../TA_Automation/Topics/bia_focus_control.html) built-in action is unable to put the focus on the specified control.

## Solution { .section}

Check the control of the AUT to ensure whether the control can get the focus, and re-run the test.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[TestArchitect is unable to set the <newValue\> value for the given control. Please check the <controlName\> control, which resides in the <windowName\> window, is editable.](../../TA_FAQ/Topics/0x80010207L.html)

**Next topic:**[Variable names must not start with a number, please choose a different one.](../../TA_FAQ/Topics/0x80016000L.html)

