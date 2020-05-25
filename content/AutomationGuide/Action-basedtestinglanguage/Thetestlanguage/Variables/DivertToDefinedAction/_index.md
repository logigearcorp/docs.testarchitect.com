--- 
title: "DivertToDefinedAction"
linktitle: "DivertToDefinedAction"
aliases: 
    - /TA_Automation/Topics/abtf_DivertToDefinedAction.html
---
# DivertToDefinedAction {#abtf_DivertToDefinedAction .reference}

## Syntax { .section}

`integer DivertToDefinedAction(string filename)`

## Description { .section}

Start with executing an Action Definition contained in a file, let it return to the current test

## Parameters { .section}

filename
:   Name of the file where the definition is stored.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details..

## Notes { .section}

-   This function is normally part of Interpret. However, it can be used to explicitly run an action that is implemented with an Action Definition. Obtain the filename parameter by using [ActionScriptFind](abtf_ActionScriptFind.html).

## Example { .section}

Execute the enter customer action \(the parameters should be in the current action line, use [NewActionLine](abtf_NewActionLine.html) and [AddArgument](abtf_AddArgument.html) to synthesize one if necessary\):

```
DivertToDefinedAction(ActionScriptFind("enter customer"))
```

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[DiagnosticTrace](../../TA_Automation/Topics/abtf_DiagnosticTrace.html)

**Next topic:**[ElementSetting](../../TA_Automation/Topics/abtf_ElementSetting.html)

