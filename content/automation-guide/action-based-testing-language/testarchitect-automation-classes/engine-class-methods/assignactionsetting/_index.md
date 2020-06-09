--- 
title: "AssignActionSetting"
linktitle: "AssignActionSetting"
weight: 16
aliases: 
    - /TA_Automation/Topics/abtf_AssignActionSetting.html
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

-   See the notes at [ActionSetting](abtf_ActionSetting.html).

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Assign](/TA_Automation/Topics/abtf_Assign.html)

**Next topic:**[AssignElementSetting](/TA_Automation/Topics/abtf_AssignElementSetting.html)

