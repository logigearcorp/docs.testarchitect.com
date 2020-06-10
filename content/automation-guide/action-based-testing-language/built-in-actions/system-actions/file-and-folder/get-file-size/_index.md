--- 
title: "get file size"
linktitle: "get file size"
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_get_file_size.html
keywords: get file size
---

## Description

Retrieve the file size of a specified file.

## Arguments

-   **file**

    Full path of target file.

-   **variable**

    \(Optional\) Variable to receive the returned value. \(Value is file size in bytes.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_get_file_size_pgm.png)

**Result**

![](/images//Images/bia_get_file_size_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[get file attributes](/TA_Automation/Topics/bia_get_file_attributes.html)

**Next topic:**[get text file](/TA_Automation/Topics/bia_get_text_file.html)

