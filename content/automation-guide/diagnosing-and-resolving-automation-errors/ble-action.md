--- 
title: "TestArchitect does not support this action for the <typeName> control. Please use another applicable action."
linktitle: "TestArchitect does not support this action for the <typeName> control. Please use another applicable action."
description: "Error code: 0x80010011L Problem This happens because you use a built-in action to interact with an unsupported control. For example, use table-related built-in actions, such as, get table cell ..."
weight: 2
aliases: 
    - /TA_FAQ/Topics/0x80010011L.html
keywords: "automation errors, 0x80010011L"
---

Error code: 0x80010011L

## Problem

This happens because you use a built-in action to interact with an unsupported control. For example, use table-related built-in actions, such as, [get table cell containing](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-table-cell-containing), to access a toolbar control.

## Solution

You can try using [applicable action suggestions](/user-guide/getting-started/the-test-editor/content-assist/applicable-action-suggestions) for a window or control. Content Assist's applicable actions list provides you with a convenient means of viewing and selecting from the list of actions available for a given UI element.



