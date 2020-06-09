--- 
title: "copy file"
linktitle: "copy file"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_copy_file.html
keywords: copy file
---

## Description

Copy a specified file to a different folder.

## Arguments

-   **file**

    Full path of target file.

-   **new directory**

    Full path of destination folder for the copy.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   An existing file, if any, in the destination folder having the same name as the file being copied is automatically overwritten, with no notice or warning.
-   Full paths both to the source file and the destination folder must be specified.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_copy_file_pgm.png)

**Result**

![](/images//Images/bia_copy_file_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[check folder not exists](/TA_Automation/Topics/bia_check_folder_not_exists.html)

**Next topic:**[copy folder](/TA_Automation/Topics/bia_copy_folder.html)

**Related information**  


[delete file](/TA_Automation/Topics/bia_delete_file.html)

[move file](/TA_Automation/Topics/bia_move_file.html)

[rename file](/TA_Automation/Topics/bia_rename_file.html)

