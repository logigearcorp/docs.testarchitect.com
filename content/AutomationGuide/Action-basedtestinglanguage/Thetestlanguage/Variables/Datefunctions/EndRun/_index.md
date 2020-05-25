--- 
title: "EndRun"
linktitle: "EndRun"
aliases: 
    - /TA_Automation/Topics/abt_EndRun.html
---
# EndRun {#abt_EndRun .reference}

## Syntax {#section.syntax .section}

`int EndRun()`

## Description {#section.desc .section}

Ends a test run.

## Parameters { .section}

There are no parameters for this function.

## Return Value {#section.return .section}

An integer value is returned that identifies the result information for the test run. It is to be used as parameter for the [ReportFinish](abtf_ReportFinish.html) or the [PrintReport](abtf_PrintReport.html) function.

## Notes { .section}

-   This function produces the summary and needs to be called before [ReportFinish](abtf_ReportFinish.html) or [PrintReport](abtf_PrintReport.html) can be used.
-   After using EndRun, a new call to [StartRun](abtf_StartRun.html) is needed before [NextAction](abtf_NextAction.html) can be called.

**Parent topic:**[AbtAutomation](../../TA_Automation/Topics/abt_AbtAutomation.html)

**Previous topic:**[DoAction](../../TA_Automation/Topics/abt_DoAction.html)

**Next topic:**[OpenEntity](../../TA_Automation/Topics/abt_OpenEntity.html)

