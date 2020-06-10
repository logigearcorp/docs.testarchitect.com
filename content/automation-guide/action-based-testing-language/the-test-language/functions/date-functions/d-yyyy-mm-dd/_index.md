--- 
title: "d\\(yyyy,mm,dd\\)"
linktitle: "d\\(yyyy,mm,dd\\)"
weight: 1
aliases: 
    - /TA_Automation/Topics/Expressions_functions_d.html
---

Convert a Gregorian date in numeric form to its equivalent Julian day number.

## Syntax

`integer d(integer year,integer month, integer day)`

## Parameters

-   **year**

    Four-digit year \(for example, 2013\).

-   **month**

    Two-digit month value \(from 01 to 12\).

-   **day**

    Two-digit day value \(from 01 to 31\).


## Return Value

Returns the equivalent Julian day number.

## Notes

-   The difference between the [d](/TA_Automation/Topics/Expressions_functions_d.html)\(\) and [fj](/TA_Automation/Topics/Expressions_functions_fj.html)\(\) functions is that d\(\) requires a date to be supplied as three separate parameters, in a very specific format: yyyy,mm,dd, \(such as `d( 2015, 12, 25)`\). fj\(\), by contrast, accepts a single date parameter whose format is flexible.

## Applicable Built-In Settings

The following built-in setting\(s\) are supported: [date order](/TA_Automation/Topics/bis_date_order.html).

## Example

![](/images//Images/automationguide_datefunction2.PNG)

**Parent topic:**[Date functions](/TA_Automation/Topics/Expressions_date_functions.html)

**Next topic:**[today\(\)](/TA_Automation/Topics/Expressions_functions_today.html)

