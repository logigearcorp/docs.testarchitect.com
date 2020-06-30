--- 
title: "Start"
linktitle: "Start"
description: "Syntax integer Start (string filename, string directory) Description Start TestArchitect . Parameters filename File with the initial values of various AbtLibrary settings. directory The data ..."
weight: 85
aliases: 
    - /TA_Automation/Topics/abtf_Start.html
keywords: "ABT Library Functions, Start, Start (ABT library function)"
---

## Syntax

`integer Start (string filename, string directory)`

## Description

Start TestArchitect.

## Parameters

-   **filename**

    File with the initial values of various AbtLibrary settings.

-   **directory**

    The data directory, a directory that TestArchitect can use to create files in.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   This function has to be executed before any AbtLibrary function. It mainly initializes the internal data structures of TestArchitect.




