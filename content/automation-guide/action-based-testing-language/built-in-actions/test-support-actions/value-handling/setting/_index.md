--- 
title: "setting"
linktitle: "setting"
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_setting.html
keywords: "setting, change default settings, adjust settings, alter settings"
---

## Description

Set the value of a TestArchitect built-in setting.

## Arguments

-   **setting**

    Built-in setting name.

-   **value**

    Value to set.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Settings are used by the TestArchitect engine to steer the automation process. A list of available built-in settings may be found in [Built-in settings](Built_in_settings.html).
-   The setting action allows you to change the value of a built-in setting “on-the-fly” \(that is, during [run time](/TA_Glossary/Topics/glossaryRunTime.html)\). It should be noted that you can also set built-in setting values prior to the test run, through the [**Startup Settings**](aut_configuring_built_in_settings.html) panel of the [Execute Test](/TA_Help/Topics/Test_exec_test_execution.html) dialog box.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images//Images/bia_setting_pgm.png)

**Result**

![](/images//Images/bia_setting_res.png)

**Parent topic:**[Value Handling](/TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[set variable](/TA_Automation/Topics/bia_set_variable.html)

