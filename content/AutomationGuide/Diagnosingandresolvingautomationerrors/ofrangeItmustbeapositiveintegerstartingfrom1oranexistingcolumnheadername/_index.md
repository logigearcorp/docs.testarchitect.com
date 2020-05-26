--- 
title: "The value for argument *<argumentName\\>* might be invalid or out of range. It must be a positive integer starting from 1 or an existing column header name."
linktitle: "The value for argument <argumentName\\> might be invalid or out of range. It must be a positive integer starting from 1 or an existing column header name."
weight: 104
aliases: 
    - /TA_FAQ/Topics/0x80016013L.html
---
# The value for argument *<argumentName\>* might be invalid or out of range. It must be a positive integer starting from 1 or an existing column header name. {#reference_0x80016013L .reference}

Error code: 0x80016013L

## Problem {#section_um5_jvb_2y .section}

This happens because the given picture name could not be detected during automation.

## Solution {#section_vm5_jvb_2y .section}

Firstly, review column headers of the given data set. And then in the test procedures, within the scope of the [use data set](../../TA_Automation/Topics/bia_use_data_set.html) / [repeat for data set](../../TA_Automation/Topics/bia_repeat_for_data_set.html) block, ensure that the expression with variables whose names must be equivalent to the column headers of the data set is currently being employed. Or if you specify a header column based on its index number, the index must start from 1.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[The argument 'picture' cannot be empty. Please input valid data.](../../TA_FAQ/Topics/0x80010D06L.html)

**Next topic:**[No HTTP request found. Please declare a 'create http request' built-in action to instantiate a new HTTP request before using this action.](../../TA_FAQ/Topics/0x80017001L.html)

