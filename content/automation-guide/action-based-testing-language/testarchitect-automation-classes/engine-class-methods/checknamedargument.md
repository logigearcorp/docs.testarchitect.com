--- 
title: "CheckNamedArgument"
linktitle: "CheckNamedArgument"
description: "Syntax integer CheckNamedArgument(string argname, string recorded) Description Execute a check comparing a recorded value with a named argument in the action line. Parameters argname Name of the ..."
weight: 23
aliases: 
    - /TA_Automation/Topics/abtf_CheckNamedArgument.html
keywords: "ABT Library Functions, CheckNamedArgument, CheckNamedArgument (ABT library function)"
---

## Syntax

`integer CheckNamedArgument(string argname, string recorded)`

## Description

Execute a check comparing a recorded value with a named argument in the action line.

## Parameters

-   **argname**

    Name of the argument in the action line that contains the expected value.

-   **recorded**

    Recorded value, the value that is to be compared with the expected value.


## Return Value

The function returns 1 if the check passed or 0 if it failed.

## Notes

-   The expected string \(in the argument indicated by the argname parameter\) and recorded string are compared. If they are equal the check is administered as passed, otherwise it is treated as failed.




