--- 
title: "GetSetting"
linktitle: "GetSetting"
description: "Syntax string GetSetting(string settingName, string settingType, string defaultValue) Description Retrieve the current value of a user-defined setting or a built-in setting. Parameters settingName ..."
weight: 46
aliases: 
    - /TA_Automation/Topics/abtf_GetSetting.html
keywords: "ABT Library Functions, GetSetting, GetSetting (ABT library function)"
---

## Syntax

`string GetSetting(string settingName, string settingType, string defaultValue)`

## Description

Retrieve the current value of a [user-defined](/user-guide/test-execution/startup-settings/creating-a-new-user-defined-setting) setting or a [built-in](/automation-guide/action-based-testing-language/built-in-settings/) setting.

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




**Related information**  


[Startup settings](/user-guide/test-execution/startup-settings/)

