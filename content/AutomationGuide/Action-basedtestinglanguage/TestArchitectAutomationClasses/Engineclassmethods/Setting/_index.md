--- 
title: "Setting"
linktitle: "Setting"
weight: 82
aliases: 
    - /TA_Automation/Topics/abtf_Setting.html
---
# Setting {#abtf_Setting .reference}

## Syntax

`string Setting (string settingname, string defaultvalue)`

## Description { .section}

Get the value of a setting

## Parameters { .section}

settingname
:   A setting name.

defaultvalue
:   Value to be returned if the setting isn't defined.

## Return Value { .section}

The function returns either the value of the setting or the default value in case the setting doesn't exist.

## Notes { .section}

-   Settings have a wide variety of uses to tune the behavior of the engine or any other part of the automation. See also the chapter on settings.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[SetInterfaceAction](../../TA_Automation/Topics/abtf_SetInterfaceAction.html)

**Next topic:**[SettingBoolean](../../TA_Automation/Topics/abtf_SettingBoolean.html)

