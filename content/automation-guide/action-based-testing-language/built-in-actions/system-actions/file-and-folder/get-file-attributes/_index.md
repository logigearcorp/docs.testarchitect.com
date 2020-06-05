--- 
title: "get file attributes"
linktitle: "get file attributes"
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_get_file_attributes.html
---
keyword: [get file attributes, retrieve file attributes]
---

# get file attributes

## Description

Retrieve all the currently set attributes of a specified file.

## Arguments

-   **file**

    Full path of target file.

-   **variable**

    \(Optional\) Variable to receive the returned value\(s\).

    Possible returned values:

    -   Read-only: The file is read-only.
    -   Archive: The file is a candidate for backup or removal.
    -   Hidden: The file is hidden, and thus is not included in an ordinary directory listing.
    -   Normal: The file is a standard file that has no special attributes.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   Multiple attribute values are delimited by commas in the returned string.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_get_file_attribute_pgm.png)

**Result**

![](/images//Images/bia_get_file_attribute_res.png)

**Parent topic:**[File and Folder](/TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[does folder exist](/TA_Automation/Topics/bia_does_folder_exist.html)

**Next topic:**[get file size](/TA_Automation/Topics/bia_get_file_size.html)

**Related information**  


[change file attributes](/TA_Automation/Topics/bia_change_file_attributes.html)

