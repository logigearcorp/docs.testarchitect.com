--- 
title: "EndRun"
linktitle: "EndRun"
description: "Syntax int EndRun() Description Ends a test run . Parameters There are no parameters for this function. Return Value An integer value is returned that identifies the result information for the test ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/abt_EndRun.html
keywords: "methods of abt, EndRun, EndRun (AbtAutoation), AbtAutomation, endrun, endrun abtautomation, end test run, end test execution"
---

## Syntax

`int EndRun()`

## Description

Ends a test run.

## Parameters

There are no parameters for this function.

## Return Value

An integer value is returned that identifies the result information for the test run. It is to be used as parameter for the [ReportFinish](/TA_Automation/Topics/abtf_ReportFinish.html) or the [PrintReport](/TA_Automation/Topics/abtf_PrintReport.html) function.

## Notes

-   This function produces the summary and needs to be called before [ReportFinish](/TA_Automation/Topics/abtf_ReportFinish.html) or [PrintReport](/TA_Automation/Topics/abtf_PrintReport.html) can be used.
-   After using EndRun, a new call to [StartRun](/TA_Automation/Topics/abtf_StartRun.html) is needed before [NextAction](/TA_Automation/Topics/abtf_NextAction.html) can be called.




