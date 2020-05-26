--- 
title: "AddMonths"
linktitle: "AddMonths"
weight: 7
aliases: 
    - /TA_Automation/Topics/abtf_AddMonths.html
---
# AddMonths {#abtf_AddMonths .reference}

## Syntax

`integer AddMonths (integer datevalue, integer months)`

## Description { .section}

Add months to a date.

## Parameters { .section}

datevalue
:   A number representing a date.

months
:   The number of months to add.

## Return Value { .section}

The resultant date.

## Notes { .section}

-   For purposes of this function, the addition of a month involves incrementing the month while maintaining the same cardinal day of the month. In cases where this would result in a non-valid date \(e.g., adding a month to May 31, thus producing June 31\), the built-in setting [add month compensation](bis_add_month_compensation.html) is referred to. A value of up sets the date to the 1st of the next month \(July 1\), while a value of down rolls back the date to the nearest earlier valid one \(June 30\). A value of error causes a diagnostic to be issued.
-   This function is equivalent to the [plusm](Expressions_functions_plusm.html) function as it can be used by the tester in a "\#" expression.
-   To subtract months, use a negative value for the months parameter.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[AddDays](../../TA_Automation/Topics/abtf_AddDays.html)

**Next topic:**[AddYears](../../TA_Automation/Topics/abtf_AddYears.html)

