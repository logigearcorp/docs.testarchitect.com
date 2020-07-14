--- 
title: "CheckArgument"
linktitle: "CheckArgument"
description: "Syntax integer CheckArgument(integer argnr, string recorded) Description Execute a check comparing a recorded value with an argument in the action line. Parameters argnr Number of the argument in the ..."
weight: 22
aliases: 
    - /TA_Automation/Topics/abtf_CheckArgument.html
keywords: "ABT Library Functions, CheckArgument, CheckArgument (ABT library function)"
---

## Syntax

`integer CheckArgument(integer argnr, string recorded)`

## Description

Execute a check comparing a recorded value with an argument in the action line.

## Parameters

-   **argnr**

    Number of the argument in the action line that contains the expected value.

-   **recorded**

    Recorded value, the value that is to be compared with the expected value.


## Return Value

The function returns 1 if the check passed or 0 if it failed.

## Notes

-   The expected string \(in the argument indicated by argnr\) and recorded string are compared. If they are equal the check is administered as passed, otherwise it is treated as failed.




