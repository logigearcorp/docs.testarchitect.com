--- 
title: "SaveInterfaces"
linktitle: "SaveInterfaces"
description: "Syntax integer SaveInterfaces (string filename) Description Save all Interface Definitions to either their associated files or, if the filename parameter is non-empty, combined in one file. Parameters ..."
weight: 77
aliases: 
    - /TA_Automation/Topics/abtf_SaveInterfaces.html
keywords: "ABT Library Functions, SaveInterfaces, SaveInterfaces (ABT library function)"
---

## Syntax

`integer SaveInterfaces (string filename)`

## Description

Save all Interface Definitions to either their associated files or, if the filename parameter is non-empty, combined in one file.

## Parameters

-   **filename**

    Optional name of a file for the Interface Definitions.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   This function will save all Interface Definitions. When a file was associated with an interface, using CreateInterface, and the filename parameter for SaveInterfaces is empty, the interface will be saved in its associated file.
-   This function is analogous to the built-in action "save interfaces". The use of this function is not recommended when TestArchitect is used to control the automation.




