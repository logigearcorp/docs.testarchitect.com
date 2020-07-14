--- 
title: "AssignActionSetting"
linktitle: "AssignActionSetting"
description: "Syntax integer AssignActionSetting(string actionname, string settingname, string settingvalue) Description Assign a setting to an action word. Parameters actionname Name of the action. settingname A ..."
weight: 16
aliases: 
    - /TA_Automation/Topics/abtf_AssignActionSetting.html
keywords: "ABT Library Functions, AssignActionSetting, AssignActionSetting (ABT library function)"
---

## Syntax

`integer AssignActionSetting(string actionname, string settingname, string settingvalue)`

## Description

Assign a setting to an action word.

## Parameters

-   **actionname**

    Name of the action.

-   **settingname**

    A setting, e.g., "description".

-   **settingvalue**

    Value of the setting.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   See the notes at [ActionSetting](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/actionsetting).




