--- 
title: "Assign"
linktitle: "Assign"
description: "Syntax integer Assign (string name, string value) Description Assign a value to a variable. Parameters name Name of the variable. (This can be an existing variable name or a new one.) value Value to ..."
weight: 15
aliases: 
    - /TA_Automation/Topics/abtf_Assign.html
keywords: "ABT Library Functions, Assign, Assign (ABT library function)"
---

## Syntax

`integer Assign (string name, string value)`

## {{< expand >}} Description

Assign a value to a variable.

## {{< expand >}} Parameters

-   **name**

    Name of the variable. \(This can be an existing variable name or a new one.\)

-   **value**

    Value to be assigned.


## {{< expand >}} Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## {{< expand >}} Notes

-   If present, the variable prefix \("\>\>"\) is stripped off from the variable name.




