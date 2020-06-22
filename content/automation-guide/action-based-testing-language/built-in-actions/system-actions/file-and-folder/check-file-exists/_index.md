--- 
title: "check file exists"
linktitle: "check file exists"
description: "Description Check for the existence of a specified file. Result is Passed if the file is found ; otherwise Failed . Arguments file Full path of target file. Valid contexts This action may be used ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_file_exists.html
keywords: "built-in actions, check file exists, check file exists (action), Android (action), check file exists, check existence of file, check if file exists, check whether file exists, verify existence of file, verify if file exists"
---

## Description

Check for the existence of a specified file. Result is Passed ifthe file is found ; otherwise Failed.

## Arguments

-   **file**

    Full path of target file.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux and Android platforms**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on the macOS or iOS platforms.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_check_file_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_file_exists_res.png)




**Related information**  


[check file not exists](/TA_Automation/Topics/bia_check_file_not_exists.html)

[does file exist](/TA_Automation/Topics/bia_does_file_exist.html)

