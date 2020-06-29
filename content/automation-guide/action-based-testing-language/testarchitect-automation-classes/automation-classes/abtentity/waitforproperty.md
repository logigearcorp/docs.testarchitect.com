--- 
title: "WaitForProperty"
linktitle: "WaitForProperty"
description: "Syntax Boolean WaitForProperty(string propertyName, string propertyValue, long timeOut) Description Wait until the given window property achieves the specified value or exceeds the specified timeout ..."
weight: 29
aliases: 
    - /TA_Automation/Topics/abt_WaitForProperty.html
keywords: "methods of abt, WaitForProperty, WaitForProperty (AbtEntity), AbtEntity, waitforproperty, abtentity waitforproperty, wait until window property reaches expected value, wait until window property exceed timeout"
---

## Syntax

`Boolean WaitForProperty(string propertyName, string propertyValue, long timeOut)`

## Description

Wait until the given window property achieves the specified value or exceeds the specified timeout before continuing to the next action.

## Parameters

-   **propertyName**

    String value specifying the name of the property whose value to check.

-   **propertyValue**

    String value specifying the expected value against which the actual property value is to be checked.

-   **timeOut**

    Long value indicating the wait duration \(Units: milliseconds\).


## Return Value

Return TRUE if the property achieves the expected value within the time limit; FALSE if the timeout is reached before the property achieves that value.

## Notes

-   During the period specified by timeOut, sampling of the specified window property is conducted periodically until a match with the value in propertyValue is found, or the timeout is reached. Either eventuality results in the automation continuing to the next action in the test.



