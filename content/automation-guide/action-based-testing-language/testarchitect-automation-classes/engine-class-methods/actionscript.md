--- 
title: "ActionScript"
linktitle: "ActionScript"
description: "Syntax string ActionScript () Description Retrieve the script for the current action. Parameters There are no parameters for this function. Return Value The function returns the script if there is one ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/abtf_ActionScript.html
keywords: "ABT Library Functions, ActionScript, ActionScript (ABT library function)"
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

-   The action itself can be retrieved with [Argument\(0\)](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/argument).
-   This function can only be meaningfully called after a successful call to [NextAction](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/nextaction).
-   This function is meant for use with a scripting language, like in most playback test tools, and for user-scripted actions \(in contrast with actions that are defined with an ABT action definition\).



