--- 
title: "check folder exists"
linktitle: "check folder exists"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_check_folder_exists.html
---
# check folder exists {#bia_check_folder_exists .reference}

## Description { .section}

Check for the existence of a specified folder. Result is Passed ifthe folder is found ; otherwise Failed.

## Arguments { .section}

folder
:   Full path of target folder.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section.notes .section}

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_check_folder_exists_pgm.png)

**Result**

![](../Images/bia_check_folder_exists_res.png)

**Parent topic:**[File and Folder](../../TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[check file not exists](../../TA_Automation/Topics/bia_check_file_not_exists.html)

**Next topic:**[check folder not exists](../../TA_Automation/Topics/bia_check_folder_not_exists.html)

**Related information**  


[check folder not exists](../../TA_Automation/Topics/bia_check_folder_not_exists.html)

[does folder exist](../../TA_Automation/Topics/bia_does_folder_exist.html)

