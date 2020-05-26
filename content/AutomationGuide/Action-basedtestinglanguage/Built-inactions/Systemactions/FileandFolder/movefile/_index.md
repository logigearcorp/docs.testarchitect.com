--- 
title: "move file"
linktitle: "move file"
weight: 17
aliases: 
    - /TA_Automation/Topics/bia_move_file.html
---
# move file {#bia_move_file .reference}

## Description { .section}

Move a specified file to a new folder.

## Arguments { .section}

file
:   Full path of target file.

new directory
:   Full path of the destination folder.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   An existing file in the destination folder with the same name as the file being copied is automatically overwritten, with no notice or warning.
-   Full paths both to the source file and the destination folder must be specified.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_move_file_pgm.png)

**Result**

![](../Images/bia_move_file_res.png)

**Parent topic:**[File and Folder](../../TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[get text file](../../TA_Automation/Topics/bia_get_text_file.html)

**Next topic:**[move folder](../../TA_Automation/Topics/bia_move_folder.html)

**Related information**  


[copy file](../../TA_Automation/Topics/bia_copy_file.html)

[delete file](../../TA_Automation/Topics/bia_delete_file.html)

[rename file](../../TA_Automation/Topics/bia_rename_file.html)

