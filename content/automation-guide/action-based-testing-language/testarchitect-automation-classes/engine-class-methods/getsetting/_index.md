--- 
title: "GetSetting"
linktitle: "GetSetting"
weight: 46
aliases: 
    - /TA_Automation/Topics/abtf_GetSetting.html
---

## Syntax

`string GetSetting(string settingName, string settingType, string defaultValue)`

## Description

Retrieve the current value of a [user-defined](aut_defining_user_defined_settings.html) setting or a [built-in](Built_in_settings.html) setting.

## Parameters

-   **settingName**

    Name of a built-in or user-defined setting.

-   **settingType**

    Type of this setting.

    Allowable values:

    -   built-in
    -   user defined
-   **defaultValue**

    Default value to be returned if the setting has no value. \(See Notes\)


## Return Value

String containing current value of the specified setting or, in the event that the setting is empty, the value of the defaultValue.

## Notes

-   defaultValue parameter: If the specified setting already has a defined value, this parameter has no effect. While a value is optional, you must at least specify an empty string. For example: GetSetting\("language", "user defined", ""\)

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[getEntityInformation](/TA_Automation/Topics/abtf_getEntityInformation.html)

**Next topic:**[HandleUnknown](/TA_Automation/Topics/abtf_HandleUnknown.html)

**Related information**  


[Startup settings](/TA_Automation/Topics/aut_startup_settings.html)

