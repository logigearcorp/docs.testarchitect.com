--- 
title: "copy folder"
linktitle: "copy folder"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_copy_folder.html
---
keyword: copy folder
---

# copy folder

## Description

Copy a folder to a specified destination.

## Arguments

-   **source**

    Full path of target folder to be copied.

-   **destination**

    Path to new location in which the copy will be written.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Full paths to both the source folder and the destination folder must be specified.
-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   If prior to the action there exists a folder in the destination folder with the same name as the one being copied, it is automatically overwritten, with no notice or warning.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_copy_folder_pgm.png)

**Result**

![](/images//Images/bia_copy_folder_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[copy file](/TA_Automation/Topics/bia_copy_file.html)

**Next topic:**[create folder](/TA_Automation/Topics/bia_create_folder.html)

**Related information**  


[create folder](/TA_Automation/Topics/bia_create_folder.html)

[delete folder](/TA_Automation/Topics/bia_delete_folder.html)

[move folder](/TA_Automation/Topics/bia_move_folder.html)

[rename folder](/TA_Automation/Topics/bia_rename_folder.html)

