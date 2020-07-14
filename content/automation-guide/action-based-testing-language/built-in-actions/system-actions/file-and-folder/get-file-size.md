--- 
title: "get file size"
linktitle: "get file size"
description: "Description Retrieve the file size of a specified file. Arguments file Full path of target file. variable (Optional) Variable to receive the returned value . (Value is file size in bytes.) Valid ..."
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_get_file_size.html
keywords: "built-in actions, get file size, get file size (action), get file size"
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
    -   Windows platform: Use backward slashes as separators for the path.
    -   Linux platform: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

Action Lines

![](/images/TA_Automation/Images/bia_get_file_size_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_file_size_res.png)



