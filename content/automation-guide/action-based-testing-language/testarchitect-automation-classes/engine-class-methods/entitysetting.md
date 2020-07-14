--- 
title: "EntitySetting"
linktitle: "EntitySetting"
description: "Syntax string EntitySetting(string interface, string entity, string setting) Description Get an attribute of the entity (like the title of a window) Parameters interface Name of the interface to which ..."
weight: 39
aliases: 
    - /TA_Automation/Topics/abtf_EntitySetting.html
keywords: "ABT Library Functions, EntitySetting, EntitySetting (ABT library function)"
---

## Syntax

`string EntitySetting(string interface, string entity, string setting)`

## Description

Get an attribute of the entity \(like the title of a window\)

## Parameters

-   **interface**

    Name of the interface to which the element belongs.

-   **entity**

    Interface entity containing the element.

-   **setting**

    The setting for which the value is to be retrieved.


## Return Value

The value is returned for the setting as it is defined in the Interface Definitions. If any of the parameters is not defined, a diagnostic is issued and an empty string is returned.

## Notes

-   Typical examples of entity settings are "title" for a window or "frame" for part of a web page.




