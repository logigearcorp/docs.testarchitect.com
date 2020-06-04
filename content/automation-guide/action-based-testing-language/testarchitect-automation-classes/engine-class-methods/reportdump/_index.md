--- 
title: "ReportDump"
linktitle: "ReportDump"
weight: 69
aliases: 
    - /TA_Automation/Topics/abtf_ReportDump.html
---

## Syntax

`integer ReportDump (string text)`

## Description

Print a text line in the report if the "report all details" option is on.

## Parameters

-   **text**

    Text to be printed in the report.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   This function is meant to print details of the execution of the actions. The text is only displayed when the "report all details" option is on.
-   If available a small font is used to print the text.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ReportCatchUp](/TA_Automation/Topics/abtf_ReportCatchUp.html)

**Next topic:**[ReportError](/TA_Automation/Topics/abtf_ReportError.html)

