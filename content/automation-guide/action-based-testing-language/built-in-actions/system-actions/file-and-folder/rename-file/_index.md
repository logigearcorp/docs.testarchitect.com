--- 
title: "rename file"
linktitle: "rename file"
description: "Description Rename a file. Arguments file Full path of target file. new name New name to be assigned to the file. Valid contexts This action may be used within the following project items: test ..."
weight: 19
aliases: 
    - /TA_Automation/Topics/bia_rename_file.html
keywords: "built-in actions, rename file, rename file (action), rename file, change filename"
---

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
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_rename_file_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_rename_file_res.png)




**Related information**  


[copy file](/TA_Automation/Topics/bia_copy_file.html)

[delete file](/TA_Automation/Topics/bia_delete_file.html)

[move file](/TA_Automation/Topics/bia_move_file.html)

