--- 
title: "set text file"
linktitle: "set text file"
weight: 21
aliases: 
    - /TA_Automation/Topics/bia_set_text_file.html
---
# set text file {#bia_set_text_file .reference}

## Description { .section}

Write text to a file.

## Arguments { .section}

file name
:   Full path of target file.

text
:   Text to be written to the file.

type
:   \(Optional\) Type of action to be taken.

:   Allowable values:

    new
    :   \(Default\) Create a new file and write the text to that file.

    append
    :   Append the text to the current contents of an existing file.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Observe the following format for the file path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   This built-in action supports files with extension: .txt, .log, .dat.
-   type argument:
    -   If the specified value is new, but the file already exists, TestArchitect automatically overwrites the existing file with the new file.
    -   If the specified value is append, but the file does not exist, TestArchitect automatically creates a new file and writes the text to the newly created file.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_set_text_file_pgm.png)

**Result**

![](../Images/bia_set_text_file_res.png)

**Effect**

![](../Images/bia_set_text_file_aut.png)

**Parent topic:**[File and Folder](../../TA_Automation/Topics/bia_file_and_folder.html)

**Previous topic:**[rename folder](../../TA_Automation/Topics/bia_rename_folder.html)

