--- 
title: "ReportTitle"
linktitle: "ReportTitle"
weight: 73
aliases: 
    - /TA_Automation/Topics/abtf_ReportTitle.html
---
# ReportTitle {#abtf_ReportTitle .reference}

## Syntax

`integer ReportTitle (string text, integer fontsize, integer bold, integer italic, integer underline )`

## Description { .section}

Add a formatted text line to the report.

## Parameters { .section}

text
:   The text to be printed in the report.

fontsize
:   The size of the font, relative to the font used for the other text in the report. Typical values: -1, 0, 1.

bold
:   If true, the text will be printed in boldface.

italic
:   If true, the text will be printed in italic.

underline
:   If true, the text will be underlined.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   The exact effect depends on the specifics of the reporting program. The built-in RTF support supports the layout parameters.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ReportSetting](../../TA_Automation/Topics/abtf_ReportSetting.html)

**Next topic:**[ReportWarning](../../TA_Automation/Topics/abtf_ReportWarning.html)

