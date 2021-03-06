--- 
title: "Log"
linktitle: "Log"
weight: 51
aliases: 
    - /TA_Automation/Topics/abtf_Log.html
---

## Syntax

`integer Log(string logname, string trace, string reporttag, string value)`

## Description

Write an entry into a log.

## Parameters

-   **logname**

    Name of the log, defined in OpenLog.

-   **trace**

    Indication of where in the script the log entry is written.

-   **reporttag**

    Tag \(label\) describing the logged value.

-   **value**

    The text to be logged.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   A log can be used to track the cause of a test run or a specific aspect of that in more detail.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[InterfaceAction](/TA_Automation/Topics/abtf_InterfaceAction.html)

**Next topic:**[MarkedLineArgument](/TA_Automation/Topics/abtf_MarkedLineArgument.html)

