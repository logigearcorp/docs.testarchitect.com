--- 
title: "DiagnosticTrace"
linktitle: "DiagnosticTrace"
description: "Syntax string DiagnosticTrace () Description Retrieve the &#34;trace&#34; connected to the most recent diagnostic. Parameters There are no parameters for this function. Return Value The function returns the ..."
weight: 34
aliases: 
    - /TA_Automation/Topics/abtf_DiagnosticTrace.html
keywords: "ABT Library Functions, DiagnosticTrace, DiagnosticTrace (ABT library function)"
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




