--- 
title: "CreateInterfaceEntity"
linktitle: "CreateInterfaceEntity"
weight: 28
aliases: 
    - /TA_Automation/Topics/abtf_CreateInterfaceEntity.html
---
# CreateInterfaceEntity {#abtf_CreateInterfaceEntity .reference}

## Syntax

`integer CreateInterfaceEntity (string entity)`

## Description { .section}

Define an entity in the current interface, like a window or a message

## Parameters { .section}

entity
:   Name of the interface entity.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   Typical examples of entity settings are "title" for a window or "frame" for part of a web page.
-   This function can only be used after OpenInterface or CreateInterface, or after a successful intake of an file with Interface Definitions.
-   This function is analogous to the built-in action "interface entity". The use of this function is not recommended when TestArchitect is used to control the automation.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[CreateInterfaceElement](../../TA_Automation/Topics/abtf_CreateInterfaceElement.html)

**Next topic:**[Date](../../TA_Automation/Topics/abtf_Date.html)

