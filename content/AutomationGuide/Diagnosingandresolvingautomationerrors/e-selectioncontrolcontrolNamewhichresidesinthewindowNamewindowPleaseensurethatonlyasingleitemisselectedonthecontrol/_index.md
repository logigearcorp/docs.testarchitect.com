--- 
title: "TestArchitect is unable to select multiple items on a single-selection control *<controlName\\>*, which resides in the *<windowName\\>* window. Please ensure that only a single item is selected on the control."
linktitle: "TestArchitect is unable to select multiple items on a single-selection control <controlName\\>, which resides in the <windowName\\> window. Please ensure that only a single item is selected on the control."
weight: 86
aliases: 
    - /TA_FAQ/Topics/0x80010408L.html
---
# TestArchitect is unable to select multiple items on a single-selection control *<controlName\>*, which resides in the *<windowName\>* window. Please ensure that only a single item is selected on the control. {#reference_0x80010408L .reference}

Error code: 0x80010408L

## Problem { .section}

This happens because the given control is single selection, but you use a UI-interactive action to select more than one item.

## Solution { .section}

Remove the redundant items to be selected from the single selection control, and re-run the test.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[The <controlName\> list, which resides in the <windowName\> window, is empty. TestArchitect is unable to select any items in the list.](../../TA_FAQ/Topics/0x80010406L.html)

**Next topic:**[TestArchitect is unable to select the <itemValue\> item\(s\) in the <controlName\> control, which resides in the <windowName\> window.](../../TA_FAQ/Topics/0x8001042AL.html)

