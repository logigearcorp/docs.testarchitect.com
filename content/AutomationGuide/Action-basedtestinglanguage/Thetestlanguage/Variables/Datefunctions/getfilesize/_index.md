--- 
title: "get file size"
linktitle: "get file size"
aliases: 
    - /TA_Automation/Topics/bia_get_file_size.html
---
# get file size {#bia_get_file_size .reference}

## Description { .section}

Retrieve the file size of a specified file.

## Arguments { .section}

file
:   Full path of target file.

variable
:   \(Optional\) Variable to receive the returned value. \(Value is file size in bytes.\)

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_get_file_size_pgm.png)

**Result**

![](../Images/bia_get_file_size_res.png)

**Parent topic:**[File and Folder](../../TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[get file attributes](../../TA_Automation/Topics/bia_get_file_attributes.html)

**Next topic:**[get text file](../../TA_Automation/Topics/bia_get_text_file.html)

