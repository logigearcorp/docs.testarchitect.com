--- 
title: "CreateInterfaceElement"
linktitle: "CreateInterfaceElement"
description: "Syntax integer CreateInterfaceElement (string element) Description Define an element in the current entity, like a control in a window. Parameters element Name of the interface element. Return Value ..."
weight: 27
aliases: 
    - /TA_Automation/Topics/abtf_CreateInterfaceElement.html
keywords: "ABT Library Functions, CreateInterfaceElement, CreateInterfaceElement (ABT library function)"
---

## Syntax

`integer CreateInterfaceElement (string element)`

## Description

Define an element in the current entity, like a control in a window.

## Parameters

-   **element**

    Name of the interface element.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Typical examples of element settings are "name", "gui id", "class", "row", "column", etc. Which settings are relevant fully depends on the interface and the specific properties of the specific interface element.
-   This function can only be used after OpenInterface or CreateInterface and CreateInterfaceEntity, or alternatively after a successful intake of an file with Interface Definitions.
-   This function is analogous to the built-in action "interface element". The use of this function is not recommended when TestArchitect is used to control the automation.




