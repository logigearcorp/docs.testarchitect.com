--- 
title: "Invalid value for argument <argumentName\\>. Valid input data must conform to the default format <value\\>, or the format specified by the 'date format' built-in setting."
linktitle: "Invalid value for argument *<argumentName\\>*. Valid input data must conform to the default format *<value\\>*, or the format specified by the 'date format' built-in setting."
description: "Error code: 0x8001000EL Problem This happens because the specified argument value for date picker controls does not conform to the date format specified by the date format built-in setting. Solution ..."
weight: 51
aliases: 
    - /TA_FAQ/Topics/0x8001000EL-4.html
keywords: "automation errors, 0x8001000EL"
---

Error code: 0x8001000EL

## Problem

This happens because the specified argument value for date picker controls does not conform to the date format specified by the [date format](/TA_Automation/Topics/bis_date_format.html) built-in setting.

## Solution

Check the current date format of setting [date format](/TA_Automation/Topics/bis_date_format.html), and use an valid date value that conforms to the format.

For example: Given a date format setting of `yyyy-mm-dd`, the correct value for Christmas 2016 is 2016-12-25.




