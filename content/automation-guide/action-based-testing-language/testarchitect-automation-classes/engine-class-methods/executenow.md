--- 
title: "ExecuteNow"
linktitle: "ExecuteNow"
description: "Syntax integer ExecuteNow () Description Execute a built-in action on the current action line. Parameters There are no parameters for this function.  Return Value Return 1 if the call is successful; ..."
weight: 41
aliases: 
    - /TA_Automation/Topics/abtf_ExecuteNow.html
keywords: "ABT Library Functions, ExecuteNow, ExecuteNow (ABT library function)"
---

## Syntax

`integer ExecuteNow ()`

## Description

Execute a built-in action on the current action line.

## Parameters

There are no parameters for this function.;

## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   The function is returned by ActionScript for built-in actions. It can also be used as part of a redefinition of a built-in action in order to amend them in any way. For example the built-in action "version" could be redefined to make an entry in an external version management system and then to use ExecuteNow to do the original built-in action associated with "version".

