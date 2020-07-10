--- 
title: "ElementSetting"
linktitle: "ElementSetting"
description: "Syntax string ElementSetting(string interface, string entity, string element, string setting) Description Get a setting (attribute) of an interface element. Parameters interface Name of the interface ..."
weight: 36
aliases: 
    - /TA_Automation/Topics/abtf_ElementSetting.html
keywords: "ABT Library Functions, ElementSetting, ElementSetting (ABT library function)"
---

## Syntax

`string ElementSetting(string interface, string entity, string element, string setting)`

## {{< expand >}} Description

Get a setting \(attribute\) of an interface element.

## {{< expand >}} Parameters

-   **interface**

    Name of the interface to which the element belongs.

-   **entity**

    Interface entity containing the element.

-   **element**

    Name of the interface element.

-   **setting**

    The setting for which the value is to be retrieved.


## {{< expand >}} Return Value

The value is returned for the setting as it is defined in the Interface Definitions. If any of the parameters is not defined, a diagnostic is issued and an empty string is returned.

## {{< expand >}} Notes

-   Typical examples settings are "name", "gui id", "class", "row", "column", etc. Which settings are relevant fully depends on the interface and the specific properties of the specific interface element.




