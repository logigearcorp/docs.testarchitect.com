--- 
title: "AddBusinessDays"
linktitle: "AddBusinessDays"
weight: 5
aliases: 
    - /TA_Automation/Topics/abtf_AddBusinessDays.html
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
-   This function is equivalent to the [plusbd](/TA_Automation/Topics/Expressions_functions_plusbd.html) function, as it can be used by the tester in a "\#" expression.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[AddArgument](/TA_Automation/Topics/abtf_AddArgument.html)

**Next topic:**[AddDays](/TA_Automation/Topics/abtf_AddDays.html)

