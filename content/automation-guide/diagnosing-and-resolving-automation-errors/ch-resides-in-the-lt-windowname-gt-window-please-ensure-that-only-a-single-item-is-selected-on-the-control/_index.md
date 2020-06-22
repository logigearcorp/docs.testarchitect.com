--- 
title: "TestArchitect is unable to select multiple items on a single-selection control *<controlName\\>*, which resides in the *<windowName\\>* window. Please ensure that only a single item is selected on the control."
linktitle: "TestArchitect is unable to select multiple items on a single-selection control *<controlName\\>*, which resides in the *<windowName\\>* window. Please ensure that only a single item is selected on the control."
description: "Error code: 0x80010408L Problem This happens because the given control is single selection, but you use a UI-interactive action to select more than one item. Solution Remove the redundant items to be ..."
weight: 86
aliases: 
    - /TA_FAQ/Topics/0x80010408L.html
keywords: "automation errors, 0x80010408L"
---

Error code: 0x80010408L

## Problem

This happens because the given control is single selection, but you use a UI-interactive action to select more than one item.

## Solution

Remove the redundant items to be selected from the single selection control, and re-run the test.




