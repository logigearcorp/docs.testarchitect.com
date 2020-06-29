--- 
title: "Log"
linktitle: "Log"
description: "Syntax integer Log(string logname, string trace, string reporttag, string value) Description Write an entry into a log. Parameters logname Name of the log, defined in OpenLog. trace Indication of ..."
weight: 51
aliases: 
    - /TA_Automation/Topics/abtf_Log.html
keywords: "ABT Library Functions, Log, Log (ABT library function)"
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




