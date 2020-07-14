--- 
title: "getsetting"
linktitle: "getsetting"
description: "Retrieve the current value of a built-in or a user-defined setting."
weight: 2
aliases: 
    - /TA_Automation/Topics/Expressions_functions_getsetting.html
keywords: "getsetting function, built-in setting, user-defined setting, getsetting (function)"
---

Retrieve the current value of a built-in or a user-defined setting.

## Syntax

`getsetting(string name, string type, string default)`

## Parameters

-   **name**

    Name of an existing built-in setting or a user-defined setting.

-   **type**

    Type of this setting.

    Allowable values:

    -   built-in
    -   user defined
-   **default**

    Default value to be returned when this setting was not assigned a value.


## Return Value

The value of the setting specified in name.

## Notes

-   default parameter: If the specified setting already has a value, this parameter has no effect. While a value is optional, you must at least specify an empty string. For example: \#getsetting\("language", "user defined", ""\)
-   Alternatively, you can use [get setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/get-setting) built-in action to achieve the same functionality.

## Example

Suppose that you have a user-defined setting named language defined in the Execute Test dialog box \([learn more](/user-guide/test-execution/startup-settings/creating-a-new-user-defined-setting)\). The language setting is used to navigate to the appropriate web site. And its default value is English.

![](/images/TA_Automation/Images/language_user_defined_setting.png)

While you are developing test procedures, you can use the getsetting function to obtain the current value of the language setting to determine which regional site to navigated to.

Test Lines

![](/images/TA_Automation/Images/automationguide_stringfunction_getstring_pgm.png)




**Related information**  


[Startup settings](/user-guide/test-execution/startup-settings/)
