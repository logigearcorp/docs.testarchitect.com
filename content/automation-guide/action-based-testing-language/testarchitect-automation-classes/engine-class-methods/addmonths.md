--- 
title: "AddMonths"
linktitle: "AddMonths"
description: "Syntax integer AddMonths (integer datevalue, integer months) Description Add months to a date. Parameters datevalue A number representing a date. months The number of months to add. Return Value The ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/abtf_AddMonths.html
keywords: "ABT Library Functions, AddMonths, AddMonths (ABT library function)"
---

## Syntax

`integer AddMonths (integer datevalue, integer months)`

## {{< expand >}} Description

Add months to a date.

## {{< expand >}} Parameters

-   **datevalue**

    A number representing a date.

-   **months**

    The number of months to add.


## {{< expand >}} Return Value

The resultant date.

## {{< expand >}} Notes

-   For purposes of this function, the addition of a month involves incrementing the month while maintaining the same cardinal day of the month. In cases where this would result in a non-valid date \(e.g., adding a month to May 31, thus producing June 31\), the built-in setting [add month compensation](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/add-month-compensation) is referred to. A value of up sets the date to the 1st of the next month \(July 1\), while a value of down rolls back the date to the nearest earlier valid one \(June 30\). A value of error causes a diagnostic to be issued.
-   This function is equivalent to the [plusm](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/plusm-julian-number-number-of-month) function as it can be used by the tester in a "\#" expression.
-   To subtract months, use a negative value for the months parameter.




