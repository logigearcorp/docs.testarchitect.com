--- 
title: "ReportCatchUp"
linktitle: "ReportCatchUp"
description: "Syntax integer ReportCatchUp () Description Add all results currently available to the report. Parameters There are no parameters for this function.  Return Value Return 1 if the call is successful; ..."
weight: 68
aliases: 
    - /TA_Automation/Topics/abtf_ReportCatchUp.html
keywords: "ABT Library Functions, ReportCatchUp, ReportCatchUp (ABT library function)"
---

## Syntax

`integer ReportCatchUp ()`

## Description

Add all results currently available to the report.

## Parameters

There are no parameters for this function.;

## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Any results that became available since the previous call to ReportCatchUp are added to the report. Internal buffers are flushed so the report is as recent as possible in case a test run ends abnormally.

