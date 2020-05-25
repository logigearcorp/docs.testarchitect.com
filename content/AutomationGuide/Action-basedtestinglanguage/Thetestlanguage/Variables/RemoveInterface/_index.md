--- 
title: "RemoveInterface"
linktitle: "RemoveInterface"
aliases: 
    - /TA_Automation/Topics/abtf_RemoveInterface.html
---
# RemoveInterface {#abtf_RemoveInterface .reference}

## Syntax

`integer RemoveInterface (string name)`

## Description { .section}

Remove an Interface Definition from memory.

## Parameters { .section}

name
:   Name of the interface to be removed.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   In most cases removing interfaces is not necessary. The use of this function is not recommended when TestArchitect is used to control the automation.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[PrintReport](../../TA_Automation/Topics/abtf_PrintReport.html)

**Next topic:**[ReportStart](../../TA_Automation/Topics/abtf_ReportStart.html)

