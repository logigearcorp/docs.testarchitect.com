--- 
title: "DivertToDefinedAction"
linktitle: "DivertToDefinedAction"
description: "Syntax integer DivertToDefinedAction(string filename) Description Start with executing an Action Definition contained in a file, let it return to the current test Parameters filename Name of the file ..."
weight: 35
aliases: 
    - /TA_Automation/Topics/abtf_DivertToDefinedAction.html
keywords: "ABT Library Functions, DivertToDefinedAction, DivertToDefinedAction (ABT library function)"
---

## Syntax

`integer DivertToDefinedAction(string filename)`

## Description

Start with executing an Action Definition contained in a file, let it return to the current test

## Parameters

-   **filename**

    Name of the file where the definition is stored.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details..

## Notes

-   This function is normally part of Interpret. However, it can be used to explicitly run an action that is implemented with an Action Definition. Obtain the filename parameter by using [ActionScriptFind](/TA_Automation/Topics/abtf_ActionScriptFind.html).

## Example

Execute the enter customer action \(the parameters should be in the current action line, use [NewActionLine](/TA_Automation/Topics/abtf_NewActionLine.html) and [AddArgument](/TA_Automation/Topics/abtf_AddArgument.html) to synthesize one if necessary\):

```
DivertToDefinedAction(ActionScriptFind("enter customer"))
```




