--- 
title: "StartRun"
linktitle: "StartRun"
weight: 86
aliases: 
    - /TA_Automation/Topics/abtf_StartRun.html
---

## Syntax

`integer StartRun (string filename)`

## Description

Start a test run

## Parameters

-   **filename**

    Name of the cluster file.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   This function prepares the execution of a test cluster. It needs to be called before NextAction can be executed.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Start](/TA_Automation/Topics/abtf_Start.html)

**Next topic:**[Terminate](/TA_Automation/Topics/abtf_Terminate.html)

