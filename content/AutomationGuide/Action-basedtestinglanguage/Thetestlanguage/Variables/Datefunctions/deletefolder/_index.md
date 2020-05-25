--- 
title: "delete folder"
linktitle: "delete folder"
aliases: 
    - /TA_Automation/Topics/bia_delete_folder.html
---
# delete folder {#bia_delete_folder .reference}

## Description { .section}

Delete a specified folder and its contents.

## Arguments { .section}

folder
:   Full path of target folder.

force
:   \(Optional\) Force the folder to be deleted \(Linux platform only; see note\).

:   Allowable values:

    true
    :   \(Default\) Force deletion, if necessary.

    false
    :   Do not attempt to force deletion.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   The delete folder action does not distinguish between folders that are empty and those that are not. The specified folder is deleted regardless of whether or not it has contents.
-   The force argument applies only to the Linux platform. Forced deletion is automatic with Windows \(that is, the forced argument is ignored.\) Forced deletion is performed on hidden or read-only folders and subfolders. However, forced deletion will not take place if the folder has been locked by another process.
-   A warning is issued if the folder specified in folder is not found to exist.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_delete_folder_pgm.png)

**Result**

![](../Images/bia_delete_folder_res.png)

**Parent topic:**[File and Folder](../../TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[delete file](../../TA_Automation/Topics/bia_delete_file.html)

**Next topic:**[does file exist](../../TA_Automation/Topics/bia_does_file_exist.html)

**Related information**  


[copy folder](../../TA_Automation/Topics/bia_copy_folder.html)

[create folder](../../TA_Automation/Topics/bia_create_folder.html)

[move folder](../../TA_Automation/Topics/bia_move_folder.html)

[rename folder](../../TA_Automation/Topics/bia_rename_folder.html)

