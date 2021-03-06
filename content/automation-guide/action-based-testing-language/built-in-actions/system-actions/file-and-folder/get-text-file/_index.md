--- 
title: "get text file"
linktitle: "get text file"
weight: 16
aliases: 
    - /TA_Automation/Topics/bia_get_text_file.html
keywords: "get text file, retrieve text file"
---

## Description

Retrieve the contents of a text or word-processing file.

## Arguments

-   **file**

    Full path of target file.

-   **variable**

    Variable to receive the returned contents.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   On Windows: In order to specify [mapping network drives](http://www.dummies.com/computers/operating-systems/windows-7/how-to-map-a-network-folder-in-windows-7/), please disable User Account Control \(UAC\).
-   File extensions are not taken into consideration, as long as they are text or word processing \(.doc and .rtf\) files.
-   In order for TestArchitect to read .doc and .rtf format files, you must have Microsoft Word 2003 or later installed on your computer.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_get_text_file_pgm.png)

**Result**

![](/images//Images/bia_get_text_file_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[get file size](/TA_Automation/Topics/bia_get_file_size.html)

**Next topic:**[move file](/TA_Automation/Topics/bia_move_file.html)

