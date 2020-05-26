--- 
title: "d\\(yyyy,mm,dd\\)"
linktitle: "d\\(yyyy,mm,dd\\)"
weight: 1
aliases: 
    - /TA_Automation/Topics/Expressions_functions_d.html
---
# d\(yyyy,mm,dd\) {#d-yyyy-mm-dd .reference}

Convert a Gregorian date in numeric form to its equivalent Julian day number.

## Syntax { .section}

`integer d(integer year,integer month, integer day)`

## Parameters { .section}

year
:   Four-digit year \(for example, 2013\).

month
:   Two-digit month value \(from 01 to 12\).

day
:   Two-digit day value \(from 01 to 31\).

## Return Value { .section}

Returns the equivalent Julian day number.

## Notes { .section}

-   The difference between the [d](Expressions_functions_d.html)\(\) and [fj](Expressions_functions_fj.html)\(\) functions is that d\(\) requires a date to be supplied as three separate parameters, in a very specific format: yyyy,mm,dd, \(such as `d( 2015, 12, 25)`\). fj\(\), by contrast, accepts a single date parameter whose format is flexible.

## Applicable Built-In Settings { .section}

The following built-in setting\(s\) are supported: [date order](bis_date_order.html).

## Example { .section}

![](../Images/automationguide_datefunction2.PNG)

**Parent topic:**[Date functions](../../TA_Automation/Topics/Expressions_date_functions.html)

**Next topic:**[today\(\)](../../TA_Automation/Topics/Expressions_functions_today.html)

