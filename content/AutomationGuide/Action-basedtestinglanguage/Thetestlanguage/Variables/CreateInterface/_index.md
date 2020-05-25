--- 
title: "CreateInterface"
linktitle: "CreateInterface"
aliases: 
    - /TA_Automation/Topics/abtf_CreateInterface.html
---
# CreateInterface {#abtf_CreateInterface .reference}

## Syntax

`integer CreateInterface (string name, string filename)`

## Description { .section}

Create a new interface, like "windows" for gui's or "messages" for a message interface. If the filename parameter is not empty it specifies a file associated with the interface, where by default the definitions will be saved.

## Parameters { .section}

name
:   Name for the new interface.

filename
:   Name of a file associated with the interface, the default file to save the interface.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   This function is analogous to the built-in action "create interface". The use of either the action or this function is not recommended when TestArchitect is used to control the automation.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[CloseLog](../../TA_Automation/Topics/abtf_CloseLog.html)

**Next topic:**[CreateInterfaceClass](../../TA_Automation/Topics/abtf_CreateInterfaceClass.html)

