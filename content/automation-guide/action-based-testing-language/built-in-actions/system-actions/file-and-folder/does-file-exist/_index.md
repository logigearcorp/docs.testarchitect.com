--- 
title: "does file exist"
linktitle: "does file exist"
description: "Description Return a Boolean value to indicate whether a specified file exists. Arguments file Full path of target file. variable (Optional) Variable to receive the returned Boolean value. Possible ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_does_file_exist.html
keywords: "built-in actions, does file exist, does file exist (action), Android (action), does file exist, check whether file exists or not, check existence and nonexistence of file"
---

## Description

Return a Boolean value to indicate whether a specified file exists.

## Arguments

-   **file**

    Full path of target file.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        File found.

    -   **0**

        File not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_does_file_exist_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_file_exist_res.png)




**Related information**  


[check file exists](/TA_Automation/Topics/bia_check_file_exists.html)

[check file not exists](/TA_Automation/Topics/bia_check_file_not_exists.html)

