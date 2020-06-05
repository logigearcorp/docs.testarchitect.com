--- 
title: "does folder exist"
linktitle: "does folder exist"
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_does_folder_exist.html
---
keyword: [check whether file exist or not, check existence and nonexistence of file]
---

# does folder exist

## Description

Return a Boolean value to indicate whether the specified folder is found.

## Arguments

-   **folder**

    Full path of target folder.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Folder found.

    -   **0**

        Folder not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_does_folder_exist_pgm.png)

**Result**

![](/images//Images/bia_does_folder_exist_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[does file exist](/TA_Automation/Topics/bia_does_file_exist.html)

**Next topic:**[get file attributes](/TA_Automation/Topics/bia_get_file_attributes.html)

**Related information**  


[check folder exists](/TA_Automation/Topics/bia_check_folder_exists.html)

[check folder not exists](/TA_Automation/Topics/bia_check_folder_not_exists.html)

