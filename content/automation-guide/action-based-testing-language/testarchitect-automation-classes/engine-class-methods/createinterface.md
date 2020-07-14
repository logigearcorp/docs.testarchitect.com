--- 
title: "CreateInterface"
linktitle: "CreateInterface"
description: "Syntax integer CreateInterface (string name, string filename) Description Create a new interface, like &#34;windows&#34; for gui's or &#34;messages&#34; for a message interface. If the filename parameter is not empty ..."
weight: 25
aliases: 
    - /TA_Automation/Topics/abtf_CreateInterface.html
keywords: "ABT Library Functions, CreateInterface, CreateInterface (ABT library function)"
---

## Syntax

`integer CreateInterface (string name, string filename)`

## Description

Create a new interface, like "windows" for gui's or "messages" for a message interface. If the filename parameter is not empty it specifies a file associated with the interface, where by default the definitions will be saved.

## Parameters

-   **name**

    Name for the new interface.

-   **filename**

    Name of a file associated with the interface, the default file to save the interface.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   This function is analogous to the built-in action "create interface". The use of either the action or this function is not recommended when TestArchitect is used to control the automation.




