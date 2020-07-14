--- 
title: "ReportTitle"
linktitle: "ReportTitle"
description: "Syntax integer ReportTitle (string text, integer fontsize, integer bold, integer italic, integer underline ) Description Add a formatted text line to the report. Parameters text The text to be printed ..."
weight: 73
aliases: 
    - /TA_Automation/Topics/abtf_ReportTitle.html
keywords: "ABT Library Functions, ReportTitle, ReportTitle (ABT library function)"
---

## Syntax

`integer ReportTitle (string text, integer fontsize, integer bold, integer italic, integer underline )`

## Description

Add a formatted text line to the report.

## Parameters

-   **text**

    The text to be printed in the report.

-   **fontsize**

    The size of the font, relative to the font used for the other text in the report. Typical values: -1, 0, 1.

-   **bold**

    If true, the text will be printed in boldface.

-   **italic**

    If true, the text will be printed in italic.

-   **underline**

    If true, the text will be underlined.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   The exact effect depends on the specifics of the reporting program. The built-in RTF support supports the layout parameters.




