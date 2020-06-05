--- 
title: "check file exists"
linktitle: "check file exists"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_file_exists.html
---
keyword: [check existence of file, check if file exists, check whether file exists, verify existence of file, verify if file exists]
---

# check file exists

## Description

Check for the existence of a specified file. Result is Passed ifthe file is found ; otherwise Failed.

## Arguments

-   **file**

    Full path of target file.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_check_file_exists_pgm.png)

**Result**

![](/images//Images/bia_check_file_exists_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[change folder attributes](/TA_Automation/Topics/bia_change_folder_attributes.html)

**Next topic:**[check file not exists](/TA_Automation/Topics/bia_check_file_not_exists.html)

**Related information**  


[check file not exists](/TA_Automation/Topics/bia_check_file_not_exists.html)

[does file exist](/TA_Automation/Topics/bia_does_file_exist.html)

