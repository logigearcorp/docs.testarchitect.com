--- 
title: "ExecuteScript"
linktitle: "ExecuteScript"
description: "Syntax long ExecuteScript(string script, string language) Description Execute JavaScript code of a specified web page, or inline JavaScript. Parameters script The code to be executed. language The ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/abt_Entity_executeScript.html
keywords: "methods of abt, ExecuteScript, ExecuteScript (AbtEntity), AbtEntity, executescript, abtentity executescript, execute javascript, execute inline javascript, run javascript"
---

## Syntax

`long ExecuteScript(string script, string language)`

## Description

Execute JavaScript code of a specified web page, or inline JavaScript.

## Parameters

-   **script**

    The code to be executed.

-   **language**

    The language in which the code is executed. The language defaults to JScript.

    Note that, TestArchitect only supports JavaScript


## Return Value

Return 0 if successful; otherwise, -1.

## Applicable platforms

-   Web applications

## Notes

-   This function is currently supported only by the C\# and Java harnesses.




