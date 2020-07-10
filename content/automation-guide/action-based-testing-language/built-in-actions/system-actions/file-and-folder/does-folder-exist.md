--- 
title: "does folder exist"
linktitle: "does folder exist"
description: "Description Return a Boolean value to indicate whether the specified folder is found. Arguments folder Full path of target folder. variable (Optional) Variable to receive the returned Boolean value. ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_does_folder_exist.html
keywords: "built-in actions, does folder exist, does folder exist (action), Android (action), does folder exist, check whether file exist or not, check existence and nonexistence of file"
---

## {{< expand >}} Description

Return a Boolean value to indicate whether the specified folder is found.

## {{< expand >}} Arguments

-   **folder**

    Full path of target folder.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Folder found.

    -   **0**

        Folder not found.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_does_folder_exist_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_folder_exist_res.png)




**Related information**  


[check folder exists](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/check-folder-exists)

[check folder not exists](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/check-folder-not-exists)

