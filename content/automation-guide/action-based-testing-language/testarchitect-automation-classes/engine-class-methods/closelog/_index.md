--- 
title: "CloseLog"
linktitle: "CloseLog"
weight: 24
aliases: 
    - /TA_Automation/Topics/abtf_CloseLog.html
---

## Syntax

`integer CloseLog (string logname)`

## Description

Close a log.

## Parameters

-   **logname**

    Name of the log, defined in OpenLog.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   A log can be used to track the cause of a test run or a specific aspect of that in more detail.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[CheckNamedArgument](/TA_Automation/Topics/abtf_CheckNamedArgument.html)

**Next topic:**[CreateInterface](/TA_Automation/Topics/abtf_CreateInterface.html)

