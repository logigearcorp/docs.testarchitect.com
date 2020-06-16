--- 
title: "The value for argument *<argumentName\\>* might be invalid or out of range. It must be a positive integer starting from 1 or an existing column header name."
linktitle: "The value for argument <argumentName\\> might be invalid or out of range. It must be a positive integer starting from 1 or an existing column header name."
description: "Error code: 0x80016013L Problem This happens because the given picture name could not be detected during automation. Solution Firstly, review column headers of the given data set. And then in the test ..."
weight: 104
aliases: 
    - /TA_FAQ/Topics/0x80016013L.html
keywords: "automation errors, 0x80016013L"
---

Error code: 0x80016013L

## Problem

This happens because the given picture name could not be detected during automation.

## Solution

Firstly, review column headers of the given data set. And then in the test procedures, within the scope of the [use data set](/TA_Automation/Topics/bia_use_data_set.html) / [repeat for data set](/TA_Automation/Topics/bia_repeat_for_data_set.html) block, ensure that the expression with variables whose names must be equivalent to the column headers of the data set is currently being employed. Or if you specify a header column based on its index number, the index must start from 1.




