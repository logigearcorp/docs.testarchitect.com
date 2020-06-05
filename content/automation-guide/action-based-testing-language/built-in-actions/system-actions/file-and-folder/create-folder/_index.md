--- 
title: "create folder"
linktitle: "create folder"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_create_folder.html
---
keyword: [create folder, create new folder]
---

# create folder

## Description

Create a new folder at the specified location.

## Arguments

-   **folder**

    Full path of target folder.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS platform.
-   If a folder specified by the folder argument already exists, the execution of this action is skipped.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_create_folder_pgm.png)

**Result**

![](/images//Images/bia_create_folder_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[copy folder](/TA_Automation/Topics/bia_copy_folder.html)

**Next topic:**[delete file](/TA_Automation/Topics/bia_delete_file.html)

**Related information**  


[copy folder](/TA_Automation/Topics/bia_copy_folder.html)

[delete folder](/TA_Automation/Topics/bia_delete_folder.html)

[move folder](/TA_Automation/Topics/bia_move_folder.html)

[rename folder](/TA_Automation/Topics/bia_rename_folder.html)

