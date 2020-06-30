--- 
title: "AddArgument"
linktitle: "AddArgument"
description: "Syntax integer AddArgument(string name, string value) Description Add an argument to the current action line. Parameters name Name of the argument. value Value of the argument. Return Value Return 1 ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/abtf_AddArgument.html
keywords: "ABT Library Functions, AddArgument, AddArgument (ABT library function)"
---

## Syntax

`integer AddArgument(string name, string value)`

## Description

Add an argument to the current action line.

## Parameters

-   **name**

    Name of the argument.

-   **value**

    Value of the argument.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Use this function only in combination with [NewActionLine\(\)](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/newactionline).




