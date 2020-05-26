--- 
title: "ElementSetting"
linktitle: "ElementSetting"
weight: 36
aliases: 
    - /TA_Automation/Topics/abtf_ElementSetting.html
---
# ElementSetting {#abtf_ElementSetting .reference}

## Syntax

`string ElementSetting(string interface, string entity, string element, string setting)`

## Description { .section}

Get a setting \(attribute\) of an interface element.

## Parameters { .section}

interface
:   Name of the interface to which the element belongs.

entity
:   Interface entity containing the element.

element
:   Name of the interface element.

setting
:   The setting for which the value is to be retrieved.

## Return Value { .section}

The value is returned for the setting as it is defined in the Interface Definitions. If any of the parameters is not defined, a diagnostic is issued and an empty string is returned.

## Notes { .section}

-   Typical examples settings are "name", "gui id", "class", "row", "column", etc. Which settings are relevant fully depends on the interface and the specific properties of the specific interface element.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[DivertToDefinedAction](../../TA_Automation/Topics/abtf_DivertToDefinedAction.html)

**Next topic:**[End](../../TA_Automation/Topics/abtf_End.html)

