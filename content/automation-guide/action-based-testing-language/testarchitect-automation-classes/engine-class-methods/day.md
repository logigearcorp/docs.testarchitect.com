--- 
title: "Day"
linktitle: "Day"
description: "Syntax integer Day (integer datevalue) Description Get the day number (in a month) out of a date. Parameters datevalue A number representing a date. Return Value The return value is the day number in ..."
weight: 30
aliases: 
    - /TA_Automation/Topics/abtf_Day.html
keywords: "ABT Library Functions, Day, Day (ABT library function)"
---

## Syntax

`integer Day (integer datevalue)`

## Description

Get the day number \(in a month\) out of a date.

## Parameters

-   **datevalue**

    A number representing a date.


## Return Value

The return value is the day number in the range 1-31.

## Notes

-   This function is equivalent to the "day" function as it can be used by the tester in a "\#" expression.
-   See paragraph 3.1 for more information on working with dates.
-   To get a day number in a week use the WeekDay function.
-   To obtain a day number within a year use code similar to this \(where D is the date, since dates are represented as number of days we subtract the last day of the previous year\): D - Date \(Year\(D\)-1, 12, 31\)




