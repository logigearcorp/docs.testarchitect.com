--- 
title: "WaitForProperty"
linktitle: "WaitForProperty"
weight: 28
aliases: 
    - /TA_Automation/Topics/abt_WaitForProperty_1.html
---
# WaitForProperty {#abt_WaitForProperty_element .reference}

## Syntax

`Boolean WaitForProperty(string propertyName, string propertyValue, long timeOut)`

## Description {#section.desc .section}

Wait until the given control property achieves the specified value or exceeds the specified timeout before continuing to the next action.

## Parameters { .section}

propertyName
:   String value specifying the name of the property whose value to check.

propertyValue
:   String value specifying the expected value against which the actual property value is to be checked.

timeOut
:   Long value indicating the wait duration \(Units: milliseconds\).

## Return Value { .section}

Return TRUE if the property achieves the expected value within the time limit; FALSE if the timeout is reached before the property achieves that value.

**Parent topic:**[AbtElement](../../TA_Automation/Topics/abt_AbtElement.html)

**Previous topic:**[Type](../../TA_Automation/Topics/abt_Type_1.html)

