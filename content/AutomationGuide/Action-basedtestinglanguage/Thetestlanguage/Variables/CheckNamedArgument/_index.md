--- 
title: "CheckNamedArgument"
linktitle: "CheckNamedArgument"
aliases: 
    - /TA_Automation/Topics/abtf_CheckNamedArgument.html
---
# CheckNamedArgument {#abtf_CheckNamedArgument .reference}

## Syntax

`integer CheckNamedArgument(string argname, string recorded)`

## Description { .section}

Execute a check comparing a recorded value with a named argument in the action line.

## Parameters { .section}

argname
:   Name of the argument in the action line that contains the expected value.

recorded
:   Recorded value, the value that is to be compared with the expected value.

## Return Value { .section}

The function returns 1 if the check passed or 0 if it failed.

## Notes { .section}

-   The expected string \(in the argument indicated by the argname parameter\) and recorded string are compared. If they are equal the check is administered as passed, otherwise it is treated as failed.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[CheckArgument](../../TA_Automation/Topics/abtf_CheckArgument.html)

**Next topic:**[CloseLog](../../TA_Automation/Topics/abtf_CloseLog.html)

