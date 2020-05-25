--- 
title: "Day"
linktitle: "Day"
aliases: 
    - /TA_Automation/Topics/abtf_Day.html
---
# Day {#abtf_Day .reference}

## Syntax

`integer Day (integer datevalue)`

## Description { .section}

Get the day number \(in a month\) out of a date.

## Parameters { .section}

datevalue
:   A number representing a date.

## Return Value { .section}

The return value is the day number in the range 1-31.

## Notes { .section}

-   This function is equivalent to the "day" function as it can be used by the tester in a "\#" expression.
-   See paragraph 3.1 for more information on working with dates.
-   To get a day number in a week use the WeekDay function.
-   To obtain a day number within a year use code similar to this \(where D is the date, since dates are represented as number of days we subtract the last day of the previous year\): D - Date \(Year\(D\)-1, 12, 31\)

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Date](../../TA_Automation/Topics/abtf_Date.html)

**Next topic:**[DiagnosticCode](../../TA_Automation/Topics/abtf_DiagnosticCode.html)

