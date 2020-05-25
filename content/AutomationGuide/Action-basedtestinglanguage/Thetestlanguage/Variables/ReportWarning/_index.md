--- 
title: "ReportWarning"
linktitle: "ReportWarning"
aliases: 
    - /TA_Automation/Topics/abtf_ReportWarning.html
---
# ReportWarning {#abtf_ReportWarning .reference}

## Syntax

`integer ReportWarning (string message)`

## Description { .section}

Issue a warning for the report.

## Parameters { .section}

message
:   Text explaining the problem.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   TestArchitect differentiates between the following conditions:
    -   Failure: an explicitly specified check that has failed
    -   Warning: meant for an unexpected situation detected by the automation
    -   Error: invalid test specification or automation problem
-   Each of these categories is printed in the "Check summary" section of the report, along with a tally of the number of times that condition arose during the associated test run, to be acted upon by the tester or the automation engineer.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ReportTitle](../../TA_Automation/Topics/abtf_ReportTitle.html)

**Next topic:**[ReturnFromDefinedAction](../../TA_Automation/Topics/abtf_ReturnFromDefinedAction.html)

