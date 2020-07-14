--- 
title: "EndRun"
linktitle: "EndRun"
description: "Syntax int EndRun() Description Ends a test run . Parameters There are no parameters for this function. Return Value An integer value is returned that identifies the result information for the test ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/abt_EndRun.html
keywords: "methods of abt, EndRun, EndRun (AbtAutoation), AbtAutomation, endrun, endrun abtautomation, end test run, end test execution"
---

## Syntax {{< permerlink >}} {#abt_EndRun__section.syntax} 

`int EndRun()`

## Description {{< permerlink >}} {#abt_EndRun__section.desc} 

Ends a test run.

## Parameters

There are no parameters for this function.

## Return Value {{< permerlink >}} {#abt_EndRun__section.return} 

An integer value is returned that identifies the result information for the test run. It is to be used as parameter for the [ReportFinish](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/reportfinish) or the [PrintReport](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/printreport) function.

## Notes

-   This function produces the summary and needs to be called before [ReportFinish](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/reportfinish) or [PrintReport](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/printreport) can be used.
-   After using EndRun, a new call to [StartRun](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/startrun) is needed before [NextAction](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/nextaction) can be called.




