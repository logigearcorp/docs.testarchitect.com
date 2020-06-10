--- 
title: "AddArgument"
linktitle: "AddArgument"
weight: 4
aliases: 
    - /TA_Automation/Topics/abtf_AddArgument.html
---

## Syntax

`integer AddArgument(string name, string value)`

## Description

Add an argument to the current action line.

## Parameters

-   **name**

    Name of the argument.

-   **value**

    Value of the argument.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Use this function only in combination with [NewActionLine\(\)](/TA_Automation/Topics/abtf_NewActionLine.html).

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ActionSetting](/TA_Automation/Topics/abtf_ActionSetting.html)

**Next topic:**[AddBusinessDays](/TA_Automation/Topics/abtf_AddBusinessDays.html)

