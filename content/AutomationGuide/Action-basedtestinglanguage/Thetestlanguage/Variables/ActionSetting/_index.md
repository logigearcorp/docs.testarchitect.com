--- 
title: "ActionSetting"
linktitle: "ActionSetting"
aliases: 
    - /TA_Automation/Topics/abtf_ActionSetting.html
---
# ActionSetting {#abtf_ActionSetting .reference}

## Syntax

`string ActionSetting(string actionname, string settingname, string defaultvalue)`

## Description { .section}

Get the setting of an action word

## Parameters { .section}

actionname
:   Name of the action for which the setting is retrieved.

settingname
:   Name of the setting.

defaultvalue
:   Value to be returned by the function if the action or setting doesn't exist.

## Return Value { .section}

The value of the setting or, in case either the action or the setting does not exist, the value of defaultvalue .

## Notes { .section}

-   Action settings can be used to tweak the handling of actions, like extra reporting or logging.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ActionScriptFind](../../TA_Automation/Topics/abtf_ActionScriptFind.html)

**Next topic:**[AddArgument](../../TA_Automation/Topics/abtf_AddArgument.html)

