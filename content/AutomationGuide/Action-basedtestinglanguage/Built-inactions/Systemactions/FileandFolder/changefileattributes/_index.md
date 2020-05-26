--- 
title: "change file attributes"
linktitle: "change file attributes"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_change_file_attributes.html
---
# change file attributes {#bia_change_file_attributes .reference}

## Description { .section}

Change the attributes of a file.

## Arguments { .section}

file
:   Full path of target file.

attributes
:   New attribute value\(s\).

:   Allowable values:

    -   Windows platform

        read-only
        :   File is read-only.

        hidden
        :   File is hidden, and thus is not included in an ordinary directory listing.

        archive
        :   File is a candidate for backup or removal.

        normal
        :   File is a standard file that has no special attributes.

    -   Linux platform

        read
        :   File's contents may be viewed.

        write
        :   File's contents may be written.

        execute
        :   File may be executed.


## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   The attributes argument may include any combination of attributes allowed for the given platform, separated by commas.
-   \(Windows only\) If the attributes argument's value is set to normal, the action clears all existing attributes of the specified file.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_change_file_attribute_pgm.png)

**Result**

![](../Images/bia_change_file_attribute_res.png)

**Parent topic:**[File and Folder](../../TA_Automation/Topics/bia_file_and_folder.html)

**Next topic:**[change folder attributes](../../TA_Automation/Topics/bia_change_folder_attributes.html)

**Related information**  


[get file attributes](../../TA_Automation/Topics/bia_get_file_attributes.html)

