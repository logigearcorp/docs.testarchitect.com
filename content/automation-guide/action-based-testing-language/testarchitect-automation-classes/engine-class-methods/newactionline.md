--- 
title: "NewActionLine"
linktitle: "NewActionLine"
description: "Syntax integer NewActionLine (string action) Description Create a new action line (and make it the current action line) Parameters action The action for the new action line (will be argument 0). ..."
weight: 59
aliases: 
    - /TA_Automation/Topics/abtf_NewActionLine.html
keywords: "ABT Library Functions, NewActionLine, NewActionLine (ABT library function)"
---

## Syntax

`integer NewActionLine (string action)`

## Description

Create a new action line \(and make it the current action line\)

## Parameters

-   **action**

    The action for the new action line \(will be argument 0\).


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   A new action line can be used to simulate an action line from a cluster. It is typically used to call a script function that retrieves its values with Argument or NamedArgument.




