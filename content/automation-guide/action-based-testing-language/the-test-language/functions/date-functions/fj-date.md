--- 
title: "fj\\(date\\)"
linktitle: "fj\\(date\\)"
description: "Convert a specific Gregorian date to its equivalent Julian day number."
weight: 3
aliases: 
    - /TA_Automation/Topics/Expressions_functions_fj.html
keywords: "date functions, fj, fj (function)"
---

Convert a specific Gregorian date to its equivalent Julian day number. The Gregorian date order format is specified by the [date order](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-order) built-in setting.

## Syntax

`integer fj(date)`

## Parameters

-   **date**

    A Gregorian date. Format is specified by the built-in setting [date order](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-order).


## Return Value

Returns the equivalent Julian day number.

## Notes

-   The difference between the [d](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/d-yyyy-mm-dd)\(\) and [fj](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/fj-date)\(\) functions is that d\(\) requires a date to be supplied as three separate parameters, in a very specific format: yyyy,mm,dd, \(such as `d( 2015, 12, 25)`\). fj\(\), by contrast, accepts a single date parameter whose format is flexible.
-   fj\(\) uses the built-in setting date order, which uses 3 letters, m, d, and y, to determine the order in which the function expects the month, day and year to be present.
-   fj\(\) does not use the built-in setting date format. Instead, fj\(\) is inherently flexible in the date formats it accepts.

    Recognizable formats:

    -   **yyyy**

        Four-digit year \(e.g. 2005\).

    -   **yy**

        Two-digit year \(e.g. 05\).

    -   **mmmm**

        Long month name. All letters are lowercase \(e.g. september\).

    -   **Mmmm**

        Long month name. Only the first letter is uppercase \(e.g. September\).

    -   **MMMM**

        Long month name. All letters are uppercase \(e.g. SEPTEMBER\).

    -   **mmm**

        Short month name. All letters are lowercase \(e.g. sep\).

    -   **Mmm**

        Short month name. Only the first letter is uppercase \(e.g. Sep\).

    -   **MMM**

        Short month name. All letters are uppercase \(e.g. SEP\).

    -   **mm**

        Month number. Prepend a leading zero to month if the month is less than 10 \(e.g. 09\).

    -   **m**

        Month number. Do not prepend a leading zero to month \(e.g. 9\).

    -   **dddd**

        Long day name. All letters are lowercase \(e.g. wednesday\).

    -   **Dddd**

        Long day name. Only the first letter is uppercase \(e.g. Wednesday\).

    -   **DDDD**

        Long day name. All letters are uppercase \(e.g. WEDNESDAY\).

    -   **ddd**

        Short day name. All letters are lowercase \(e.g. wed\).

    -   **Ddd**

        Short day name. Only the first letter is uppercase \(e.g. Wed\).

    -   **DDD**

        Short day name. All letters are uppercase \(WED\).

    -   **dd**

        Two-digit day \(e.g. 04\).

    -   **d**

        One-digit day for days below 10 \(e.g. 4\).

    -   ****

## Applicable Built-In Settings

The following built-in setting\(s\) are supported: [date order](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-order).

## Example

![](/images/TA_Automation/Images/automationguide_datefunction13.PNG)




