--- 
title: "ExecuteScript"
linktitle: "ExecuteScript"
weight: 7
aliases: 
    - /TA_Automation/Topics/abt_Entity_executeScript.html
---
keyword: [executescript, abtentity executescript, execute javascript, execute inline javascript, run javascript]
---

# ExecuteScript

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

**Parent topic:**[AbtEntity](/TA_Automation/Topics/abt_AbtEntity.html)

**Previous topic:**[DragMouse](/TA_Automation/Topics/abt_DragMouse.html)

**Next topic:**[ExecuteJS](/TA_Automation/Topics/abt_ExecuteJS.html)

