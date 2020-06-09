--- 
title: "rename folder"
linktitle: "rename folder"
weight: 20
aliases: 
    - /TA_Automation/Topics/bia_rename_folder.html
---
keyword: [rename folder, change folder name]
---

# rename folder

## Description

Rename a folder.

## Arguments

-   **folder**

    Full path of target folder.

-   **new name**

    New folder name.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   For the new name argument, only a folder name is required, not a full path.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_rename_folder_pgm.png)

**Result**

![](/images//Images/bia_rename_folder_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[rename file](/TA_Automation/Topics/bia_rename_file.html)

**Next topic:**[set text file](/TA_Automation/Topics/bia_set_text_file.html)

**Related information**  


[copy folder](/TA_Automation/Topics/bia_copy_folder.html)

[create folder](/TA_Automation/Topics/bia_create_folder.html)

[delete folder](/TA_Automation/Topics/bia_delete_folder.html)

[move folder](/TA_Automation/Topics/bia_move_folder.html)

