--- 
title: "d(yyyy,mm,dd)"
linktitle: "d(yyyy,mm,dd)"
description: "Convert a Gregorian date in numeric form to its equivalent Julian day number."
weight: 1
aliases: 
    - /TA_Automation/Topics/Expressions_functions_d.html
keywords: "date functions, d(yyyy,mm,dd), d(yyyy,mm,dd) (function)"
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

-   The difference between the [d](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/d-yyyy-mm-dd)\(\) and [fj](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/fj-date)\(\) functions is that d\(\) requires a date to be supplied as three separate parameters, in a very specific format: yyyy,mm,dd, \(such as `d( 2015, 12, 25)`\). fj\(\), by contrast, accepts a single date parameter whose format is flexible.

## Applicable Built-In Settings

The following built-in setting\(s\) are supported: [date order](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-order).

## Example

![](/images/TA_Automation/Images/automationguide_datefunction2.png)



