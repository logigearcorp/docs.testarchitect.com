--- 
title: "ParseDate"
linktitle: "ParseDate"
weight: 63
aliases: 
    - /TA_Automation/Topics/abtf_ParseDate.html
---

## Syntax

`integer ParseDate (string datestring)`

## Description

Parse \(recognize\) a date and convert it to a number.

## Parameters

-   **datestring**

    The date to be parsed.


## Return Value

The return value is a number representing the date. If the date can't be formatted a diagnostic is issued and the return value is 0.

## Notes

-   This function uses the 3 character "date order" setting to specify the order, for example " mdy " means first month, then day, then year. It accepts a wide variety of formats.
-   This function is equivalent to the "id" function as it can be used by the tester in a "\#" expression.
-   If the year number is less than 100, it is interpreted to be either in the 1900's or the 2000's. The "break year" setting \(default value 30\) is used to decide in which century the year falls: if the year number is larger than 30 it is assumed to be in the 1900's, otherwise in the 2000's.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[OpenLog](/TA_Automation/Topics/abtf_OpenLog.html)

**Next topic:**[PrintReport](/TA_Automation/Topics/abtf_PrintReport.html)

