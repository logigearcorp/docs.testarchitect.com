--- 
title: "AssignEntitySetting"
linktitle: "AssignEntitySetting"
description: "Syntax integer AssignEntitySetting(string interface, string entity, string setting, string value) Description Set an attribute of an element. Parameters interface Name of the interface to which the ..."
weight: 18
aliases: 
    - /TA_Automation/Topics/abtf_AssignEntitySetting.html
keywords: "ABT Library Functions, AssignEntitySetting, AssignEntitySetting (ABT library function)"
---

## Syntax

`integer AssignEntitySetting(string interface, string entity, string setting, string value)`

## Description

Set an attribute of an element.

## Parameters

-   **interface**

    Name of the interface to which the element belongs.

-   **entity**

    Interface entity containing the element.

-   **setting**

    The setting for which the value is to be retrieved.

-   **value**

    The value to be assigned to the setting.


## Return Value

The value is returned for the setting as it is defined in the Interface Definitions. If the interface or entity are not defined, the function will fail, a diagnostic will be issued and an empty string will be returned.

## Notes

-   Typical examples of entity settings are "title" for a window or "frame" for part of a web page.
-   This function is analogous to the built-in action [interface entity setting](/TA_Automation/Topics/bia_interface_entity_setting.html).




