--- 
title: "CreateInterfaceClass"
linktitle: "CreateInterfaceClass"
description: "Syntax integer CreateInterfaceClass (string classname) Description Create a class for elements in the interface. Parameters classname Name of the class to be created. Return Value Return 1 if the call ..."
weight: 26
aliases: 
    - /TA_Automation/Topics/abtf_CreateInterfaceClass.html
keywords: "ABT Library Functions, CreateInterfaceClass, CreateInterfaceClass (ABT library function)"
---

## Syntax

`integer CreateInterfaceClass (string classname)`

## Description

Create a class for elements in the interface.

## Parameters

-   **classname**

    Name of the class to be created.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Classes can be defined at will to describe interface behavior and to assign low level actions to interface elements. Typical examples in a windows interface are "edit" for edit boxes and "button" for push buttons.
-   This function can only be used after OpenInterface or CreateInterface, or after a successful intake of an file with Interface Definitions.
-   This function is analogous to the built-in action "interface entity class". The use of this function is not recommended when TestArchitect is used to control the automation.




