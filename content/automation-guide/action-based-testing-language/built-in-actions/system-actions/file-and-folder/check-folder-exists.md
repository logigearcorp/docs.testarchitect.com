--- 
title: "check folder exists"
linktitle: "check folder exists"
description: "Description Check for the existence of a specified folder. Result is Passed if the folder is found ; otherwise Failed . Arguments folder Full path of target folder. Valid contexts This action may be ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_check_folder_exists.html
keywords: "built-in actions, check folder exists, check folder exists (action), Android (action), check folder exists, check if folder exists, check whether folder exists, check existence of folder, verify existence of folder"
---

## Description

Check for the existence of a specified folder. Result is Passed ifthe folder is found ; otherwise Failed.

## Arguments

-   **folder**

    Full path of target folder.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_check_folder_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_folder_exists_res.png)




**Related information**  


[check folder not exists](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/check-folder-not-exists)

[does folder exist](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/does-folder-exist)

