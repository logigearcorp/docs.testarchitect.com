--- 
title: "OpenLog"
linktitle: "OpenLog"
description: "Syntax integer OpenLog (string logname, string filename) Description Open a log file. Parameters logname Name of the log, to be used in Log. filename Name of the file where the log should go. Return ..."
weight: 62
aliases: 
    - /TA_Automation/Topics/abtf_OpenLog.html
keywords: "ABT Library Functions, OpenLog, OpenLog (ABT library function)"
---

## Syntax

`integer OpenLog (string logname, string filename)`

## Description

Open a log file.

## Parameters

-   **logname**

    Name of the log, to be used in Log.

-   **filename**

    Name of the file where the log should go.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   A log can be used to track the cause of a test run or a specific aspect of that in more detail.




