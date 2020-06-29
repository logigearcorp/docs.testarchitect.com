--- 
title: "Terminate"
linktitle: "Terminate"
description: "Syntax integer Terminate () Description Stop the test run as soon as possible. Parameters There are no parameters for this function. Return Value The function returns &#34;1&#34; if successful or &#34;0&#34; if ..."
weight: 87
aliases: 
    - /TA_Automation/Topics/abtf_Terminate.html
keywords: "ABT Library Functions, Terminate, Terminate (ABT library function)"
---

## Syntax

`integer Terminate ()`

## Description

Stop the test run as soon as possible.

## Parameters

There are no parameters for this function.

## Return Value

The function returns "1" if successful or "0" if unsuccessful. If unsuccessful, the diagnostic functions can be used to get more details

## Notes

-   The function raises an internal flag that will cause "NextAction" to return the "nonextaction" return value on every subsequent call. It will also cause most of the "terminate" functions to return immediately with an "unsuccessful" return value.
-   The actual termination is a responsibility of the automation script.




