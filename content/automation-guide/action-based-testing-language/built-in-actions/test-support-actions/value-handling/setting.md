--- 
title: "setting"
linktitle: "setting"
description: "Description Set the value of a TestArchitect built-in setting. Arguments setting Built-in setting name. value Value to set. Valid contexts This action may be used within the following project items: ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_setting.html
keywords: "built-in actions, setting, setting (action), iOS (action), setting, Android (action), change default settings, adjust settings, alter settings"
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

-   Settings are used by the TestArchitect engine to steer the automation process. A list of available built-in settings may be found in [Built-in settings](/automation-guide/action-based-testing-language/built-in-settings/).
-   The setting action allows you to change the value of a built-in setting “on-the-fly” \(that is, during [run time](/user-guide/support/glossary-of-terms/run-time)\). It should be noted that you can also set built-in setting values prior to the test run, through the [**Startup Settings**](/user-guide/test-execution/startup-settings/creating-a-startup-setting-for-a-built-in-setting) panel of the [Execute Test](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) dialog box.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_setting_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_setting_res.png)



