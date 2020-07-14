--- 
title: "move folder"
linktitle: "move folder"
description: "Description Move a folder to a new location. Arguments folder Full path of target folder. new directory Full path of destination folder. Valid contexts This action may be used within the following ..."
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_move_folder.html
keywords: "built-in actions, move folder, move folder (action), move folder"
---

## Description

Move a folder to a new location.

## Arguments

-   **folder**

    Full path of target folder.

-   **new directory**

    Full path of destination folder.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the folder path:
    -   Windows platform: Use backward slashes as separators for the path.
    -   Linux platform: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   An existing folder in the destination with the same name as the one being moved is automatically overwritten, with no notice or warning.
-   Full paths both to the source and destination folders must be specified.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

Action Lines

![](/images/TA_Automation/Images/bia_move_folder_pgm.png)

Result

![](/images/TA_Automation/Images/bia_move_folder_res.png)




**Related information**  


[copy folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/copy-folder)

[create folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/create-folder)

[delete folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/delete-folder)

[rename folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/rename-folder)
