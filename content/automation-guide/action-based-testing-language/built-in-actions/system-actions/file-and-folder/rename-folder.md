--- 
title: "rename folder"
linktitle: "rename folder"
description: "Description Rename a folder. Arguments folder Full path of target folder. new name New folder name. Valid contexts This action may be used within the following project items: test modules and ..."
weight: 20
aliases: 
    - /TA_Automation/Topics/bia_rename_folder.html
keywords: "built-in actions, rename folder, rename folder (action), rename folder, change folder name"
---

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_rename_folder_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_rename_folder_res.png)




**Related information**  


[copy folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/copy-folder)

[create folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/create-folder)

[delete folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/delete-folder)

[move folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/move-folder)

