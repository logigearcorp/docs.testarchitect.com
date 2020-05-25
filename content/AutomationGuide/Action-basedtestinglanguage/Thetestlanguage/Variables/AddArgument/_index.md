--- 
title: "AddArgument"
linktitle: "AddArgument"
aliases: 
    - /TA_Automation/Topics/abtf_AddArgument.html
---
# AddArgument {#abtf_AddArgument .reference}

## Syntax { .section}

`integer AddArgument(string name, string value)`

## Description { .section}

Add an argument to the current action line.

## Parameters { .section}

name
:   Name of the argument.

value
:   Value of the argument.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   Use this function only in combination with [NewActionLine\(\)](abtf_NewActionLine.html).

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ActionSetting](../../TA_Automation/Topics/abtf_ActionSetting.html)

**Next topic:**[AddBusinessDays](../../TA_Automation/Topics/abtf_AddBusinessDays.html)

