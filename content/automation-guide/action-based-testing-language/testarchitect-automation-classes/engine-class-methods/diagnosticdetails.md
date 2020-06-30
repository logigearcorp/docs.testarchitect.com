--- 
title: "DiagnosticDetails"
linktitle: "DiagnosticDetails"
description: "Syntax string DiagnosticDetails () Description Retrieve the details connected to the most recent diagnostic. Parameters There are no parameters for this function. Return Value The function returns the ..."
weight: 32
aliases: 
    - /TA_Automation/Topics/abtf_DiagnosticDetails.html
keywords: "ABT Library Functions, DiagnosticDetails, DiagnosticDetails (ABT library function)"
---

## Syntax

`string DiagnosticDetails ()`

## Description

Retrieve the details connected to the most recent diagnostic.

## Parameters

There are no parameters for this function.

## Return Value

The function returns the details of most recent diagnostic.

## Notes

A diagnostic in the engine consists of the following elements:

-   diagnostic code indicating the kind of problem \( DiagnosticCode, use DiagnosticMessage to translate the code into a message \)
-   diagnostic details, specifying more information on the problem \( DiagnosticDetails \)
-   diagnostic trace, an indication of the place where the problem was detected \( DiagnosticTrace \).




