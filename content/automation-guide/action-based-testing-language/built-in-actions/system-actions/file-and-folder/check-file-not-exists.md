--- 
title: "check file not exists"
linktitle: "check file not exists"
description: "Description Check for the nonexistence of a specified file. Result is Passed if the file is not found ; otherwise Failed . Arguments file Full path of target file. Valid contexts This action may be ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_file_not_exists.html
keywords: "built-in actions, check file not exists, check file not exists (action), Android (action), check file not exists, check if file does not exist, check nonexistence of file, verify if file does not exist, verify nonexistence of file"
---

## {{< expand >}} Description

Check for the nonexistence of a specified file. Result is Passed ifthe file is not found ; otherwise Failed.

## {{< expand >}} Arguments

-   **file**

    Full path of target file.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_check_file_not_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_file_not_exists_res.png)




**Related information**  


[check file exists](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/check-file-exists)

[does file exist](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/does-file-exist)

