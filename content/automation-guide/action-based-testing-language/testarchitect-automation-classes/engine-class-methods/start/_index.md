--- 
title: "Start"
linktitle: "Start"
weight: 85
aliases: 
    - /TA_Automation/Topics/abtf_Start.html
---

## Syntax

`integer Start (string filename, string directory)`

## Description

Start TestArchitect.

## Parameters

-   **filename**

    File with the initial values of various AbtLibrary settings.

-   **directory**

    The data directory, a directory that TestArchitect can use to create files in.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   This function has to be executed before any AbtLibrary function. It mainly initializes the internal data structures of TestArchitect.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ShouldAssign](/TA_Automation/Topics/abtf_ShouldAssign.html)

**Next topic:**[StartRun](/TA_Automation/Topics/abtf_StartRun.html)

