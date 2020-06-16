--- 
title: "PrintReport"
linktitle: "PrintReport"
description: "Syntax integer PrintReport (integer runinfo, string filename, string type) Description Print the report of a run (identified by the &#34; runinfo &#34; parameter). Parameters runinfo The run information id is ..."
weight: 64
aliases: 
    - /TA_Automation/Topics/abtf_PrintReport.html
keywords: "ABT Library Functions, PrintReport, PrintReport (ABT library function)"
---

## Syntax

`integer PrintReport (integer runinfo, string filename, string type)`

## Description

Print the report of a run \(identified by the " runinfo " parameter\).

## Parameters

-   **runinfo**

    The run information id is a value that defines which recent run to use, if it is 0 the most recent is used. It is returned by EndRun.

-   **filename**

    Filename where the report should go.

-   **type**

    The format of the report. Currently supported are "rtf" and "text", which stand for Rich Text Format and plain text respectively.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   In most cases it is preferable to use StartReport, CatchUpReport and FinishReport, since using these functions produce the report while the test is running. In case of a unexpected premature end of the test the report is available up to the point where the problem occurred. Use PrintReport for time critical tests to avoid the file i/o for the report while the test is running.




