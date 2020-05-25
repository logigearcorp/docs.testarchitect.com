--- 
title: "Terminate"
linktitle: "Terminate"
aliases: 
    - /TA_Automation/Topics/abtf_Terminate.html
---
# Terminate {#abtf_Terminate .reference}

## Syntax

`integer Terminate ()`

## Description { .section}

Stop the test run as soon as possible.

## Parameters { .section}

There are no parameters for this function.

## Return Value { .section}

The function returns "1" if successful or "0" if unsuccessful. If unsuccessful, the diagnostic functions can be used to get more details

## Notes { .section}

-   The function raises an internal flag that will cause "NextAction" to return the "nonextaction" return value on every subsequent call. It will also cause most of the "terminate" functions to return immediately with an "unsuccessful" return value.
-   The actual termination is a responsibility of the automation script.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[StartRun](../../TA_Automation/Topics/abtf_StartRun.html)

**Next topic:**[TestFileName](../../TA_Automation/Topics/abtf_TestFileName.html)

