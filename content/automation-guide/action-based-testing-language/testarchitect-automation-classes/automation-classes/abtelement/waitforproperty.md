--- 
title: "WaitForProperty"
linktitle: "WaitForProperty"
description: "Syntax Boolean WaitForProperty(string propertyName, string propertyValue, long timeOut) Description Wait until the given control property achieves the specified value or exceeds the specified timeout ..."
weight: 28
aliases: 
    - /TA_Automation/Topics/abt_WaitForProperty_1.html
keywords: "methods of abt, WaitForProperty, WaitForProperty (AbtElement), AbtElement, waitforproperty, abtelement waitforproperty, wait until given property of control achieves expected value, wait until given property of control exceed specified timeout"
---

## Syntax

`Boolean WaitForProperty(string propertyName, string propertyValue, long timeOut)`

## Description  

Wait until the given control property achieves the specified value or exceeds the specified timeout before continuing to the next action.

## Parameters

-   **propertyName**

    String value specifying the name of the property whose value to check.

-   **propertyValue**

    String value specifying the expected value against which the actual property value is to be checked.

-   **timeOut**

    Long value indicating the wait duration \(Units: milliseconds\).


## Return Value

Return TRUE if the property achieves the expected value within the time limit; FALSE if the timeout is reached before the property achieves that value.



