--- 
title: "DiagnosticCode"
linktitle: "DiagnosticCode"
description: "Syntax integer DiagnosticCode () Description Retrieve the code of the most recent diagnostic. Parameters There are no parameters for this function. Return Value The function returns the most recent ..."
weight: 31
aliases: 
    - /TA_Automation/Topics/abtf_DiagnosticCode.html
keywords: "ABT Library Functions, DiagnosticCode, DiagnosticCode (ABT library function)"
---

## Syntax

`integer DiagnosticCode ()`

## Description

Retrieve the code of the most recent diagnostic.

## Parameters

There are no parameters for this function.

## Return Value

The function returns the most recent diagnostic code.

## Notes

A diagnostic in the engine consists of the following elements:

-   diagnostic code indicating the kind of problem \( DiagnosticCode, use DiagnosticMessage to translate the code into a message \)
-   diagnostic details, specifying more information on the problem \( DiagnosticDetails \)
-   diagnostic trace, an indication of the place where the problem was detected \( DiagnosticTrace \)

This list shows the currently defined diagnostic codes. The description can be retrieved with the DiagnosticMessage function.

-   01 Error in argument of action
-   02 Invalid variable assignment
-   03 Can't perform check because of garbled value\(s\)
-   04 Couldn't create/open file for writing
-   05 Not able to create interface data file
-   06 Couldn't create report
-   07 No database
-   08 Error in expression
-   09 Couldn't perform file operation
-   10 Operation on an unopened file
-   11 Identifiers must start with letter or '\_' and contain only letters, digits and '\_'
-   12 Problem with initialization
-   13 Internal condition violation
-   14 Invalid use of a function
-   15 Calling engine function with an invalid parameter
-   16 Invalid value
-   17 No class \(like 'edit' or 'button'\) defined
-   18 No element \(like window object or message field\) defined
-   19 No entity \(like window or message\) defined
-   20 Log is not opened yet
-   21 No file opened yet
-   22 Item not found
-   23 Couldn't open file for reading
-   24 Couldn't open file
-   25 Report too large
-   26 Problem with master robot execution
-   27 Problem with connection \(with test monitor, front-end or master/robot processing\)
-   28 Necessary options missing or invalid
-   29 Illegal attempts to leave a run
-   30 Operation failed.




