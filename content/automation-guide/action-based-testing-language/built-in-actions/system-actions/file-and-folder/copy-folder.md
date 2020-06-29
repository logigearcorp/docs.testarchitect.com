--- 
title: "copy folder"
linktitle: "copy folder"
description: "Description Copy a folder to a specified destination. Arguments source Full path of target folder to be copied. destination Path to new location in which the copy will be written. Valid contexts This ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_copy_folder.html
keywords: "built-in actions, copy folder, copy folder (action), Android (action), copy folder"
---

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_copy_folder_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_copy_folder_res.png)




**Related information**  


[create folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/create-folder)

[delete folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/delete-folder)

[move folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/move-folder)

[rename folder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/rename-folder)

