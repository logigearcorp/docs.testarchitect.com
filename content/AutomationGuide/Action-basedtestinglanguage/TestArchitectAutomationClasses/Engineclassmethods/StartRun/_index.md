--- 
title: "StartRun"
linktitle: "StartRun"
weight: 86
aliases: 
    - /TA_Automation/Topics/abtf_StartRun.html
---
# StartRun {#abtf_StartRun .reference}

## Syntax

`integer StartRun (string filename)`

## Description { .section}

Start a test run

## Parameters { .section}

filename
:   Name of the cluster file.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   This function prepares the execution of a test cluster. It needs to be called before NextAction can be executed.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Start](../../TA_Automation/Topics/abtf_Start.html)

**Next topic:**[Terminate](../../TA_Automation/Topics/abtf_Terminate.html)

