--- 
title: "ExecuteScript"
linktitle: "ExecuteScript"
aliases: 
    - /TA_Automation/Topics/abt_Entity_executeScript.html
---
# ExecuteScript {#executescript .reference}

## Syntax

`long ExecuteScript(string script, string language)`

## Description {#section.desc .section}

Execute JavaScript code of a specified web page, or inline JavaScript.

## Parameters {#section.params .section}

script
:   The code to be executed.

language
:   The language in which the code is executed. The language defaults to JScript.

:   Note that, TestArchitect only supports JavaScript

## Return Value {#section.return .section}

Return 0 if successful; otherwise, -1.

## Applicable platforms { .section}

-   Web applications

## Notes {#section_zxd_nzp_s1b .section}

-   This function is currently supported only by the C\# and Java harnesses.

**Parent topic:**[AbtEntity](../../TA_Automation/Topics/abt_AbtEntity.html)

**Previous topic:**[DragMouse](../../TA_Automation/Topics/abt_DragMouse.html)

**Next topic:**[ExecuteJS](../../TA_Automation/Topics/abt_ExecuteJS.html)

