--- 
title: "TestArchitect could not identify any <form\\> containing the given control."
linktitle: "TestArchitect could not identify any <form\\> containing the given control."
aliases: 
    - /TA_FAQ/Topics/0x80010021L.html
---
# TestArchitect could not identify any <form\> containing the given control. {#reference_0x80010021L .reference}

Error code: 0x80010021L

## Problem { .section}

This happens because the given HTML element, referenced by the control argument of the [submit form](../../TA_Automation/Topics/bia_submit_form.html) built-in action, is not enclosed within a <form\> element.

## Solution { .section}

Re-check to ensure the HTML elements is enclosed within a <form\> element, and re-run the test.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Invalid input value of row, column argument. Valid input should be a number greater than 0.](../../TA_FAQ/Topics/0x80016012L.html)

**Next topic:**[TestArchitect is unable to find the specified picture. Please check that the <pictureName\> picture is available in the baseline.](../../TA_FAQ/Topics/0x80010D05L.html)

