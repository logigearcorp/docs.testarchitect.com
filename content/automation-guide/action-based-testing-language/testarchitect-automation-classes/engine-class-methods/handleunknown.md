--- 
title: "HandleUnknown"
linktitle: "HandleUnknown"
description: "Syntax integer HandleUnknown () Description Handle the case of an unknown action word Parameters There are no parameters for this function.  Return Value Return 1 if the call is successful; otherwise, ..."
weight: 47
aliases: 
    - /TA_Automation/Topics/abtf_HandleUnknown.html
keywords: "ABT Library Functions, HandleUnknown, HandleUnknown (ABT library function)"
---

## Syntax

`integer HandleUnknown ()`

## {{< expand >}} Description

Handle the case of an unknown action word

## {{< expand >}} Parameters

There are no parameters for this function.;

## {{< expand >}} Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## {{< expand >}} Notes

-   To be called to process the situation of an unknown action. This function is typically part of the Interpret function.
-   The function will produce a diagnostic in the report.

