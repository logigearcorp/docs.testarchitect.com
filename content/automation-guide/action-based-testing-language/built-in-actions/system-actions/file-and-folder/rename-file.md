--- 
title: "rename file"
linktitle: "rename file"
description: "Description Rename a file. Arguments file Full path of target file. new name New name to be assigned to the file. Valid contexts This action may be used within the following project items: test ..."
weight: 19
aliases: 
    - /TA_Automation/Topics/bia_rename_file.html
keywords: "built-in actions, rename file, rename file (action), rename file, change filename"
---

## {{< expand >}} Description

Rename a file.

## {{< expand >}} Arguments

-   **file**

    Full path of target file.

-   **new name**

    New name to be assigned to the file.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   For the new name argument, only a file name is required, not a full path.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_rename_file_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_rename_file_res.png)




**Related information**  


[copy file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/copy-file)

[delete file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/delete-file)

[move file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/move-file)

