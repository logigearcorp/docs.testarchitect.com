--- 
title: "ReportStart"
linktitle: "ReportStart"
aliases: 
    - /TA_Automation/Topics/abtf_ReportStart.html
---
# ReportStart {#abtf_ReportStart .reference}

## Syntax

`integer ReportStart(integer runinfo, string filename, string type)`

## Description { .section}

Start the reporting of a test run.

## Parameters { .section}

runinfo
:   The run information id is a value that defines which recent run to use, if it is 0 the most recent is used. It is returned by EndRun.

filename
:   Filename where the report should go.

type
:   The format of the report. Currently supported are "rtf" and "text", which stand for Rich Text Format and plain text respectively.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   This function starts the reporting process. It is used in combination with ReportCatchUp and ReportFinish to produce an incremental report \(a report that is produced during the test run\).

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[RemoveInterface](../../TA_Automation/Topics/abtf_RemoveInterface.html)

**Next topic:**[Report](../../TA_Automation/Topics/abtf_Report.html)

