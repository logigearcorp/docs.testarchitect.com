--- 
title: "EndRun"
linktitle: "EndRun"
description: "Syntax integer EndRun () Description End a test run Parameters There are no parameters for this function.  Return Value A number is returned that identifies the result information for the test run. It ..."
weight: 38
aliases: 
    - /TA_Automation/Topics/abtf_EndRun.html
keywords: "ABT Library Functions, EndRun, EndRun (ABT library function)"
---

## Syntax

`integer EndRun ()`

## Description

End a test run

## Parameters

There are no parameters for this function.

## Return Value

A number is returned that identifies the result information for the test run. It is to be used as parameter for the "ReportFinish" or the "PrintReport" function.

## Notes

-   This function produces the summary and needs to be called before "ReportFinish" or "PrintReport" can be used.
-   After using ";EndRun", a new call to "StartRun" is needed before "NextAction"can be called.

