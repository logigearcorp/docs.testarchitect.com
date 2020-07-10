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

## {{< expand >}} Description

Set an attribute of an element.

## {{< expand >}} Parameters

-   **interface**

    Name of the interface to which the element belongs.

-   **entity**

    Interface entity containing the element.

-   **setting**

    The setting for which the value is to be retrieved.

-   **value**

    The value to be assigned to the setting.


## {{< expand >}} Return Value

The value is returned for the setting as it is defined in the Interface Definitions. If the interface or entity are not defined, the function will fail, a diagnostic will be issued and an empty string will be returned.

## {{< expand >}} Notes

-   Typical examples of entity settings are "title" for a window or "frame" for part of a web page.
-   This function is analogous to the built-in action [interface entity setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/interface-handling/interface-entity-setting).




