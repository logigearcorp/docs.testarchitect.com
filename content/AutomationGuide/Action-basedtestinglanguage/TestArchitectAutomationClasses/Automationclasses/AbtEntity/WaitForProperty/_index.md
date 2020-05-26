--- 
title: "WaitForProperty"
linktitle: "WaitForProperty"
weight: 29
aliases: 
    - /TA_Automation/Topics/abt_WaitForProperty.html
---
# WaitForProperty {#abt_WaitForProperty_entity .reference}

## Syntax

`Boolean WaitForProperty(string propertyName, string propertyValue, long timeOut)`

## Description {#section.desc .section}

Wait until the given window property achieves the specified value or exceeds the specified timeout before continuing to the next action.

## Parameters {#section.params .section}

propertyName
:   String value specifying the name of the property whose value to check.

propertyValue
:   String value specifying the expected value against which the actual property value is to be checked.

timeOut
:   Long value indicating the wait duration \(Units: milliseconds\).

## Return Value {#section.return .section}

Return TRUE if the property achieves the expected value within the time limit; FALSE if the timeout is reached before the property achieves that value.

## Notes { .section}

-   During the period specified by timeOut, sampling of the specified window property is conducted periodically until a match with the value in propertyValue is found, or the timeout is reached. Either eventuality results in the automation continuing to the next action in the test.

**Parent topic:**[AbtEntity](../../TA_Automation/Topics/abt_AbtEntity.html)

**Previous topic:**[Type](../../TA_Automation/Topics/abt_Type.html)

