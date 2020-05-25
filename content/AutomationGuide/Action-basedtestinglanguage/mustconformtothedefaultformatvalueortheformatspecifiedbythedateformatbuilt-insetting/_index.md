--- 
title: "Invalid value for argument *<argumentName\\>*. Valid input data must conform to the default format *<value\\>*, or the format specified by the 'date format' built-in setting."
linktitle: "Invalid value for argument <argumentName\\>. Valid input data must conform to the default format <value\\>, or the format specified by the 'date format' built-in setting."
aliases: 
    - /TA_FAQ/Topics/0x8001000EL-4.html
---
# Invalid value for argument *<argumentName\>*. Valid input data must conform to the default format *<value\>*, or the format specified by the 'date format' built-in setting. {#reference_0x8001000EL-4 .reference}

Error code: 0x8001000EL

## Problem {#section_prob .section}

This happens because the specified argument value for date picker controls does not conform to the date format specified by the [date format](../../TA_Automation/Topics/bis_date_format.html) built-in setting.

## Solution {#section_sol .section}

Check the current date format of setting [date format](../../TA_Automation/Topics/bis_date_format.html), and use an valid date value that conforms to the format.

For example: Given a date format setting of `yyyy-mm-dd`, the correct value for Christmas 2016 is 2016-12-25.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Argument header <headerName\> is invalid. Please look up or retype the action to determine the correct header name\(s\).](../../TA_FAQ/Topics/0x8001000EL-3.html)

**Next topic:**[Invalid value for argument <argumentName\>. Valid input data is a Boolean value, e.g. on/off.](../../TA_FAQ/Topics/0x8001000EL-5.html)

