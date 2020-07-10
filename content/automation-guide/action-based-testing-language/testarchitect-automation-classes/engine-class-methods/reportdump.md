--- 
title: "ReportDump"
linktitle: "ReportDump"
description: "Syntax integer ReportDump (string text) Description Print a text line in the report if the &#34;report all details&#34; option is on. Parameters text Text to be printed in the report. Return Value Return 1 if ..."
weight: 69
aliases: 
    - /TA_Automation/Topics/abtf_ReportDump.html
keywords: "ABT Library Functions, ReportDump, ReportDump (ABT library function)"
---

## Syntax

`integer ReportDump (string text)`

## {{< expand >}} Description

Print a text line in the report if the "report all details" option is on.

## {{< expand >}} Parameters

-   **text**

    Text to be printed in the report.


## {{< expand >}} Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## {{< expand >}} Notes

-   This function is meant to print details of the execution of the actions. The text is only displayed when the "report all details" option is on.
-   If available a small font is used to print the text.




