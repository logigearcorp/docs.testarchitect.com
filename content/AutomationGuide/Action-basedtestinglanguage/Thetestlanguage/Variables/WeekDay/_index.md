--- 
title: "WeekDay"
linktitle: "WeekDay"
aliases: 
    - /TA_Automation/Topics/abtf_WeekDay.html
---
# WeekDay {#abtf_WeekDay .reference}

## Syntax

`integer WeekDay (integer datevalue )`

## Description { .section}

Get the weekday number.

## Parameters { .section}

datevalue
:   A number representing a date.

## Return Value { .section}

The return value is the day number in the range 1-7 \(Sunday is 1, Saturday is 7\).

## Notes { .section}

-   This function is equivalent to the "weekday" function as it can be used by the tester in a "\#" expression.
-   To get a day number in a month use the Day function.
-   To get a text representation use the FormatDate function \(with a "date format" setting like " ddd " or " dddd "\).

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Version](../../TA_Automation/Topics/abtf_Version.html)

**Next topic:**[Year](../../TA_Automation/Topics/abtf_Year.html)

