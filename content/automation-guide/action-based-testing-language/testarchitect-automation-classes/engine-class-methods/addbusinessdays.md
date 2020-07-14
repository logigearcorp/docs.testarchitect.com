--- 
title: "AddBusinessDays"
linktitle: "AddBusinessDays"
description: "Syntax integer AddBusinessDays (integer datevalue, integer days) Description Add business days to a date. Parameters datevalue A number representing a date. days The number of business days to add to ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/abtf_AddBusinessDays.html
keywords: "ABT Library Functions, AddBusinessDays, AddBusinessDays (ABT library function)"
---

## Syntax

`integer AddBusinessDays (integer datevalue, integer days)`

## Description

Add business days to a date.

## Parameters

-   **datevalue**

    A number representing a date.

-   **days**

    The number of business days to add to the contents of datevalue.


## Return Value

The resultant date.

## Notes

-   Business days are defined as Monday thru Friday. Weekend days are excluded.
-   To subtract business days, use a negative value for the days parameter.
-   This function is equivalent to the [plusbd](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/plusbd-julian-number-number-of-business-day) function, as it can be used by the tester in a "\#" expression.




