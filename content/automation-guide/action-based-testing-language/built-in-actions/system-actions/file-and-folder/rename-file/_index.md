--- 
title: "-"
linktitle: "rename file"
weight: 19
aliases: 
    - /TA_Automation/Topics/bia_rename_file.html
---
keyword: [rename file, change filename]
---

# rename file

## Description

Rename a file.

## Arguments

-   **file**

    Full path of target file.

-   **new name**

    New name to be assigned to the file.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   For the new name argument, only a file name is required, not a full path.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_rename_file_pgm.png)

**Result**

![](/images//Images/bia_rename_file_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[move folder](/TA_Automation/Topics/bia_move_folder.html)

**Next topic:**[rename folder](/TA_Automation/Topics/bia_rename_folder.html)

**Related information**  


[copy file](/TA_Automation/Topics/bia_copy_file.html)

[delete file](/TA_Automation/Topics/bia_delete_file.html)

[move file](/TA_Automation/Topics/bia_move_file.html)

