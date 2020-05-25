--- 
title: "AssignActionSetting"
linktitle: "AssignActionSetting"
aliases: 
    - /TA_Automation/Topics/abtf_AssignActionSetting.html
---
# AssignActionSetting {#abtf_AssignActionSetting .reference}

## Syntax

`integer AssignActionSetting(string actionname, string settingname, string settingvalue)`

## Description { .section}

Assign a setting to an action word.

## Parameters { .section}

actionname
:   Name of the action.

settingname
:   A setting, e.g., "description".

settingvalue
:   Value of the setting.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   See the notes at [ActionSetting](abtf_ActionSetting.html).

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Assign](../../TA_Automation/Topics/abtf_Assign.html)

**Next topic:**[AssignElementSetting](../../TA_Automation/Topics/abtf_AssignElementSetting.html)

