--- 
title: "DiagnosticMessage"
linktitle: "DiagnosticMessage"
aliases: 
    - /TA_Automation/Topics/abtf_DiagnosticMessage.html
---
# DiagnosticMessage {#abtf_DiagnosticMessage .reference}

## Syntax

`string DiagnosticMessage (integer code)`

## Description { .section}

Retrieve the description connected to a diagnostic code.

## Parameters { .section}

code
:   Code of a diagnostic.

## Return Value { .section}

The function returns the description associated with the diagnostic code.

## Notes { .section}

A diagnostic in the engine consists of the following elements:

-   diagnostic code indicating the kind of problem \( DiagnosticCode, this function, DiagnosticMessage, to translate the code into a message \)
-   diagnostic details, specifying more information on the problem \( DiagnosticDetails \)
-   diagnostic trace, an indication of the place where the problem was detected \( DiagnosticTrace \).

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[DiagnosticDetails](../../TA_Automation/Topics/abtf_DiagnosticDetails.html)

**Next topic:**[DiagnosticTrace](../../TA_Automation/Topics/abtf_DiagnosticTrace.html)

