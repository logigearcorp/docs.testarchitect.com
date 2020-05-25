--- 
title: "plusm\\(Julian number, number of month\\)"
linktitle: "plusm\\(Julian number, number of month\\)"
aliases: 
    - /TA_Automation/Topics/Expressions_functions_plusm.html
---
# plusm\(Julian number, number of month\) {#plusm .reference}

Add a specified number of months to a given Julian date number, then return the result as a Julian number.

## Syntax { .section}

`integer plusm(integer date, integer month)`

## Parameters { .section}

date
:   Julian date number.

month
:   Number of months to add to date. Use a negative month value to subtract months from date.

## Return Value { .section}

Returns a Julian date number computed by adding a number of months to a Julian number.

## Applicable Built-In Settings { .section}

The following built-in setting\(s\) are supported: [add month compensation](bis_add_month_compensation.html), [date order](bis_date_order.html).

## Example { .section}

![](../Images/automationguide_datefunction9.PNG)

**Parent topic:**[Date functions](../../TA_Automation/Topics/Expressions_date_functions.html)

**Previous topic:**[plusy\(Julian number, number of year\)](../../TA_Automation/Topics/Expressions_functions_plusy.html)

**Next topic:**[plusd\(Julian number, number of day\)](../../TA_Automation/Topics/Expressions_functions_plusd.html)

