--- 
title: "CreateInterfaceEntity"
linktitle: "CreateInterfaceEntity"
description: "Syntax integer CreateInterfaceEntity (string entity) Description Define an entity in the current interface, like a window or a message Parameters entity Name of the interface entity. Return Value ..."
weight: 28
aliases: 
    - /TA_Automation/Topics/abtf_CreateInterfaceEntity.html
keywords: "ABT Library Functions, CreateInterfaceEntity, CreateInterfaceEntity (ABT library function)"
---

## Syntax

`integer CreateInterfaceEntity (string entity)`

## Description

Define an entity in the current interface, like a window or a message

## Parameters

-   **entity**

    Name of the interface entity.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Typical examples of entity settings are "title" for a window or "frame" for part of a web page.
-   This function can only be used after OpenInterface or CreateInterface, or after a successful intake of an file with Interface Definitions.
-   This function is analogous to the built-in action "interface entity". The use of this function is not recommended when TestArchitect is used to control the automation.




