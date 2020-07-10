--- 
title: "change folder attributes"
linktitle: "change folder attributes"
description: "Description Change the attributes of a folder. Arguments folder Full path of target folder. attributes New attribute value(s). Allowable values: Windows platform read-only Folder is read-only. hidden ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_change_folder_attributes.html
keywords: "built-in actions, change folder attributes, change folder attributes, set folder attributes, modify folder attributes, change folder properties, change folder attributes (action)"
---

## {{< expand >}} Description

Change the attributes of a folder.

## {{< expand >}} Arguments

-   **folder**

    Full path of target folder.

-   **attributes**

    New attribute value\(s\).

    Allowable values:

    -   Windows platform
        -   **read-only**

            Folder is read-only.

        -   **hidden**

            Folder is hidden, and thus is not included in an ordinary directory listing.

        -   **archive**

            Folder is a candidate for backup or removal.

        -   **normal**

            Folder is a standard file that has no special attributes.

    -   Linux platform
        -   **read**

            Folder's directory contents may be viewed \(ls command\).

        -   **write**

            Files in the folder may be added, removed or renamed.

        -   **execute**

            The contents and metadata of files in the folder may be accessed.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   Observe the following format for the folder path:
    -   **Windows platform**: Use backward slashes as separators for the path.
    -   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   Note that this built-in action is not currently supported on macOS or mobile platforms.
-   The attributes argument may include any combination of attributes allowed for the given platform, separated by commas.
-   \(Windows only\) If the attributes argument's value is set to normal, the action clears all existing attributes of the specified folder.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_change_folder_attribute_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_change_folder_attribute_res.png)




