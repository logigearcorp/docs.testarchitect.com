--- 
title: "ActionScript"
linktitle: "ActionScript"
weight: 1
aliases: 
    - /TA_Automation/Topics/abtf_ActionScript.html
---

## Syntax

`string ActionScript ()`

## Description

Retrieve the script for the current action.

## Parameters

There are no parameters for this function.

## Return Value

The function returns the script if there is one defined for the action argument of the current action line.

## Notes

-   The action itself can be retrieved with [Argument\(0\)](abtf_Argument.html).
-   This function can only be meaningfully called after a successful call to [NextAction](abtf_NextAction.html).
-   This function is meant for use with a scripting language, like in most playback test tools, and for user-scripted actions \(in contrast with actions that are defined with an ABT action definition\).

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Next topic:**[ActionScriptFind](/TA_Automation/Topics/abtf_ActionScriptFind.html)

