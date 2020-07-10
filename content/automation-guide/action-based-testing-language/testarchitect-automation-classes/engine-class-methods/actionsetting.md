--- 
title: "ActionSetting"
linktitle: "ActionSetting"
description: "Syntax string ActionSetting(string actionname, string settingname, string defaultvalue) Description Get the setting of an action word Parameters actionname Name of the action for which the setting is ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/abtf_ActionSetting.html
keywords: "ABT Library Functions, ActionSetting, ActionSetting (ABT library function)"
---

## Syntax

`string ActionSetting(string actionname, string settingname, string defaultvalue)`

## {{< expand >}} Description

Get the setting of an action word

## {{< expand >}} Parameters

-   **actionname**

    Name of the action for which the setting is retrieved.

-   **settingname**

    Name of the setting.

-   **defaultvalue**

    Value to be returned by the function if the action or setting doesn't exist.


## {{< expand >}} Return Value

The value of the setting or, in case either the action or the setting does not exist, the value of defaultvalue .

## {{< expand >}} Notes

-   Action settings can be used to tweak the handling of actions, like extra reporting or logging.




