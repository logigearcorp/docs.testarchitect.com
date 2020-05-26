--- 
title: "check file not exists"
linktitle: "check file not exists"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_file_not_exists.html
---
# check file not exists {#bia_check_file_not_exists .reference}

## Description { .section}

Check for the nonexistence of a specified file. Result is Passed ifthe file is not found ; otherwise Failed.

## Arguments { .section}

file
:   Full path of target file.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_check_file_not_exists_pgm.png)

**Result**

![](../Images/bia_check_file_not_exists_res.png)

**Parent topic:**[File and Folder](../../TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[check file exists](../../TA_Automation/Topics/bia_check_file_exists.html)

**Next topic:**[check folder exists](../../TA_Automation/Topics/bia_check_folder_exists.html)

**Related information**  


[check file exists](../../TA_Automation/Topics/bia_check_file_exists.html)

[does file exist](../../TA_Automation/Topics/bia_does_file_exist.html)

