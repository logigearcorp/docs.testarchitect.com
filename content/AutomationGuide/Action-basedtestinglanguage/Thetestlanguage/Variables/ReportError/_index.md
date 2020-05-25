--- 
title: "ReportError"
linktitle: "ReportError"
aliases: 
    - /TA_Automation/Topics/abtf_ReportError.html
---
# ReportError {#abtf_ReportError .reference}

## Syntax

`integer ReportError (string message)`

## Description { .section}

Add an error to the report.

## Parameters { .section}

message
:   Text explaining the error.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   TestArchitect differentiates between the following conditions:
    -   Failure: an explicitly specified check that has failed
    -   Warning: meant for an unexpected situation detected by the automation
    -   Error: invalid test specification or automation problem
-   Each of these categories is printed in the "Check summary" section of the report, along with a tally of the number of times that condition arose during the associated test run, to be acted upon by the tester or the automation engineer.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ReportDump](../../TA_Automation/Topics/abtf_ReportDump.html)

**Next topic:**[ReportFinish](../../TA_Automation/Topics/abtf_ReportFinish.html)

