--- 
title: "SettingBoolean"
linktitle: "SettingBoolean"
weight: 83
aliases: 
    - /TA_Automation/Topics/abtf_SettingBoolean.html
---

## Syntax

`integer SettingBoolean (string settingname, string defaultvalue)`

## Description

Get a Boolean setting.

## Parameters

-   **settingname**

    A setting name.

-   **defaultvalue**

    Value to be returned if the setting isn't defined.


## Return Value

The function returns either the value of the setting or the default value in case the setting doesn't exist.

The value is interpreted as follows: 1 if the setting value starts with 'y', 'j', 't', 's' or '1', either lower or uppercase, otherwise 0.

## Notes

-   Settings have a wide variety of uses to tune the behavior of the engine or any other part of the automation.
-   Settings can be saved in a file with SaveProfile.
-   When this file is specified as parameter in Start or is read with Intake, the saved settings are available again.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Setting](/TA_Automation/Topics/abtf_Setting.html)

**Next topic:**[ShouldAssign](/TA_Automation/Topics/abtf_ShouldAssign.html)

