--- 
title: "FormatDate"
linktitle: "FormatDate"
weight: 42
aliases: 
    - /TA_Automation/Topics/abtf_FormatDate.html
---

## Syntax

`string FormatDate (integer date)`

## Description

Format a date into a string.

## Parameters

-   **date**

    Date in the form of a number \("Julian" format\).


## Return Value

The return value is the formatted date string.

## Notes

-   Dates are kept as numbers, according the Julian date standard. To make a date readable it needs to be formatted with this function.
-   The date is formatted according to the "date format" setting. See paragraph 3.1 for a description how this setting controls the date formatting.
-   This function is equivalent to the " fd " function as it can be used by the tester in a "\#" expression.
-   This function is the inverse of the ParseDate function, that converts a text formatted date to a Julian number.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ExecuteNow](/TA_Automation/Topics/abtf_ExecuteNow.html)

**Next topic:**[GetArgByIndex](/TA_Automation/Topics/abtf_GetArgByIndex.html)

