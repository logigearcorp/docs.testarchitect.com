--- 
title: "plusbd\\(Julian number, number of business day\\)"
linktitle: "plusbd\\(Julian number, number of business day\\)"
description: "Add a specified number of business days to a given Julian date number, then return the result as a Julian number."
weight: 10
aliases: 
    - /TA_Automation/Topics/Expressions_functions_plusbd.html
keywords: "date functions, plusbd, plusbd (function)"
---

Add a specified number of business days to a given Julian date number, then return the result as a Julian number.

## Syntax

`integer plusbd(integer date, integer day)`

## Parameters

-   **date**

    Julian date number.

-   **day**

    Number of business days to add to date. Use a negative value to subtract business days from date.


## Return Value

Returns a Julian date number computed by adding a number of business days to a Julian date number.

## Notes

-   There are five working days in a week \(Monday through Friday\). Weekends \(Saturday and Sunday\) are excluded.

## Applicable Built-In Settings

The following built-in setting\(s\) are supported: [date order](/TA_Automation/Topics/bis_date_order.html).

## Example

![](/images/TA_Automation/Images/automationguide_datefunction11.PNG)


(/TA_Automation/Topics/Expressions_functions_plusd.html)


