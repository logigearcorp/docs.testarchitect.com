--- 
title: "EntitySetting"
linktitle: "EntitySetting"
weight: 39
aliases: 
    - /TA_Automation/Topics/abtf_EntitySetting.html
---
# EntitySetting {#abtf_EntitySetting .reference}

## Syntax

`string EntitySetting(string interface, string entity, string setting)`

## Description { .section}

Get an attribute of the entity \(like the title of a window\)

## Parameters { .section}

interface
:   Name of the interface to which the element belongs.

entity
:   Interface entity containing the element.

setting
:   The setting for which the value is to be retrieved.

## Return Value { .section}

The value is returned for the setting as it is defined in the Interface Definitions. If any of the parameters is not defined, a diagnostic is issued and an empty string is returned.

## Notes { .section}

-   Typical examples of entity settings are "title" for a window or "frame" for part of a web page.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[EndRun](../../TA_Automation/Topics/abtf_EndRun.html)

**Next topic:**[Execute](../../TA_Automation/Topics/abtf_Execute.html)

