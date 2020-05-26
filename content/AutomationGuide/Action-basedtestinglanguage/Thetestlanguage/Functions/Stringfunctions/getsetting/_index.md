--- 
title: "getsetting"
linktitle: "getsetting"
weight: 2
aliases: 
    - /TA_Automation/Topics/Expressions_functions_getsetting.html
---
# getsetting {#reference_bmy_z2y_ht .reference}

Retrieve the current value of a built-in or a user-defined setting.

## Syntax { .section}

`getsetting(string name, string type, string default)`

## Parameters { .section}

name
:   Name of an existing built-in setting or a user-defined setting.

type
:   Type of this setting.

:   Allowable values:

    -   built-in
    -   user defined

default
:   Default value to be returned when this setting was not assigned a value.

## Return Value { .section}

The value of the setting specified in name.

## Notes { .section}

-   default parameter: If the specified setting already has a value, this parameter has no effect. While a value is optional, you must at least specify an empty string. For example: \#getsetting\("language", "user defined", ""\)
-   Alternatively, you can use [get setting](bia_get_setting.html) built-in action to achieve the same functionality.

## Example { .section}

Suppose that you have a user-defined setting named language defined in the Execute Test dialog box \([learn more](aut_defining_user_defined_settings.html)\). The language setting is used to navigate to the appropriate web site. And its default value is English.

![](../Images/language_user_defined_setting.png)

While you are developing test procedures, you can use the getsetting function to obtain the current value of the language setting to determine which regional site to navigated to.

**Test Lines**

![](../Images/automationguide_stringfunction_getstring_pgm.png)

**Parent topic:**[String functions](../../TA_Automation/Topics/Expressions_string_functions.html)

**Previous topic:**[char](../../TA_Automation/Topics/Expressions_functions_char.html)

**Next topic:**[instr](../../TA_Automation/Topics/Expressions_functions_instr.html)

**Related information**  


[Startup settings](../../TA_Automation/Topics/aut_startup_settings.html)

