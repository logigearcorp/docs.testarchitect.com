--- 
title: "Execute"
linktitle: "Execute"
aliases: 
    - /TA_Automation/Topics/abtf_Execute.html
---
# Execute {#abtf_Execute .reference}

## Syntax

`integer Execute(string command,string parameters, string directory, integer wait)`

## Description { .section}

Execute a command using the OS's built mechanism for that.

## Parameters { .section}

command
:   The command \(program\) to be executed.

parameters
:   Any \(command line\) parameters for the command.

directory
:   Working folder for the command.

wait
:   Whether or not the function should wait for the command to finish.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   The exact behavior of this function can differ slightly between operating systems.
-   If wait is unequal to zero, the function will attempt to wait for the command to finish.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[EntitySetting](../../TA_Automation/Topics/abtf_EntitySetting.html)

**Next topic:**[ExecuteNow](../../TA_Automation/Topics/abtf_ExecuteNow.html)

