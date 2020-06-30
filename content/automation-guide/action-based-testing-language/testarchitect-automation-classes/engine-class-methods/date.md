--- 
title: "Date"
linktitle: "Date"
description: "Syntax integer Date (integer year, integer month, integer day) Description Convert a date to a Julian value Parameters year Year number, for example 2005. month Month number, for example 1 for ..."
weight: 29
aliases: 
    - /TA_Automation/Topics/abtf_Date.html
keywords: "ABT Library Functions, Date, Date (ABT library function)"
---

## Syntax

`integer Date (integer year, integer month, integer day)`

## Description

Convert a date to a Julian value

## Parameters

-   **year**

    Year number, for example 2005.

-   **month**

    Month number, for example 1 for January.

-   **day**

    Day number, for example 31.


## Return Value

The return value is the Julian value.

## Notes

-   To perform calculations on date it needs to be in the Julian format. This function can produce this format using year, month and day as input.
-   This function is equivalent to the "d" function as it can be used by the tester in a "\#" expression.
-   If the year number is less than 100, it is interpreted to be either in the 1900's or the 2000's. The "break year" setting \(default value 30\) is used to decide in which century the year falls: if the year number is larger than 30 it is assumed to be in the 1900's, otherwise in the 2000's.




