--- 
title: "CloseLog"
linktitle: "CloseLog"
description: "Syntax integer CloseLog (string logname) Description Close a log. Parameters logname Name of the log, defined in OpenLog. Return Value Return 1 if the call is successful; otherwise, 0 . If ..."
weight: 24
aliases: 
    - /TA_Automation/Topics/abtf_CloseLog.html
keywords: "ABT Library Functions, CloseLog, CloseLog (ABT library function)"
---

## Syntax

`integer CloseLog (string logname)`

## {{< expand >}} Description

Close a log.

## {{< expand >}} Parameters

-   **logname**

    Name of the log, defined in OpenLog.


## {{< expand >}} Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## {{< expand >}} Notes

-   A log can be used to track the cause of a test run or a specific aspect of that in more detail.




