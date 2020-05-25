--- 
title: "delete file"
linktitle: "delete file"
aliases: 
    - /TA_Automation/Topics/bia_delete_file.html
---
# delete file {#bia_delete_file .reference}

## Description { .section}

Delete a file.

## Arguments { .section}

file
:   Full path of target file.

force
:   \(Optional\) Force the file to be deleted \(see note\).

:   Allowable values:

    true
    :   \(Default\) Force deletion, if necessary.

    false
    :   Do not attempt to force deletion.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   Forced deletion is only successful under certain circumstances in which the program would otherwise have insufficient permission for deletion \(e.g., a read-only file\). However, delete file does not force deletion of a file that has been locked by another process.
-   A warning is issued if the file specified in file is not found to exist.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_delete_file_pgm.png)

**Result**

![](../Images/bia_delete_file_res.png)

**Parent topic:**[File and Folder](../../TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[create folder](../../TA_Automation/Topics/bia_create_folder.html)

**Next topic:**[delete folder](../../TA_Automation/Topics/bia_delete_folder.html)

**Related information**  


[copy file](../../TA_Automation/Topics/bia_copy_file.html)

[move file](../../TA_Automation/Topics/bia_move_file.html)

[rename file](../../TA_Automation/Topics/bia_rename_file.html)

