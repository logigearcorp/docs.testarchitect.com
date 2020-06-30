--- 
title: "delete file"
linktitle: "delete file"
description: "Description Delete a file. Arguments file Full path of target file. force (Optional) Force the file to be deleted (see note). Allowable values: true (Default) Force deletion, if necessary. false Do ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_delete_file.html
keywords: "built-in actions, delete file, delete file (action), Android (action), delete file, remove file, get rid of file"
---

## Description

Delete a file.

## Arguments

-   **file**

    Full path of target file.

-   **force**

    \(Optional\) Force the file to be deleted \(see note\).

    Allowable values:

    -   **true**

        \(Default\) Force deletion, if necessary.

    -   **false**

        Do not attempt to force deletion.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   Forced deletion is only successful under certain circumstances in which the program would otherwise have insufficient permission for deletion \(e.g., a read-only file\). However, delete file does not force deletion of a file that has been locked by another process.
-   A warning is issued if the file specified in file is not found to exist.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_delete_file_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_delete_file_res.png)




**Related information**  


[copy file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/copy-file)

[move file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/move-file)

[rename file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/rename-file)

