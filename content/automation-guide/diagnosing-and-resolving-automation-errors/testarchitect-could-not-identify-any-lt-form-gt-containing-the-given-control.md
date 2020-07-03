--- 
title: "TestArchitect could not identify any <form> containing the given control."
linktitle: "TestArchitect could not identify any <form> containing the given control."
description: "Error code: 0x80010021L Problem This happens because the given HTML element, referenced by the control argument of the submit form built-in action, is not enclosed within a &lt;form&gt; element. Solution ..."
weight: 101
aliases: 
    - /TA_FAQ/Topics/0x80010021L.html
keywords: "automation errors, 0x80010021L"
---

Error code: 0x80010021L

## Problem

This happens because the given HTML element, referenced by the control argument of the [submit form](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/submit-form) built-in action, is not enclosed within a <form\> element.

## Solution

Re-check to ensure the HTML elements is enclosed within a <form\> element, and re-run the test.




