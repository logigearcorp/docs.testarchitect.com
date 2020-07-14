--- 
title: "move file"
linktitle: "move file"
description: "Description Move a specified file to a new folder. Arguments file Full path of target file. new directory Full path of the destination folder. Valid contexts This action may be used within the ..."
weight: 17
aliases: 
    - /TA_Automation/Topics/bia_move_file.html
keywords: "built-in actions, move file, move file (action), move file"
---

## Description

Move a specified file to a new folder.

## Arguments

-   **file**

    Full path of target file.

-   **new directory**

    Full path of the destination folder.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   Windows platform: Use backward slashes as separators for the path.
    -   Linux platform: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   An existing file in the destination folder with the same name as the file being copied is automatically overwritten, with no notice or warning.
-   Full paths both to the source file and the destination folder must be specified.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

Action Lines

![](/images/TA_Automation/Images/bia_move_file_pgm.png)

Result

![](/images/TA_Automation/Images/bia_move_file_res.png)




**Related information**  


[copy file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/copy-file)

[delete file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/delete-file)

[rename file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/rename-file)
