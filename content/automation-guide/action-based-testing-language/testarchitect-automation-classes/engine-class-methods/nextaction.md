--- 
title: "NextAction"
linktitle: "NextAction"
description: "Syntax integer NextAction () Description Set up the execution of the next action line. Parameters There are no parameters for this function.  Return Value Definitions of current NextAction return ..."
weight: 60
aliases: 
    - /TA_Automation/Topics/abtf_NextAction.html
keywords: "ABT Library Functions, NextAction, NextAction (ABT library function)"
---

## Syntax

`integer NextAction ()`

## Description

Set up the execution of the next action line.

## Parameters

There are no parameters for this function.;

## Return Value

Definitions of current NextAction return values:

-   nonextaction: 5
-   nextactionfailure: 6
-   user: 7
-   header: 8
-   builtin: 9
-   unknown: 10
-   skipping: 11
-   subtest: 12
-   endofsubtest: 13
-   actiondefinition: 14
-   endofactiondefinition: 15
-   endoftest: 17

## Notes

-   An administrative function that prepares the interpretation of an action line. The function searches the action of the action line and keeps track whether the action line should come from the main test file or for example an Action Definition.


