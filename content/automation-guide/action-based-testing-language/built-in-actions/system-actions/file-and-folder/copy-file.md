--- 
title: "copy file"
linktitle: "copy file"
description: "Description Copy a specified file to a different folder. Arguments file Full path of target file. new directory Full path of destination folder for the copy. Valid contexts This action may be used ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_copy_file.html
keywords: "built-in actions, copy file, copy file (action), Android (action), copy file"
---

## {{< expand >}} Description

Copy a specified file to a different folder.

## {{< expand >}} Arguments

-   **file**

    Full path of target file.

-   **new directory**

    Full path of destination folder for the copy.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   An existing file, if any, in the destination folder having the same name as the file being copied is automatically overwritten, with no notice or warning.
-   Full paths both to the source file and the destination folder must be specified.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_copy_file_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_copy_file_res.png)




**Related information**  


[delete file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/delete-file)

[move file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/move-file)

[rename file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/rename-file)

