--- 
title: "ReturnFromDefinedAction"
linktitle: "ReturnFromDefinedAction"
description: "Syntax integer ReturnFromDefinedAction () Description Finalize the execution of a defined action and resume interpretation of the test which it was started from. Parameters There are no parameters for ..."
weight: 75
aliases: 
    - /TA_Automation/Topics/abtf_ReturnFromDefinedAction.html
keywords: "ABT Library Functions, ReturnFromDefinedAction, ReturnFromDefinedAction (ABT library function)"
---

## Syntax

`integer ReturnFromDefinedAction ()`

## Description

Finalize the execution of a defined action and resume interpretation of the test which it was started from.

## Parameters

There are no parameters for this function.;

## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   This function can also be used to abort the execution of a subtest and, for example, move on to a next one.


