--- 
title: "DiagnosticMessage"
linktitle: "DiagnosticMessage"
description: "Syntax string DiagnosticMessage (integer code) Description Retrieve the description connected to a diagnostic code. Parameters code Code of a diagnostic. Return Value The function returns the ..."
weight: 33
aliases: 
    - /TA_Automation/Topics/abtf_DiagnosticMessage.html
keywords: "ABT Library Functions, DiagnosticMessage, DiagnosticMessage (ABT library function)"
---

## Syntax

`string DiagnosticMessage (integer code)`

## Description

Retrieve the description connected to a diagnostic code.

## Parameters

-   **code**

    Code of a diagnostic.


## Return Value

The function returns the description associated with the diagnostic code.

## Notes

A diagnostic in the engine consists of the following elements:

-   diagnostic code indicating the kind of problem \( DiagnosticCode, this function, DiagnosticMessage, to translate the code into a message \)
-   diagnostic details, specifying more information on the problem \( DiagnosticDetails \)
-   diagnostic trace, an indication of the place where the problem was detected \( DiagnosticTrace \).




