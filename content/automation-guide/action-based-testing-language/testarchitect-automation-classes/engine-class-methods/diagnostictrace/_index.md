--- 
title: "DiagnosticTrace"
linktitle: "DiagnosticTrace"
weight: 34
aliases: 
    - /TA_Automation/Topics/abtf_DiagnosticTrace.html
---

## Syntax

`string DiagnosticTrace ()`

## Description

Retrieve the "trace" connected to the most recent diagnostic.

## Parameters

There are no parameters for this function.

## Return Value

The function returns the most recent diagnostic code.

## Notes

A diagnostic in the engine consists of the following elements:

-   diagnostic code indicating the kind of problem \( DiagnosticCode, use DiagnosticMessage to translate the code into a message \)
-   diagnostic details, specifying more information on the problem \( DiagnosticDetails \)
-   diagnostic trace, an indication of the place where the problem was detected \( DiagnosticTrace \).

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[DiagnosticMessage](/TA_Automation/Topics/abtf_DiagnosticMessage.html)

**Next topic:**[DivertToDefinedAction](/TA_Automation/Topics/abtf_DivertToDefinedAction.html)

