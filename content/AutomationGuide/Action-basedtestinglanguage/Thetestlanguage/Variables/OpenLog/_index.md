--- 
title: "OpenLog"
linktitle: "OpenLog"
aliases: 
    - /TA_Automation/Topics/abtf_OpenLog.html
---
# OpenLog {#abtf_OpenLog .reference}

## Syntax

`integer OpenLog (string logname, string filename)`

## Description { .section}

Open a log file.

## Parameters { .section}

logname
:   Name of the log, to be used in Log.

filename
:   Name of the file where the log should go.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   A log can be used to track the cause of a test run or a specific aspect of that in more detail.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[OpenInterface](../../TA_Automation/Topics/abtf_OpenInterface.html)

**Next topic:**[ParseDate](../../TA_Automation/Topics/abtf_ParseDate.html)

