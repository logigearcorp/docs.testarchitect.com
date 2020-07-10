--- 
title: "ReportStart"
linktitle: "ReportStart"
description: "Syntax integer ReportStart(integer runinfo, string filename, string type) Description Start the reporting of a test run. Parameters runinfo The run information id is a value that defines which recent ..."
weight: 66
aliases: 
    - /TA_Automation/Topics/abtf_ReportStart.html
keywords: "ABT Library Functions, ReportStart, ReportStart (ABT library function)"
---

## Syntax

`integer ReportStart(integer runinfo, string filename, string type)`

## {{< expand >}} Description

Start the reporting of a test run.

## {{< expand >}} Parameters

-   **runinfo**

    The run information id is a value that defines which recent run to use, if it is 0 the most recent is used. It is returned by EndRun.

-   **filename**

    Filename where the report should go.

-   **type**

    The format of the report. Currently supported are "rtf" and "text", which stand for Rich Text Format and plain text respectively.


## {{< expand >}} Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## {{< expand >}} Notes

-   This function starts the reporting process. It is used in combination with ReportCatchUp and ReportFinish to produce an incremental report \(a report that is produced during the test run\).




