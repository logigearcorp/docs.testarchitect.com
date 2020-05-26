--- 
title: "move folder"
linktitle: "move folder"
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_move_folder.html
---
# move folder {#bia_move_folder .reference}

## Description { .section}

Move a folder to a new location.

## Arguments { .section}

folder
:   Full path of target folder.

new directory
:   Full path of destination folder.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   An existing folder in the destination with the same name as the one being moved is automatically overwritten, with no notice or warning.
-   Full paths both to the source and destination folders must be specified.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_move_folder_pgm.png)

**Result**

![](../Images/bia_move_folder_res.png)

**Parent topic:**[File and Folder](../../TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[move file](../../TA_Automation/Topics/bia_move_file.html)

**Next topic:**[rename file](../../TA_Automation/Topics/bia_rename_file.html)

**Related information**  


[copy folder](../../TA_Automation/Topics/bia_copy_folder.html)

[create folder](../../TA_Automation/Topics/bia_create_folder.html)

[delete folder](../../TA_Automation/Topics/bia_delete_folder.html)

[rename folder](../../TA_Automation/Topics/bia_rename_folder.html)

