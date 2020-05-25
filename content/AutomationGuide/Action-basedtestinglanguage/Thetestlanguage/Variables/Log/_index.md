--- 
title: "Log"
linktitle: "Log"
aliases: 
    - /TA_Automation/Topics/abtf_Log.html
---
# Log {#abtf_Log .reference}

## Syntax

`integer Log(string logname, string trace, string reporttag, string value)`

## Description { .section}

Write an entry into a log.

## Parameters { .section}

logname
:   Name of the log, defined in OpenLog.

trace
:   Indication of where in the script the log entry is written.

reporttag
:   Tag \(label\) describing the logged value.

value
:   The text to be logged.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   A log can be used to track the cause of a test run or a specific aspect of that in more detail.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[InterfaceAction](../../TA_Automation/Topics/abtf_InterfaceAction.html)

**Next topic:**[MarkedLineArgument](../../TA_Automation/Topics/abtf_MarkedLineArgument.html)

