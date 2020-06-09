--- 
title: "check folder not exists"
linktitle: "check folder not exists"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_check_folder_not_exists.html
keywords: "check if folder does not exist, verify if folder does not exist, check nonexistence of folder, verify nonexistence of folder"
---

## Description

Check for the nonexistence of a specified folder. Result is Passed ifthe folder is not found ; otherwise Failed.

## Arguments

-   **folder**

    Full path of target folder.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_check_folder_not_exists_pgm.png)

**Result**

![](/images//Images/bia_check_folder_not_exists_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[check folder exists](/TA_Automation/Topics/bia_check_folder_exists.html)

**Next topic:**[copy file](/TA_Automation/Topics/bia_copy_file.html)

**Related information**  


[check folder exists](/TA_Automation/Topics/bia_check_folder_exists.html)

[does folder exist](/TA_Automation/Topics/bia_does_folder_exist.html)

